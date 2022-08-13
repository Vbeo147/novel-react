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
    <div>
      <div>
        <h1>NovelWrite</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const today = new Date();
            if (title && text) {
              onWrite({ title, text, id: today.getMilliseconds() * 2.2 });
              onClose();
            }
          }}
        >
          <div>
            <input
              onChange={onChange}
              type="text"
              placeholder="제목"
              ref={titleRef}
            />
            <textarea onChange={onChange} ref={textRef}></textarea>
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
    </div>
  );
}

export default memo(NovelWrite);
