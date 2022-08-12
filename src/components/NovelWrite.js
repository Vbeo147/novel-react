import useLocal from "../hooks/useLocal";

function NovelWrite({ onClose }) {
  return (
    <div>
      <div>
        <h1>NovelWrite</h1>
        <input />
        <textarea></textarea>
      </div>
      <div>
        <button>Enter</button>
        <button
          onClick={() => {
            onClose();
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default NovelWrite;
