import { ICoin } from "@/types";
import { GraphContainer } from "./GraphContainer";

export const RightBottomPanel = (props: {
  activeMenu: string;
  activeCoin: ICoin | null;
}) => {
  const { activeMenu, activeCoin } = props;

  return (
    <div
      style={{
        height: "calc(100% - 224px)",
      }}
      className="relative my-4"
    >
      <div className="absolute inset-0 overflow-y-scroll py-2">
        <div className="my-container">
          {/* Summary */}
          {activeMenu === "Summary" && <h1>Summary</h1>}

          {/* Chart */}
          {activeCoin && activeMenu === "Chart" && (
            <GraphContainer activeCoin={activeCoin} />
          )}
          {/* Statistics */}
          {activeMenu === "Statistics" && (
            <h1>Statistics not available right now.</h1>
          )}
          {/* Analysis */}
          {activeMenu === "Analysis" && (
            <h1>Analysis not available right now</h1>
          )}
          {/* Settings */}
          {activeMenu === "Settings" && <div className="w-full h-full"></div>}
        </div>
      </div>
    </div>
  );
};
