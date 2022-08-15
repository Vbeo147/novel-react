import style from "../css/Component.module.css";
import { useState, useRef, memo } from "react";

function NovelWrite({ onClose, onWrite }) {
  const [Value, setValue] = useState({ title: "", text: "" });
  const titleRef = useRef();
  const textRef = useRef();
  const { title, text } = Value;
  const onChange = () => {
    setValue({
      title: titleRef.current.value,
      text: textRef.current.value,
    });
  };
  return (
    <div className={style.component_column}>
      <form
        className={style.component_column__form}
        onSubmit={(e) => {
          e.preventDefault();
          const today = new Date();
          onWrite({
            title,
            text,
            id: JSON.stringify(today.getMilliseconds() * 1.5),
          });
          onClose();
        }}
      >
        <div className={style.component_column__form_title}>
          <h1>NovelWrite</h1>
          <input
            onChange={onChange}
            type="text"
            placeholder="제목"
            ref={titleRef}
            required
          />
        </div>
        <button
          onClick={() => {
            onClose();
          }}
        >
          <i className="fa-solid fa-arrow-left-long"></i>
        </button>
        <div className={style.component_column__form_text}>
          <textarea onChange={onChange} ref={textRef} required></textarea>
          <button type="submit">Enter</button>
        </div>
      </form>
    </div>
  );
}

export default memo(NovelWrite);
