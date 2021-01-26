import qs from "qs";
import { useEffect, useState } from "react";
// import "./styles/callback.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { api, socialProfileSubmit } from "../../../../src/services/api";
import { useRouter } from "next/router";

const Callback = () => {
  const router = useRouter();

  const [token, setToken] = useState("");
  const [showRender, setShowRender] = useState(false);
  const [info, setInfo] = useState("닉네임을 입력해주세요.");
  const [isCheckBtnClicked, setIsCheckBtnClicked] = useState(false);
  const [checkResult, setCheckResult] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailAllowed, setIsEmailAllowed] = useState(true);
  const [nickname, setNickname] = useState("");
  const [isNicknameAllowed, setIsNicknameAllowed] = useState(false);
  const [consent1, setConsent1] = useState(false); //개인정보 수집 동의 (필수)
  const [consent2, setConsent2] = useState(false); //마케팅 수신 동의 (선택)
  const specialCheck = /[`~!@#$%^&*|\\\'\";:\/?]/;

  const submit = async () => {
    if (!isNicknameAllowed) {
      alert("닉네임을 확인해주세요");
    } else if (!isEmailAllowed) {
      alert("이메일을 인증해주세요");
    } else if (!consent1) {
      alert("필수 약관에 동의하셔야 합니다.");
    } else {
      try {
        await socialProfileSubmit(nickname, email, consent2, token);
        await localStorage.setItem("DD_access", token);
        alert("데이타덕에 오신 것을 환영합니다!");
        router.push("http://127.0.0.1:3000/");
      } catch {
        alert("오류가 발생했습니다. 이메일과 닉네임을 다시 작성해주세요.");
      }
    }
  };

  const checkDuplication = async () => {
    try {
      // 닉네임을 입력하지 않았을 경우
      if (info === "닉네임을 입력해주세요.") {
        setIsCheckBtnClicked(true);
        setCheckResult("닉네임을 입력해주세요.");
      } else {
        const response = await api.post(`api/v1/users/check_nickname/`, {
          nickname,
        });
        if (isNicknameAllowed) {
          if (response.data.exist) {
            // alert("이미 사용 중인 닉네임입니다.");
            setInfo("다른 닉네임을 입력해주세요.");
            setIsCheckBtnClicked(true);
            setCheckResult("이미 존재하는 닉네임입니다.");
          } else {
            setIsNicknameAllowed(true);
            // alert("사용 가능한 닉네임입니다.");
            setInfo("사용 가능한 닉네임입니다.");
            setIsCheckBtnClicked(true);
            setCheckResult("사용 가능한 닉네임입니다.");
          }
        } else {
          setIsCheckBtnClicked(true);
          setCheckResult(info);
        }
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  const checkNickname = async (e) => {
    const value = e.target.value;
    setNickname(value);
    setIsNicknameAllowed(false);

    let nickLength = 0;
    if (value) {
      for (let i = 0; i < value.length; i++) {
        //한글은 2, 영문은 1로 치환
        const nick = value.charAt(i);
        if (escape(nick).length > 4) {
          nickLength += 2;
        } else {
          nickLength += 1;
        }
      }
    }

    if (value == null || value == "") {
      setInfo("닉네임을 입력해주세요.");
    } else if (value.search(/\s/) != -1) {
      setInfo("닉네임은 빈 칸을 포함할 수 없습니다.");
    } else if (nickLength < 2 || nickLength > 16) {
      setInfo("닉네임은 한글 1~8자, 영문 및 숫자 2~16자입니다.");
    } else if (specialCheck.test(value)) {
      setInfo("닉네임은 '_, -'를 제외한 특수문자를 포함할 수 없습니다.");
    } else {
      setIsNicknameAllowed(true);
    }
  };

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const provider = "google-oauth2";
    const index = router.asPath.indexOf("?");
    const urlParams = router.asPath.substring(index, router.asPath.length);
    const query = qs.parse(urlParams, {
      ignoreQueryPrefix: true,
    });
    const code = query.code;

    const getToken = async () => {
      const result = await api.post(
        `api/login/social/jwt-sliding-user/${provider}`,
        {
          provider,
          code,
        }
      );
      // 이메일을 소셜 페이지로부터 가져온 후 없을 경우 이메일을 입력받는다.
      setEmail(result.data.email);
      if (!result.data.email) {
        setIsEmailAllowed(false);
      }
      await setToken(result.data.token);
      const header = { Authorization: `Bearer ${result.data.token}` };

      const checkHasProfile = await api.post(
        "api/v1/users/has_profile/",
        {},
        { headers: header }
      );
      const hasProfile = checkHasProfile.data.hasProfile;

      if (hasProfile) {
        await localStorage.setItem("DD_access", result.data.token);
        router.push("http://127.0.0.1:3000/");
      } else {
        setShowRender(true);
      }
    };
    await getToken();
  };

  return showRender ? (
    <div className="container">
      <div className="illust_wrap">
        <img src="/images/submit_before.jpg" alt="ex" width="300" />
        <div className="content_title">
          닉네임을 설정하고 바로 시작해 보세요!
        </div>
      </div>

      <div className="body">
        <div className="content_wrap">
          <div className="content_inputSection">
            <div className="content_inputWrap">
              <input
                type="text"
                className="content_input"
                onChange={checkNickname}
              />
            </div>
            <div className="content_checkDupbtn" onClick={checkDuplication}>
              중복 확인
            </div>
          </div>
          {isCheckBtnClicked && checkResult === "사용 가능한 닉네임입니다." ? (
            <div className="check_resultTrue">{checkResult}</div>
          ) : (
            <div className="check_resultFalse">{checkResult}</div>
          )}
        </div>

        <div className="callback_noticeWrap">
          <div className="callback_notice check-all">
            <input
              id="check-all"
              type="checkbox"
              checked={consent1 && consent2}
              onChange={() => {
                if (!(consent1 && consent2)) {
                  setConsent1(true);
                  setConsent2(true);
                } else {
                  setConsent1(false);
                  setConsent2(false);
                }
              }}
            />
            <label htmlFor="check-all">
              <div className="icon-wrap">
                <FontAwesomeIcon icon={faCheck} className="icon" />
              </div>
              전체 동의
            </label>
          </div>

          <div className="callback-notice">
            <div className="checkbox">
              <input
                type="checkbox"
                id="consent1"
                checked={consent1}
                onChange={() => {
                  if (consent1) {
                    setConsent1(false);
                  } else {
                    setConsent1(true);
                  }
                }}
              />
              <label htmlFor="consent1">
                <div className="icon-wrap">
                  <FontAwesomeIcon icon={faCheck} className="icon" />
                </div>
                개인정보 수집•이용 동의
                <div className="option">
                  (필수)
                </div>
              </label>
            </div>
            <div className="text">
              <div className="text-title">개인정보 수집•이용 동의서</div>
              다올은 홈페이지 회원가입 및 관리, 서비스 제공, 고충처리 등을
              위하여 아래와 같이 개인정보를 수집•이용하고자 합니다.
              <br />
              <div className="text-subtitle">개인정보 수집•이용 내역</div>
              <span>수집•이용 항목: </span>아이디, 이메일, 닉네임
              <br />
              <span>수집•이용 목적: </span>
              <br />
              ①홈페이지 회원 가입 및 관리 ②대회 결과 및 상금 공고 안내
              <br />
              <span>보유기간: </span>홈페이지 탈퇴 시까지
            </div>
          </div>

          <div className="callback-notice">
            <div className="checkbox">
              <input
                type="checkbox"
                id="consent2"
                checked={consent2}
                onChange={() => {
                  if (consent2) {
                    setConsent2(false);
                  } else {
                    setConsent2(true);
                  }
                }}
              />
              <label htmlFor="consent2">
                <div className="icon-wrap">
                  <FontAwesomeIcon icon={faCheck} className="icon" />
                </div>
                마케팅 정 수신 동의
                <div className="option" style={{ color: "#c8c8c8" }}>
                  (선택)
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="content_startbtn" onClick={submit}>
        시작하기
      </div>
    </div>
  ) : null;
};

export default Callback;
