import { useEffect, useState } from "react";
import DateRanger from "./dateRange";
import MainChart from "./mainChart";
import api from "./../utils/api";

export default function TokenScreen({ data }) {
  const [state, setState] = useState({ start: null, end: null });
  const [chartData, setChartData] = useState(data.secondary);

  useEffect(() => {
    if (state?.start && state?.end) {
      api(
        `https://api.coingecko.com/api/v3/coins/${
          data.primary.id
        }/market_chart/range?vs_currency=usd&from=${
          new Date(state.start).getTime() / 1000
        }&to=${new Date(state.end).getTime() / 1000}`
      )
        .then((d) => setChartData(d))
        .catch(console.log);
    }
  }, [state]);
  return (
    <div className="container">
      <aside className="container-aside">
        <div className="box burger">🍔</div>
        <div className="box panel">
          <div className="box" style={{ textAlign: "center" }}>
            <span>
              <i className="fas fa-indent"></i>
            </span>
          </div>
          <div className="primary-box" style={{ textAlign: "center" }}>
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
            <div className="date">
              <DateRanger setState={setState} />
            </div>
          </header>
          <div className="box box-split">
            <MainChart data={chartData} />
          </div>
          <div className="side">
            <div className="box box-split">
              <h3>Exchange</h3>
              <div>
                <p>Buy {data.primary.market_data.current_price.usd}</p>
                <p></p>
              </div>
              <div className="primary-box constrain">
                Exchange <i className="fas fa-arrow-right"></i>
              </div>
            </div>
            <div className="box box-split">
              <h4>Alexa Rank</h4>
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
            <div className="box-split" style={{ fontSize: ".7rem" }}>
              <p>Facts </p>
              <p>Hashing Algorithm {data.primary.hashing_algorithm}</p>
              <p>Country Origin {data.primary.country_origin}</p>
              <p>Category {data.primary.categories[0]}</p>
            </div>
            <div
              className="primary-box box-split"
              style={{ fontSize: ".7rem" }}
            >
              <p>Total Supply{data.primary.market_data.total_supply}</p>
              <p>Max Supply{data.primary.market_data.max_supply}</p>
              <p>Circulating {data.primary.market_data.circulating_supply}</p>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
