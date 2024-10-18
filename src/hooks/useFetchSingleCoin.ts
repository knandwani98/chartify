import { HistoricalChart } from "@/lib/apis";
import { CHAR_DATA } from "@/lib/constants";
import { useEffect, useState } from "react";

export const useFetchSingleCoin = (props: { id?: string; days?: number }) => {
  const { id, days } = props;

  const [data, setData] = useState<
    {
      price: number;
      timestamp: number;
    }[]
  >([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  //
  const fetchSingleCoin = async (id?: string, days?: number) => {
    setIsLoading(true);

    if (!id) throw new Error("Invalid Coin Id");

    try {
      // const response = await fetch(HistoricalChart(id, days));
      // if (!response) throw new Error("Something went wrong while fetching API");
      // const json = await response.json();
      // if (!json) throw new Error("Something went wrong while fetching JSON");
      // setData(json.prices);
      // return json.prices;
      setData(
        CHAR_DATA.map((data) => {
          return {
            price: data[1],
            timestamp: data[0],
          };
        })
      );
      return CHAR_DATA;
    } catch (error) {
      setIsError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleCoin(id, days);
  }, [id, days]);

  return { isError, isLoading, data };
};
