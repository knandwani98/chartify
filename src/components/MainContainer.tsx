import { ICoin } from "@/types";
import React, { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { ContentPanel } from "./ContentPanel";

export const MainContainer = (props: { activeCoin: ICoin | null }) => {
  const { activeCoin } = props;
  const [activeMenu, setActiveMenu] = useState<string>("Summary");

  useEffect(() => {
    if (activeCoin) {
      setActiveMenu("Summary");
    }
  }, [activeCoin]);

  if (!activeCoin) return <Card className="h-full bg-white shadow-none"></Card>;

  const stockInLoss = activeCoin.price_change_24h
    .toLocaleString()
    .includes("-");

  return (
    <>
      {/* Card Header */}
      <header className="">
        <div className="my-container">
          {/* Current Price */}
          <div className="flex justify-start items-start pt-8">
            <span className="text-xl">$</span>
            <h1 className="text-6xl ">
              {activeCoin.current_price.toLocaleString()}
            </h1>
            <span className="text-xl text-gray-400 ml-3 uppercase">
              {activeCoin.symbol}
            </span>
          </div>

          <p
            className={`py-4 ${
              stockInLoss ? "text-red-500" : "text-green-400"
            }`}
          >
            {!stockInLoss && "+ "}
            {activeCoin.price_change_24h.toPrecision()} (
            {activeCoin.price_change_percentage_24h.toFixed(2)}%)
          </p>

          {/* Menu Nav */}
          <div className="flex justify-start items-center overflow-x-scroll">
            {["Summary", "Chart", "Statistics", "Analysis", "Settings"].map(
              (menu) => {
                return (
                  <button
                    onClick={() => setActiveMenu(menu)}
                    className={`p-4 border-b-4  ${
                      activeMenu === menu
                        ? "border-primary"
                        : "border-white text-gray-700"
                    }`}
                    key={menu}
                  >
                    {menu}
                  </button>
                );
              }
            )}
          </div>
        </div>
      </header>

      <hr className="border border-gray-50" />

      {/* Bottom Container */}

      <div className="overflow-y-hidden h-full w-full">
        <ContentPanel activeCoin={activeCoin} activeMenu={activeMenu} />
      </div>
    </>
  );
};
