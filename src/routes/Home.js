import style from "../css/Home.module.css";
import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import useLocal from "../hooks/useLocal";
import NovelWrite from "../components/NovelWrite";

function Home() {
  const [Btn, setBtn] = useState({
    isRequired: false,
    sort: false,
  });
  const { isRequired, sort } = Btn;
  const { local, setLocal } = useLocal("Novel");
  const onClose = () => {
    setBtn({ ...Btn, isRequired: false });
  };
  const onWrite = useCallback(
    (Value) => {
      setLocal((currentArray) => [Value, ...currentArray]);
    },
    [setLocal]
  );
  const LocalMap = local.map((item) => (
    <div key={item.id}>
      <div>
        <h4>{item.title}</h4>
        <Link to={`/Open/${item.id}`}>
          <button>보기</button>
        </Link>
        <button>편집</button>
      </div>
    </div>
  ));
  return (
    <>
      {isRequired ? (
        <NovelWrite onClose={onClose} onWrite={onWrite} />
      ) : (
        <>
          <div className={style.home_header}>
            <h1 className={style.home_header__title}>Novel</h1>
            <div className={style.home_header__btn}>
              <button onClick={() => setBtn({ ...Btn, isRequired: true })}>
                글쓰기
              </button>
              <button onClick={() => setBtn({ ...Btn, sort: !sort })}>
                {sort ? "오름차순" : "내림차순"}
              </button>
            </div>
          </div>
          {sort ? LocalMap.sort() : LocalMap.reverse()}
        </>
      )}
    </>
  );
}

export default Home;
