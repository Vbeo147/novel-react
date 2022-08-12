import style from "../css/Home.module.css";
import { useState } from "react";
import NovelWrite from "../components/NovelWrite";
import NovelUpdate from "../components/NovelUpdate";

function Home() {
  const [Btn, setBtn] = useState({
    isRequired: false,
    isUpdated: false,
  });
  const { isRequired, isUpdated } = Btn;
  const onClose = () => {
    setBtn({ ...Btn, isRequired: false });
  };
  return (
    <>
      {isRequired ? (
        <NovelWrite onClose={onClose} />
      ) : isUpdated ? (
        <NovelUpdate />
      ) : (
        <div className={style.home_header}>
          <h1 className={style.home_header__title}>Novel</h1>
          <div className={style.home_header__btn}>
            <button onClick={() => setBtn({ ...Btn, isRequired: true })}>
              글쓰기
            </button>
            <button>오름차순</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
