export interface ChartData {
  name: string;
  value: number;
  color: string;
  description?: string;
}

const CHART_DATA: ChartData[] = [
  {
    name: "Liquidity Pool",
    value: 800,
    color: "#03F6F8",
    description: "Main pool for trading and price stability",
  },
  {
    name: "Private Sale",
    value: 100,
    color: "#02C5C6",
    description: "Early supporters and investors",
  },
  {
    name: "Marketing Wallet",
    value: 100,
    color: "#9AFBFC",
    description: "Funds allocated for marketing and promotion",
  },
];

export { CHART_DATA };
