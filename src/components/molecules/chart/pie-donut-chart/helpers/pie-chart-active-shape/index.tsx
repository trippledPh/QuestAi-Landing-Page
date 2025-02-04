import { Sector } from "recharts";
import { ChartData } from "../../data/chart.data";

interface Props {
  cx: number;
  cy: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  payload: ChartData;
}

const PieChartActiveShape = ({
  cx,
  cy,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  payload,
}: Props) => (
  <g>
    <Sector
      cx={cx}
      cy={cy}
      innerRadius={innerRadius}
      outerRadius={outerRadius + 6}
      startAngle={startAngle}
      endAngle={endAngle}
      fill={payload.color}
      className="drop-shadow-[0_0_8px_rgba(0,255,255,0.7)]"
    />
  </g>
);

export default PieChartActiveShape;
