import ReactPlayer from "react-player";
import styles from "./styles/Video.module.scss";
import Link from "next/link";

const URL = "https://www.youtube.com/watch?v=R5_Is8Hdqm8";

const Video = () => {
  return (
    <div className={styles.video_wrap}>
      <ReactPlayer url={URL} controls width="100%" />
      <div className={styles.buttonSection_wrap}>
        <Link href="/lol/01">
          <a className={styles.data_buttonName}>
            <div className={styles.data_button}>데이터 다운로드</div>
          </a>
        </Link>
        <Link href="/lol/02">
          <a className={styles.next_buttonName}>
            <div className={styles.next_button}>다음 단계</div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Video;
