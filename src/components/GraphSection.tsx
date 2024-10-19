import { Area, AreaChart, CartesianGrid, Layer, Line } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const chartConfig = {
  chart: {
    label: "Chart",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

const CustomActiveDot = (props: {
  setActiveDotPos: Dispatch<SetStateAction<{ x: number; y: number }>>;
  cx?: number;
  cy?: number;
}) => {
  const { setActiveDotPos, cx, cy } = props;

  useEffect(() => {
    setActiveDotPos({ x: cx!, y: cy! });
  }, []);

  return <span></span>;
};

type ICursorPos = {
  x: number;
  y: number;
};

interface ICustomCursorProps {
  activeDotPos: ICursorPos;
  width?: number;
  height?: number;
  points?: ICursorPos[];
  stroke?: string;
}

const CustomCursor = (props: ICustomCursorProps) => {
  const { points, stroke, width, height, activeDotPos } = props;

  if (!points || points.length === 0) return null;

  const activePoint = points[0];

  const { x } = activePoint;

  return (
    <Layer>
      {/* Vertical Line */}
      <Line
        type="basis"
        points={[
          { x, y: 0 },
          { x, y: height! },
        ]}
        stroke={stroke}
        strokeDasharray={"6, 6"}
        strokeWidth={1}
      />

      {/* Horizontal Line */}
      <Line
        type="basis"
        points={[
          { x: 0, y: activeDotPos.y },
          { x: width!, y: activeDotPos.y },
        ]}
        stroke={stroke}
        strokeDasharray={"6, 6"}
        strokeWidth={1}
      />
    </Layer>
  );
};

export const GraphSection = (props: {
  chartData: { price: number; timestamp: number }[];
}) => {
  const { chartData } = props;

  const [activeDotPos, setActiveDotPos] = useState<ICursorPos>({ x: 0, y: 0 });

  return (
    <ChartContainer
      className="text-white h-3/4 aspect-auto shadow-sm"
      config={chartConfig}
    >
      <AreaChart accessibilityLayer data={chartData}>
        {/* Added Linear Gradient */}
        <defs>
          <linearGradient id="price" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-chart)"
              stopOpacity={0.3}
            />
            <stop
              offset="25%"
              stopColor="var(--color-chart)"
              stopOpacity={0.2}
            />
            <stop offset="75%" stopColor="var(--color-chart)" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid
          horizontal={false}
          verticalCoordinatesGenerator={(props) =>
            new Array(7).fill(null).map((_, i) => (props.width / 6) * i)
          }
        />

        <ChartTooltip
          cursor={<CustomCursor activeDotPos={activeDotPos} />}
          content={
            <ChartTooltipContent
              className="bg-[#1A243A] !text-white"
              hideLabel
              hideIndicator
            />
          }
        />

        <Area
          fill="url(#price)"
          dataKey="price"
          type="linear"
          stroke="var(--color-chart)"
          strokeWidth={2}
          dot={false}
          activeDot={<CustomActiveDot setActiveDotPos={setActiveDotPos} />}
        />
      </AreaChart>
    </ChartContainer>
  );
};
