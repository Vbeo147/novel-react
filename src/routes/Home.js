import style from "../css/Home.module.css";
import { useState } from "react";
import useLocal from "../hooks/useLocal";
import NovelWrite from "../components/NovelWrite";
import NovelUpdate from "../components/NovelUpdate";

function Home() {
  const [Btn, setBtn] = useState({
    isRequired: false,
    isUpdated: false,
    sort: false,
  });
  const { isRequired, isUpdated, sort } = Btn;
  const { local, setLocal } = useLocal("Novel");
  const onClose = () => {
    setBtn({ ...Btn, isRequired: false });
  };
  const onWrite = (Value) => {
    setLocal((currentArray) => [Value, ...currentArray]);
  };
  const LocalMap = local.map((item) => <li key={item.id}>{item.title}</li>);
  return (
    <>
      {isRequired ? (
        <NovelWrite onClose={onClose} onWrite={onWrite} />
      ) : isUpdated ? (
        <NovelUpdate />
      ) : (
        <>
          <div className={style.home_header}>
            <h1 className={style.home_header__title}>Novel</h1>
            <div className={style.home_header__btn}>
              <button onClick={() => setBtn({ ...Btn, isRequired: true })}>
                글쓰기
              </button>
              <button>오름차순</button>
            </div>
          </div>
          {sort ? LocalMap.sort() : LocalMap.reverse()}
        </>
      )}
    </>
  );
}

export default Home;
