import BasicChart from "./basicChart";

export default function HomeComponent() {
  return (
    <div className="container">
      <aside className="container-aside">
        <div className="box burger">🍔</div>
        <div className="box panel">Icons</div>
      </aside>
      <main className="container-main">
        <article className="main-article">
          <header className="header">
            <div className="search">
              <span>🔍</span>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="search"
                autoComplete="off"
              />
            </div>
            <div className="box">
              <p>Hello Box</p>
            </div>
          </header>
          <div className="box box-split">
            <h2>Market Leaders</h2>
            <BasicChart />
          </div>
          <div className="box box-split">
            <h2>All Coins</h2>
          </div>
        </article>
        <aside className="main-aside">
          <div className="box">
            <div className="info">
              <p>Info Card</p>
            </div>
            <div className="primary-box">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              ullam nemo eligendi distinctio? Dicta, nam, placeat cupiditate
              consectetur magni quisquam fuga alias fugit veniam delectus magnam
              aliquam mollitia, velit necessitatibus?
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
