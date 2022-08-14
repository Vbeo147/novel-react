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
      <div className={style.component_column__title}>
        <h1>NovelWrite</h1>
      </div>
      <form
        className={style.component_column__form}
        onSubmit={(e) => {
          e.preventDefault();
          const today = new Date();
          onWrite({ title, text, id: today.getMilliseconds() * 1.5 });
          onClose();
        }}
      >
        <div className={style.component_column__form_header}>
          <input
            onChange={onChange}
            type="text"
            placeholder="제목"
            ref={titleRef}
            required
          />
          <textarea onChange={onChange} ref={textRef} required></textarea>
        </div>
        <div>
          <button type="submit">Enter</button>
          <button
            onClick={() => {
              onClose();
            }}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}

export default memo(NovelWrite);
