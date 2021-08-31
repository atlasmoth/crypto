import api from "./../../utils/api";
import TokenScreen from "../../components/tokenScreen";

export default function Token(props) {
  return <TokenScreen data={props.data} />;
}

export async function getStaticProps(ctx) {
  let data = {};
  const {
    params: { token },
  } = ctx;
  try {
    data.primary = await api(
      `https://api.coingecko.com/api/v3/coins/${token}?tickers=true&market_data=true&community_data=true&developer_data=true`
    );
    data.secondary = await api(
      `https://api.coingecko.com/api/v3/coins/${token}/market_chart/range?vs_currency=usd&from=${
        new Date(new Date().setDate(new Date().getDate() - 365)).getTime() /
        1000
      }&to=${new Date().getTime() / 1000}`
    );
  } catch (error) {
    console.log(error);
  } finally {
    return { props: { data }, revalidate: 10 };
  }
}
export async function getStaticPaths() {
  let paths = [];

  try {
    const keys = await api(`https://api.coingecko.com/api/v3/coins/list`);
    paths = keys.map((d) => ({ params: { token: d.id } }));
  } catch (error) {
    console.log(error);
  } finally {
    return { paths, fallback: "blocking" };
  }
}
