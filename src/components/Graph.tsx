import { CartesianGrid, Line, LineChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartConfig = {
  chart: {
    label: "Chart",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export const Graph = (props: {
  chartData: { price: number; timestamp: number }[];
}) => {
  const { chartData } = props;

  return (
    <ChartContainer className="w-full" config={chartConfig}>
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid horizontal={false} verticalValues={[10, 10]} />

        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Line
          dataKey="price"
          type="linear"
          stroke="var(--color-chart)"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
};
