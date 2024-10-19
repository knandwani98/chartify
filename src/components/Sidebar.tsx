"use client";

import { Loader } from "lucide-react";
import { ICoin } from "@/types";
import { useEffect } from "react";
import Image from "next/image";

import { useFetchTrendingCoins } from "@/hooks/useFetchTrendingCoins";

interface SidebarProps {
  activeCoin: ICoin | null;
  handleCoin: (coin: ICoin) => void;
}

export const Sidebar = (props: SidebarProps) => {
  const { activeCoin, handleCoin } = props;

  const { data: trendingCoins, isLoading, isError } = useFetchTrendingCoins();

  useEffect(() => {
    if (trendingCoins) {
      handleCoin(trendingCoins[0]);
    }
  }, [trendingCoins]);

  return isLoading ? (
    <div className="flex justify-center items-center h-full">
      <Loader className="animate-spin mr-2" />
    </div>
  ) : isError ? (
    <></>
  ) : (
    <ul className="flex flex-col">
      {trendingCoins?.map((coin: ICoin, idx: number) => (
        <li key={coin.id} className="cursor-pointer">
          <button
            onClick={() => handleCoin(coin)}
            className={`w-full py-2 px-4 text-left flex justify-between items-center gap-4 ${
              activeCoin?.id === coin.id
                ? "bg-primary font-bold text-white"
                : "hover:text-primary hover:font-bold"
            }`}
          >
            <div className="flex justify-start items-center gap-4">
              <div className="size-12 bg-secondary rounded-full grid place-content-center">
                <Image
                  className="size-8"
                  src={coin.image}
                  alt={coin.name}
                  width={1000}
                  height={1000}
                />
              </div>
              {coin.name}
            </div>

            {/*  */}
            <div className="flex justify-between items-center gap-2 max-xl:hidden">
              <p
                className={`py-4 ${
                  coin.price_change_24h.toLocaleString().includes("-")
                    ? "text-red-500"
                    : "text-green-400"
                }`}
              >
                $ {coin.market_cap.toLocaleString()}
              </p>
            </div>
          </button>

          {idx < trendingCoins.length - 1 && <hr />}
        </li>
      ))}
    </ul>
  );
};
