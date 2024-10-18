"use client";

import { Button } from "./ui/button";
import { useState } from "react";
import { PERIOD_BUTTONS } from "@/lib/constants";
import { Graph } from "./Graph";
import { CirclePlus, Loader, Maximize2, TriangleAlert } from "lucide-react";
import { useFetchSingleCoin } from "@/hooks/useFetchSingleCoin";
import { ICoin } from "@/types";

export function GraphContainer(props: { activeCoin: ICoin }) {
  const { activeCoin } = props;

  const [daysLimit, setDaysLimit] = useState<number>();

  const {
    data: chartData,
    isLoading,
    isError,
  } = useFetchSingleCoin({
    id: activeCoin?.id,
    days: daysLimit,
  });

  return (
    <>
      <div className="flex justify-between items-center gap-2">
        {/* Left Panel */}
        <div className="flex justify-between items-center gap-8">
          <button className="flex justify-between items-center gap-2  text-gray-700 hover:text-primary">
            <span>
              <Maximize2 className="size-5 hover:text-primary" />
            </span>
            Fullscreen
          </button>
          <button className="flex justify-between items-center gap-2  text-gray-700 hover:text-primary">
            <span>
              <CirclePlus className="size-5 hover:text-primary" />
            </span>
            Compare
          </button>
        </div>

        {/* Right Panel */}
        <div className="mr-12">
          {PERIOD_BUTTONS.map((period) => {
            const activeBtn = daysLimit === period.value;
            return (
              <Button
                variant={activeBtn ? "default" : "ghost"}
                className={`${
                  activeBtn
                    ? "hover:text-white hover:bg-primary"
                    : "text-gray-700 hover:text-primary"
                } my-8`}
                key={period.value}
                onClick={() => setDaysLimit(period.value)}
              >
                {period.label}
              </Button>
            );
          })}
        </div>
      </div>
      <div className="relative">
        {isLoading ? (
          <div className="grid place-content-center">
            <div className="flex pt-32">
              <Loader className="animate-spin mr-2" />
              <span className="animate-pulse">Loading...</span>
            </div>
          </div>
        ) : isError ? (
          <div className="grid place-content-center">
            <div className="flex pt-32 text-red-500 animate-pulse">
              <TriangleAlert className=" mr-2" />
              <span className="">Something went wrong!</span>
            </div>
          </div>
        ) : (
          <Graph chartData={chartData} />
        )}
      </div>
    </>
  );
}
