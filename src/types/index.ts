export interface ICoin {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  image: string;
  market_cap: number;
  market_cap_rank: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
}
