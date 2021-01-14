import styles from "./styles/BodyCodebox.module.scss";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import hljs from "highlight.js";

hljs.configure({
  languages: ["python"],
});

const modules = {
  syntax: {
    highlight: (text) => hljs.highlightAuto(text).value,
  },
  toolbar: [
    ["bold", "italic", "underline", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
    ["clean"],
    ["code-block"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "code-block",
  "inline",
];

const BodyCodebox = () => {
  const [value, setValue] = useState<string>(
    `<code><pre># 파이썬 코드를 입력하세요 ! 
\n</pre></code>`
  );
  const ReactQuill =
    typeof window === "object" ? require("react-quill") : () => false;
  const handleEditior = (value: string) => {
    setValue(value);
  };

  return (
    <div className={styles.body_codebox}>
      <ReactQuill
        className="post-content"
        value={value}
        onChange={handleEditior}
        modules={modules}
        formats={formats}
        theme="bubble"
      />
    </div>
  );
};

export default BodyCodebox;
