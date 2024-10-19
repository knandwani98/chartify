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
      // PS: I had to remove fetch and add static Data because API has limited the request
      setData(TRENDING_COINS);
      return TRENDING_COINS;
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
      return data;
    }
  };

  useEffect(() => {
    fetchCoins();
  }, [TRENDING_COINS]);

  return { isError, isLoading, data };
};
