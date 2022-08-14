import { useState, useRef, memo, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useLocal from "../hooks/useLocal";

function NovelUpdate() {
  const [Value, setValue] = useState({ title: "", text: "" });
  const { title, text } = Value;
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
  useEffect(() => {
    setValue({ title: local[index].title, text: local[index].text });
  }, [local, index]);
  return (
    <div>
      <div>
        <h1>Novel Update</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (titleRef.current.value && textRef.current.value) {
              onUpdate();
              window.location.href = "/";
            }
          }}
        >
          <div>
            <input
              onChange={onChange}
              type="text"
              placeholder={title ? "제목" : ""}
              value={title}
              ref={titleRef}
              required
            />
            <textarea
              onChange={onChange}
              value={text}
              ref={textRef}
              required
            ></textarea>
          </div>
          <div>
            <button type="submit">Enter</button>
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default memo(NovelUpdate);
