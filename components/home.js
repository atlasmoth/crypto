import BasicChart from "./basicChart";
import Link from "next/link";

export default function HomeComponent({ data }) {
  return (
    <div className="container">
      <aside className="container-aside">
        <div className="box burger">🍔</div>
        <div className="box panel">
          <div className="primary-box">
            <span>
              <i className="fas fa-indent"></i>
            </span>
          </div>
          <div className="box">
            <span>
              <i className="far fa-chart-bar"></i>
            </span>
          </div>
        </div>
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
          </header>
          <div className="box box-split window">
            <h2>Market Leaders</h2>
            <div>
              {data.market.map((m) => (
                <Link href={`/token/${m.id}`} key={m.id}>
                  <a>
                    <div className="primary-box box-split box-crypto">
                      <div className="title">
                        {m.id}&nbsp;({m.symbol})
                      </div>
                      <BasicChart data={m} />
                      <div className="green" style={{ margin: "0 10px" }}>
                        {Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(m.price_change_24h)}
                      </div>
                      <div className="title">
                        {Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(m.current_price)}
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
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
