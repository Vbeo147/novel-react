import style from "../css/Open.module.css";
import { memo } from "react";
import { useParams, useNavigate } from "react-router-dom";

function NovelOpen() {
  const { id } = useParams();
  const navigate = useNavigate();
  const Local = JSON.parse(localStorage.getItem("Novel"));
  const result = Local.findIndex((Info) => parseInt(Info.id) === parseInt(id));
  return (
    <div className={style.open_header}>
      <div className={style.open_header__main}>
        <div>{Local[result].title}</div>
        <div>{Local[result].text}</div>
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
