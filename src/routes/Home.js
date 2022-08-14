import style from "../css/Home.module.css";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const LocalMap = local.map((item) => (
    <div className={style.home_list} key={item.id}>
      <div className={style.home_list__title}>
        <button
          onClick={() => {
            navigate(`/open/${item.id}`);
          }}
        >
          {item.title}
        </button>
      </div>
      <div className={style.home_list__btn}>
        <button
          onClick={() => {
            navigate(`/modify/${item.id}`);
          }}
        >
          Modify
        </button>
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
            <div className={style.home_header__title}>
              <div className={style.home_header__title_main}>Novel</div>
              <p className={style.home_header__title_sub}>
                My nickname is Vbeo, this is my first github javascript project!
              </p>
            </div>
            <div className={style.home_header__btn}>
              <button onClick={() => setBtn({ ...Btn, isRequired: true })}>
                Write
              </button>
              <button onClick={() => setBtn({ ...Btn, sort: !sort })}>
                {sort ? "Sort" : "Not Sort"}
              </button>
            </div>
          </div>
          <div>{sort ? LocalMap.sort() : LocalMap.reverse()}</div>
        </>
      )}
    </>
  );
}

export default Home;
