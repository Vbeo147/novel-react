import style from "../css/Component.module.css";
import { useCallback, useState, useRef, memo } from "react";
import Image from "./Image";

function NovelWrite({ onClose, onWrite }) {
  const [Value, setValue] = useState({ title: "", text: "", img: "" });
  const titleRef = useRef();
  const textRef = useRef();
  const { title, text, img } = Value;
  const onChange = useCallback(() => {
    setValue({
      ...Value,
      title: titleRef.current.value,
      text: textRef.current.value,
    });
  }, [Value]);
  const setImageFromFile = Image();
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
            img,
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
        <div className={style.component_column__form_img}>
          <label htmlFor="somenail">
            {img ? (
              <img
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "10px",
                  marginTop: "15px",
                }}
                src={img}
                alt="img"
              />
            ) : (
              "Selete Picture"
            )}
          </label>
          <input
            id="somenail"
            type="file"
            onChange={({ target: { files } }) => {
              if (files.length) {
                setImageFromFile({
                  file: files[0],
                  setImageUrl: ({ result }) =>
                    setValue({ ...Value, img: result }),
                });
              }
            }}
          />
        </div>
        <div className={style.component_column__form_text}>
          <textarea onChange={onChange} ref={textRef} required></textarea>
          <button type="submit">Enter</button>
        </div>
      </form>
    </div>
  );
}

export default memo(NovelWrite);
