import { useEffect, useState } from "react";
import { toast } from "sonner";

export const useFetchSingleCoin = (props: { id?: string; days?: number }) => {
  const { id, days = 365 } = props;

  const [data, setData] = useState<
    {
      price: number;
      timestamp: number;
    }[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  //
  const fetchSingleCoin = async (id?: string, days?: number) => {
    setIsLoading(true);

    if (!id) throw new Error("Invalid Coin Id");

    try {
      const response = await fetch(`/api/coin/${id}/?days=${days?.toString()}`);

      if (!response) throw new Error("Something went wrong while fetching API");
      const json = await response.json();
      if (!json) throw new Error("Something went wrong while fetching JSON");

      if (json.length === 0) return [];

      const charDataArr = json?.prices?.map((data: number[]) => {
        return {
          price: data[1],
          timestamp: data[0],
        };
      });
      setData(charDataArr);
      return charDataArr;
    } catch (error) {
      console.log(error);
      toast.error(
        "Too many request.  Please wait for a minute and then try again"
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleCoin(id, days);
  }, [id, days]);

  return { isLoading, data };
};
