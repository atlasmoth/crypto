import { useEffect } from "react";
import DateRanger from "./dateRange";
import MainChart from "./mainChart";

export default function TokenScreen({ data }) {
  useEffect(() => {
    console.log(data);
  }, []);
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
            <div>
              <DateRanger />
            </div>
          </header>
          <div className="box box-split">
            <MainChart data={data.secondary} />
          </div>
          <div className="box box-split">
            <h3>Exchange</h3>
            <div className="primary-box constrain">
              Exchange <i className="fas fa-arrow-right"></i>
            </div>
          </div>
        </article>
        <aside className="main-aside">
          <div className="box">
            <div className="info">
              <p>Info Card</p>
            </div>
            <div className="primary-box">
              <p>{String(data.primary.description.en.substr(0, 200))}</p>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
