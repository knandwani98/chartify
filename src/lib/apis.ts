export const HistoricalChart = (id: string, days = 365) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=USD&days=${days}`;
