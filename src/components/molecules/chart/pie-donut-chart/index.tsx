import { useMemo, useState } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";
import useIsMobile from "@/hooks/use-is-mobile";
import { CHART_DATA } from "./data/chart.data";
import PieChartActiveShape from "./helpers/pie-chart-active-shape";
import PieChartLabel from "./helpers/pie-chart-label";

const PieDonutChart = () => {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);

  // Components
  const ActiveShape = useMemo(() => {
    return (props: any) => (
      <PieChartActiveShape {...props} isMobile={isMobile} />
    );
  }, [isMobile]);

  const Label = useMemo(() => {
    return (props: any) => (
      <PieChartLabel {...props} viewMode={isMobile ? "mobile" : "desktop"} />
    );
  }, [isMobile]);

  return (
    <div className="w-[1000px] h-[650px] md:h-[450px] relative">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            label={Label}
            activeIndex={activeIndex}
            activeShape={ActiveShape}
            data={CHART_DATA}
            cx="50%"
            cy="50%"
            innerRadius={isMobile ? 84 : 100}
            outerRadius={isMobile ? 160 : 200}
            dataKey="value"
            onMouseEnter={(_, index) => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(0)}
            labelLine={false}
            startAngle={80}
            endAngle={440}
          >
            {CHART_DATA.map((entry) => (
              <Cell
                key={entry.name}
                fill={entry.color}
                className="transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.7)]"
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieDonutChart;
