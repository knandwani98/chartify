import { ICoin } from "@/types";
import React, { useState } from "react";
import { Card } from "./ui/card";
import { Loader } from "lucide-react";
import { RightBottomPanel } from "./RightBottomPanel";

export const RightPanel = (props: { activeCoin: ICoin | null }) => {
  const { activeCoin } = props;
  const [activeMenu, setActiveMenu] = useState<string>("Chart");

  if (!activeCoin)
    return (
      <Card className="h-full bg-white shadow-none flex justify-center items-center">
        <Loader className="animate-spin mr-2" />
        <span className="animate-pulse"> Loading...</span>
      </Card>
    );

  return (
    <Card className="h-full bg-white shadow-none">
      {/* Card Header */}
      <div className="my-container">
        <div className="flex justify-start items-start pt-8">
          <h1 className="text-6xl ">
            {activeCoin.current_price.toLocaleString()}
          </h1>
          <span className="text-xl  text-gray-400 ml-3">USD</span>
        </div>

        <p
          className={`py-4 ${
            activeCoin.price_change_24h.toLocaleString().includes("-")
              ? "text-red-500"
              : "text-green-400"
          }`}
        >
          {activeCoin.price_change_24h.toPrecision()} (
          {activeCoin.price_change_percentage_24h.toFixed(2)}%)
        </p>

        {/* Menu Nav */}
        <div className="flex justify-start items-center">
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

      <hr className="border border-gray-50" />

      {/* Bottom Container */}
      <RightBottomPanel activeCoin={activeCoin} activeMenu={activeMenu} />
    </Card>
  );
};
