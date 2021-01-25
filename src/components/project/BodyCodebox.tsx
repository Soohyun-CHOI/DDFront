import styles from "./styles/BodyCodebox.module.scss";
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
  const value = `<code><pre>df_X = df_lol.drop(['Wins'], axis=1)\ndf_X.head()</pre></code>`;
  const ReactQuill =
    typeof window === "object" ? require("react-quill") : () => false;

  return (
    <div className={styles.Lolbody_codebox}>
      <ReactQuill
        className="post-content"
        value={value}
        modules={modules}
        formats={formats}
        readOnly={true}
        theme="bubble"
      />
    </div>
  );
};

export default BodyCodebox;
