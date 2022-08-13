import { useState, useRef, memo } from "react";
import { useParams, Link } from "react-router-dom";
import useLocal from "../hooks/useLocal";

function NovelUpdate() {
  const [Value, setValue] = useState({ title: "", text: "" });
  const { title, text } = Value;
  const { id } = useParams();
  const { local, setLocal } = useLocal("Novel");
  const titleRef = useRef();
  const textRef = useRef();
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
  return (
    <div>
      <div>
        <h1>Novel Update</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (title && text) {
              onUpdate();
            }
          }}
        >
          <div>
            <input
              onChange={onChange}
              type="text"
              placeholder="제목"
              value={title || local.length !== 0 ? local[index].title : ""}
              ref={titleRef}
            />
            <textarea
              onChange={onChange}
              value={text || local.length !== 0 ? local[index].text : ""}
              ref={textRef}
            ></textarea>
          </div>

          <div>
            <button type="submit">Enter</button>
            <Link to="/">
              <button>Close</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default memo(NovelUpdate);
