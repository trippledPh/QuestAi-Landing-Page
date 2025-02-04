import { CHART_DATA } from "../../data/chart.data";
import { DESKTOP_POSITIONS, MOBILE_POSITIONS } from "../../data/position.data";

interface Props {
  cx: number;
  cy: number;
  percent: number;
  index: number;
  name: string;
  viewMode: "mobile" | "desktop";
}

const PieChartLabel = ({ cx, cy, percent, index, name, viewMode }: Props) => {
  const positions =
    viewMode === "mobile" ? MOBILE_POSITIONS : DESKTOP_POSITIONS;
  const position = positions.find((pos) => pos.name === name) || positions[0];
  const fill = CHART_DATA[index]?.color || "#000";

  const startPoint = {
    x: cx + position.startPoint.x,
    y: cy + position.startPoint.y,
  };

  const midPoint = {
    x: startPoint.x + position.midPoint.x,
    y: cy + position.midPoint.y,
  };

  const endPoint = {
    x: startPoint.x + position.endPoint.x,
    y: midPoint.y + position.endPoint.y,
  };

  const textAnchor =
    position.text.anchor ?? (endPoint.x >= startPoint.x ? "start" : "end");

  // Get rotation angle
  const rotationAngle = position.startPoint.rotate || 0;

  // Create transform strings
  const groupTransform = `rotate(${rotationAngle}, ${startPoint.x}, ${startPoint.y})`;
  // Counter-rotate text to keep it upright
  const textTransform = `rotate(${-rotationAngle}, ${endPoint.x}, ${
    endPoint.y
  })`;

  return (
    <g transform={groupTransform}>
      <circle
        cx={startPoint.x}
        cy={startPoint.y}
        r={5}
        fill={fill}
        stroke="white"
        strokeWidth={2}
        className="transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.7)]"
      />

      <path
        d={`M${startPoint.x},${startPoint.y}L${midPoint.x},${midPoint.y}L${endPoint.x},${endPoint.y}`}
        stroke="white"
        strokeWidth={2}
        fill="none"
        className="transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.7)]"
      />

      {viewMode === "mobile" ? (
        <g transform={textTransform}>
          <text
            width={100}
            x={endPoint.x + (position.text.offset?.x ?? 0)}
            y={endPoint.y + (position.text.offset?.y ?? 0) - 10}
            textAnchor={textAnchor}
            className="text-lg font-medium fill-white break-all"
            style={{ whiteSpace: "nowrap" }}
          >
            {(percent * 100).toFixed(1)}%
          </text>
          <text
            width={100}
            x={endPoint.x + (position.text.offset?.x ?? 0)}
            y={endPoint.y + (position.text.offset?.y ?? 0) + 10}
            textAnchor={textAnchor}
            className="text-lg font-medium fill-white break-all"
            style={{ whiteSpace: "nowrap" }}
          >
            {name}
          </text>
        </g>
      ) : (
        <text
          width={100}
          x={endPoint.x + (position.text.offset?.x ?? 0)}
          y={endPoint.y + (position.text.offset?.y ?? 0) - 10}
          textAnchor={textAnchor}
          className="text-base font-medium fill-white break-all"
          style={{ whiteSpace: "nowrap" }}
          transform={textTransform}
        >
          {(percent * 100).toFixed(1)}% {name}
        </text>
      )}
    </g>
  );
};

export default PieChartLabel;
