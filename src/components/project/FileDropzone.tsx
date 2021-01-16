import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./styles/FileDropzone.module.scss";

const FileDropzone = () => {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const [isUploading, setIsUploading] = useState(true);

  const onDrop = useCallback((acceptedFiles) => {
    const myFile = acceptedFiles[0];
    setFile(myFile);
    setFileName(myFile.name);
    setIsUploading(false);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // 백엔드 작업 후 완성 요망(form post)
  const upload = async (e) => {
    e.preventDefault();
    let fileData = new FormData();
    fileData.append("file", file);
  };

  const matchStyle = (className: string) => {
    switch (className) {
      case "dropzone_section":
        return styles.dropzone_section;
      case "dropzone_input":
        return styles.dropzone_input;
      default:
        return null;
    }
  };

  return (
    <div className={styles.dropzone_wrap}>
      <div className={styles.dropzone_left}>
        <div {...getRootProps({ className: matchStyle("dropzone_section") })}>
          <input
            {...getInputProps({ className: matchStyle("dropzone_input") })}
          />
          {isUploading ? (
            <>
              {isDragActive ? (
                <p>이 파일 올려놓기</p>
              ) : (
                <p>답안 파일을 마우스로 끌어 놓아주세요!</p>
              )}
            </>
          ) : (
            <>
              <p>
                <u>{fileName}</u>
              </p>
              <p>재체출을 원하시면 파일을 다시 끌어 놓아주세요!</p>
            </>
          )}
        </div>
      </div>
      <div className={styles.dropzone_right}>
        {isUploading ? (
          <div className={styles.empty_wrap}></div>
        ) : (
          <div className={styles.result_wrap}>
            <p className={styles.score_wrap}>score: 84</p>
            <p className={styles.grade_wrap}>
              &lt;개쩌는 무언가&gt; 등급입니다!
            </p>
          </div>
        )}
        <div className={styles.illust_wrap}>
          <img src="/images/ex.png" alt="ex" width="100%" height="100%" />
        </div>
      </div>
    </div>
  );
};

export default FileDropzone;
