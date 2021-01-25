import { getBasicInformation } from "../../utils/authUtils";
import { getApi } from "../../services/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const CommentWrap = () => {
  const [basicInfo, setBasicInfo] = useState([]);
  const router = useRouter();
  let {
    asPath,
    query: { slug },
  } = router;

  //   useEffect(() => {
  //     init();
  //   }, [asPath]);

  const init = async () => {
    // const basicData = await getBasicInformation();
    // setBasicInfo(basicData);
    // 메인 메뉴일 때 주소 설정
    if (slug.length === 1) {
      const commentList = await getApi(
        `/api/v1/educations/lecturenotecomment_with_page/lol_${slug[0]}/`
      );
      //   console.log(commentList);
    }
  };

  return null;
};

export default CommentWrap;
