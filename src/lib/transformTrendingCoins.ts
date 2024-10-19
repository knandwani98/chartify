import { ICoin } from "@/types";

export const transformTrendingCoins = (props: { data: ICoin }) => {
  const { data } = props;

  if (!data) return null;

  return {
    id: data.id,
    symbol: data.symbol,
    name: data.name,
    current_price: data.current_price,
    image: data.image,
    market_cap: data.market_cap,
    market_cap_rank: data.market_cap_rank,
    price_change_24h: data.price_change_24h,
    price_change_percentage_24h: data.price_change_percentage_24h,
    total_volume: data.total_volume,
    high_24h: data.high_24h,
    low_24h: data.low_24h,
  };
};
