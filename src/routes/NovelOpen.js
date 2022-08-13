import { useParams, Link } from "react-router-dom";

function NovelOpen() {
  const { id } = useParams();
  const Local = JSON.parse(localStorage.getItem("Novel"));
  const result = Local.findIndex((Info) => Info.id === id) + 1;
  return (
    <div>
      <div>
        <h1>{Local[result].title}</h1>
      </div>
      <div>
        <h2>{Local[result].text}</h2>
      </div>
      <div>
        <Link to="/">
          <button>Close</button>
        </Link>
      </div>
    </div>
  );
}

export default NovelOpen;
