import style from "../css/Open.module.css";
import { memo } from "react";
import { useParams, useNavigate } from "react-router-dom";

function NovelOpen() {
  const { id } = useParams();
  const navigate = useNavigate();
  const Local = JSON.parse(localStorage.getItem("Novel"));
  const result = Local.findIndex((Info) => parseInt(Info.id) === parseInt(id));
  return (
    <div>
      <div>
        <h1>{Local[result].title}</h1>
        <h4>{Local[result].text}</h4>
      </div>
      <div>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default memo(NovelOpen);
