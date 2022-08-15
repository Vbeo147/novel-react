import style from "../css/Open.module.css";
import { useParams, useNavigate } from "react-router-dom";

function NovelOpen() {
  const { id } = useParams();
  const navigate = useNavigate();
  const Local = JSON.parse(localStorage.getItem("Novel"));
  const result = Local.findIndex((Info) => parseInt(Info.id) === parseInt(id));
  return (
    <div className={style.open_header}>
      <div className={style.open_header__title}>
        <p
          style={{
            textAlign: "center",
            width: "85%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {Local[result].title}
        </p>
        <div className={style.open_header__btn}>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            <i className="fa-solid fa-arrow-left-long"></i>
          </button>
        </div>
      </div>
      <div className={style.open_header__text}>
        <p>{Local[result].text}</p>
      </div>
    </div>
  );
}

export default NovelOpen;
