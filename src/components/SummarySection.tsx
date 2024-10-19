import { ICoin } from "@/types";
import Image from "next/image";
import React from "react";

export const SummarySection = (props: { activeCoin: ICoin }) => {
  const { activeCoin } = props;

  return (
    <div className="flex justify-start items-start lg:items-center py-2 lg:gap-20 pb-8">
      <Image
        className="w-1/4 lg:flex-1 pb-8 order-1"
        src={activeCoin.image}
        width={1000}
        height={1000}
        alt={activeCoin.name}
      />

      <div className="flex flex-col gap-4 lg:flex-[2] w-full">
        <h2>
          Rank: <span>{activeCoin.market_cap_rank}</span>
        </h2>
        <h1 className="text-5xl">{activeCoin.name}</h1>

        <h2 className="flex flex-col">
          Market Cap:
          <span className="text-2xl">
            $ {activeCoin.market_cap.toLocaleString()}
          </span>
        </h2>
        <h2 className="flex flex-col">
          Total Volume:
          <span className="text-2xl">
            $ {activeCoin.total_volume.toLocaleString()}
          </span>
        </h2>
        <h2 className="flex flex-col">
          High 24:
          <span className="text-green-500 text-2xl">
            $ {activeCoin.high_24h.toLocaleString()}
          </span>
        </h2>
        <h2 className="flex flex-col">
          Low 24:
          <span className="text-red-500 text-2xl">
            $ {activeCoin.low_24h.toLocaleString()}
          </span>
        </h2>
      </div>
    </div>
  );
};
