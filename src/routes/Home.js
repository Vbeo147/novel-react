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
  const LocalMap = local.map((item) => (
    <div key={item.id}>
      <div>
        <h1>{item.title}</h1>
        <button>보기</button>
        <button>편집</button>
      </div>
    </div>
  ));
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
