export interface ICoin {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  image: string;
  market_cap: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
}
