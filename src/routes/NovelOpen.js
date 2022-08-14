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
      <div className={style.open_header__title}>
        <div>{Local[result].title}</div>
        <div className={style.open_header__btn}>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            <i class="fa-solid fa-arrow-left-long"></i>
          </button>
        </div>
      </div>
      <div className={style.open_header__text}>
        <p>{Local[result].text}</p>
      </div>
    </div>
  );
}

export default memo(NovelOpen);
