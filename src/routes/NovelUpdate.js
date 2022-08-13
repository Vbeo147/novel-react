import { useRef, memo } from "react";
import { useParams, Link } from "react-router-dom";

function NovelUpdate() {
  const titleRef = useRef();
  const textRef = useRef();
  const { id } = useParams();
  const Local = JSON.parse(localStorage.getItem("Novel"));
  const onUpdate = () => {
    const index = Local.findIndex((Info) => Info.id === id);
    const newLocal = [...Local];
    newLocal.splice(index, 1, {
      title: titleRef.current.value,
      text: textRef.current.value,
      id: id,
    });
  };
  return (
    <div>
      <div>
        <form>
          <input type="text" placeholder="제목" />
          <textarea></textarea>
        </form>
      </div>
      <div>
        <button>Enter</button>
        <button>Close</button>
      </div>
    </div>
  );
}

export default memo(NovelUpdate);
