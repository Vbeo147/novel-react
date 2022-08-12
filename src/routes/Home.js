import style from "../css/Home.module.css";

function Home() {
  return (
    <div className={style.home_header}>
      <div>Novel</div>
      <div>
        <button>글쓰기</button>
        <button>오름차순</button>
      </div>
    </div>
  );
}

export default Home;
