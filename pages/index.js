import { useEffect } from "react";
import HomeComponent from "../components/home";
import api from "./../utils/api";

export default function Index({ data }) {
  return <HomeComponent data={data} />;
}

export async function getStaticProps() {
  let data = {};
  try {
    data.market = await api(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=7d"
    );
    data.all = await api(`https://api.coingecko.com/api/v3/coins/list`);
  } catch (error) {
    console.log(error);
  } finally {
    return { props: { data }, revalidate: 5 };
  }
}
