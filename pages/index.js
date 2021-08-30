import HomeComponent from "../components/home";
import api from "./../utils/api";

export default function Index({ data }) {
  return <HomeComponent data={data} />;
}

export async function getServerSideProps() {
  console.log("this is running");
  let data = {};
  try {
    data.market = await api(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h"
    );
    data.all = await api(``);
  } catch (error) {
    console.log(error);
  } finally {
    return { props: { data } };
  }
}
