import ReactPlayer from "react-player";
import styles from "./styles/Video.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import { matchMenuinfo, matchNextPageURL } from "./Nextbutton";
import { ProjectList } from "../common/ProjectList";

const URL = "https://www.youtube.com/watch?v=R5_Is8Hdqm8";

const Video = () => {
  const router = useRouter();
  const project = ProjectList.filter((name) => router.asPath.includes(name))[0];
  const path = router.query.slug;

  return (
    <div className={styles.video_wrap}>
      <ReactPlayer url={URL} controls width="100%" />
      <div className={styles.buttonSection_wrap}>
        {path.length === 1 && path[0] === "01" && (
          // 추후에 구글 드라이브 다운로드 링크 고쳐야 함
          <Link
            href={`https://drive.google.com/drive/folders/1q1lFAbs3-g-49nROIzqQeO_HMnOriqOh?usp=sharing`}
          >
            <a className={styles.data_buttonName}>
              <div className={styles.data_button}>데이터 다운로드</div>
            </a>
          </Link>
        )}
        <Link href={matchNextPageURL(matchMenuinfo(project), path)}>
          <a className={styles.next_buttonName}>
            <div className={styles.next_button}>다음 단계</div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Video;
