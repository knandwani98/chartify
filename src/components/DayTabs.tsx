import React from "react";
import { Button } from "./ui/button";
import { PERIOD_BUTTONS } from "@/lib/constants";

export const DayTabs = (props: {
  daysLimit?: number;
  handleDaysLimit: (days: number) => void;
}) => {
  const { daysLimit, handleDaysLimit } = props;

  return (
    <ul className="w-full xl:mr-12 flex items-center justify-end overflow-x-n sm:gap-3 lg:gap-0 xl:gap-2">
      {PERIOD_BUTTONS.map((period) => {
        return (
          <li key={period.label}>
            <Button
              variant={daysLimit === period.value ? "default" : "ghost"}
              className={`${
                daysLimit === period.value
                  ? "hover:text-white hover:bg-primary"
                  : "text-gray-700 hover:text-primary"
              }`}
              onClick={() => handleDaysLimit(period.value!)}
            >
              {period.label}
            </Button>
          </li>
        );
      })}
    </ul>
  );
};
