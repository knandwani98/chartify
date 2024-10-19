"use client";

import { useState } from "react";
import { GraphSection } from "./GraphSection";
import { CirclePlus, Loader, Maximize2 } from "lucide-react";
import { useFetchSingleCoin } from "@/hooks/useFetchSingleCoin";
import { ICoin } from "@/types";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { DayTabs } from "./DayTabs";

export function GraphContainer(props: { activeCoin: ICoin }) {
  const { activeCoin } = props;

  const [daysLimit, setDaysLimit] = useState<number>();

  const { data: chartData, isLoading } = useFetchSingleCoin({
    id: activeCoin?.id,
    days: daysLimit,
  });

  return (
    <>
      <div className="flex justify-between items-center mt-4 mb-8">
        {/* Left Panel */}
        <div className="max-lg:hidden flex justify-between items-center gap-8">
          <Sheet>
            <SheetTrigger className="flex justify-between items-center gap-2  text-gray-700 hover:text-primary">
              <span>
                <Maximize2 className="size-5 hover:text-primary" />
              </span>
              Fullscreen
            </SheetTrigger>
            <SheetContent side={"bottom"} className="h-[90vh]">
              <SheetTitle className="sr-only">Graph</SheetTitle>

              <div className="mt-12 h-full">
                <DayTabs
                  daysLimit={daysLimit}
                  handleDaysLimit={(day: number) => setDaysLimit(day)}
                />
                <GraphSection chartData={chartData} />
              </div>
            </SheetContent>
          </Sheet>

          <button className="flex justify-between items-center gap-2  text-gray-700 hover:text-primary">
            <span>
              <CirclePlus className="size-5 hover:text-primary" />
            </span>
            Compare
          </button>
        </div>

        {/* Right Panel */}
        <DayTabs
          daysLimit={daysLimit}
          handleDaysLimit={(day: number) => setDaysLimit(day)}
        />
      </div>

      {isLoading ? (
        <div className="grid place-content-center">
          <div className="flex pt-32">
            <Loader className="animate-spin mr-2" />
            <span className="animate-pulse">Loading...</span>
          </div>
        </div>
      ) : (
        <GraphSection chartData={chartData} />
      )}
    </>
  );
}
