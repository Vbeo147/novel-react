import style from "../css/Component.module.css";
import { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useLocal from "../hooks/useLocal";

function NovelModify() {
  const [Value, setValue] = useState({ title: "", text: "", isDelete: false });
  const { title, text, isDelete } = Value;
  const { id } = useParams();
  const { local, setLocal } = useLocal("Novel");
  const titleRef = useRef();
  const textRef = useRef();
  const navigate = useNavigate();
  const onChange = () => {
    setValue({
      title: titleRef.current.value,
      text: textRef.current.value,
    });
  };
  const index = local.findIndex((Info) => parseInt(Info.id) === parseInt(id));
  const onUpdate = () => {
    const newLocal = [...local];
    newLocal.splice(index, 1, {
      title: title,
      text: text,
      id: id,
    });
    setLocal(newLocal);
  };
  const onDelete = () => {
    const removeItem = local.filter((Value) => {
      return Value.id !== id;
    });
    setLocal(removeItem);
  };
  useEffect(() => {
    setValue({ title: local[index].title, text: local[index].text });
  }, [local, index]);
  return (
    <div className={style.component_column}>
      <form
        className={style.component_column__form}
        onSubmit={(e) => {
          e.preventDefault();
          if (titleRef.current.value && textRef.current.value) {
            onUpdate();
            window.location.href = "/";
          }
        }}
      >
        <div className={style.component_column__form_title}>
          <h1>Novel Modify</h1>
          <input
            onChange={onChange}
            type="text"
            placeholder={title ? "" : "제목"}
            value={title}
            ref={titleRef}
            required
          />
        </div>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <i className="fa-solid fa-arrow-left-long"></i>
        </button>
        <div className={style.component_column__form_text}>
          <textarea
            onChange={onChange}
            value={text}
            ref={textRef}
            required
          ></textarea>
          <button type="submit">Enter</button>
        </div>
        <button
          type="button"
          onClick={() => {
            setValue({ ...Value, isDelete: true });
          }}
          className={style.component_column__btn_sm}
        >
          Delete
        </button>
        {isDelete ? (
          <div className={style.modify_delete}>
            <div className={style.modify_delete__main}>
              <h1>Delete True?</h1>
              <div className={style.modify_delete__btn}>
                <button
                  onClick={() => {
                    onDelete();
                    window.location.href = "/";
                  }}
                >
                  True
                </button>
                <button
                  onClick={() => {
                    setValue({ ...Value, isDelete: false });
                  }}
                >
                  False
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </form>
    </div>
  );
}

export default NovelModify;
