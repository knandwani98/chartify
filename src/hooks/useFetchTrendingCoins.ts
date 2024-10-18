import { TRENDING_COINS } from "@/lib/constants";
import { ICoin } from "@/types";
import { useEffect, useState } from "react";

export const useFetchTrendingCoins = () => {
  const [data, setData] = useState<ICoin[]>();
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  //
  const fetchCoins = async () => {
    setIsLoading(true);
    try {
      // const response = await fetch(TrendingCoins());
      // if (!response) throw new Error("Something went wrong while fetching API");
      // const json = await response.json();
      // if (!json) throw new Error("Something went wrong while fetching JSON");
      // setData(json);
      // return json;
      setData(TRENDING_COINS);
      return TRENDING_COINS;
    } catch (error) {
      setIsError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return { isError, isLoading, data };
};
