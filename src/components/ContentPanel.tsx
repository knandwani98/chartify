import { ICoin } from "@/types";
import { GraphContainer } from "./GraphContainer";
import { SummarySection } from "./SummarySection";

export const ContentPanel = (props: {
  activeMenu: string;
  activeCoin: ICoin | null;
}) => {
  const { activeMenu, activeCoin } = props;

  if (!activeCoin) return;

  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 overflow-y-scroll w-full py-4">
        <section className="my-container h-full">
          {/* Summary */}
          {activeMenu === "Summary" && (
            <SummarySection activeCoin={activeCoin} />
          )}

          {/* Chart */}
          {activeMenu === "Chart" && <GraphContainer activeCoin={activeCoin} />}

          {/* Statistics */}
          {activeMenu === "Statistics" && (
            <h1>Statistic is not available right now.</h1>
          )}
          {/* Analysis */}
          {activeMenu === "Analysis" && (
            <h1>Analysis is not available right now</h1>
          )}
          {/* Settings */}
          {activeMenu === "Settings" && (
            <h1>Settings is not available right now</h1>
          )}
        </section>
      </div>
    </div>
  );
};
