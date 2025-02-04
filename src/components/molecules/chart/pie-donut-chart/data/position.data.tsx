interface Position {
  name: string;
  startPoint: {
    x: number;
    y: number;
    rotate?: number;
  };
  midPoint: {
    x: number;
    y: number;
    rotate?: number;
  };
  endPoint: {
    x: number;
    y: number;
    rotate?: number;
  };
  text: {
    anchor?: "start" | "middle" | "end";
    offset?: { x: number; y: number };
  };
}

const DESKTOP_POSITIONS: Position[] = [
  {
    name: "Liquidity Pool",
    startPoint: { x: -160, y: 20, rotate: 90 },
    midPoint: { x: -32, y: 100 },
    endPoint: { x: -32, y: 48 },
    text: { anchor: "start", offset: { x: -170, y: 12 } },
  },
  {
    name: "Private Sale",
    startPoint: { x: 140, y: -64 },
    midPoint: { x: 64, y: 0 },
    endPoint: { x: 120, y: 0 },
    text: { anchor: "start", offset: { x: 10, y: 13 } },
  },
  {
    name: "Marketing Wallet",
    startPoint: { x: 64, y: -140 },
    midPoint: { x: 32, y: -200 },
    endPoint: { x: 100, y: 0 },
    text: { anchor: "start", offset: { x: 10, y: 13 } },
  },
];

const MOBILE_POSITIONS: Position[] = [
  {
    name: "Liquidity Pool",
    startPoint: { x: -120, y: 54 },
    midPoint: { x: 0, y: 120 },
    endPoint: { x: 0, y: 60 },
    text: { anchor: "middle", offset: { x: 0, y: 34 } },
  },
  {
    name: "Private Sale",
    startPoint: { x: 120, y: -48 },
    midPoint: { x: 0, y: 0 },
    endPoint: { x: 0, y: 200 },
    text: { anchor: "middle", offset: { x: 0, y: 34 } },
  },
  {
    name: "Marketing Wallet",
    startPoint: { x: 52, y: -100 },
    midPoint: { x: -64, y: -150 },
    endPoint: { x: -64, y: -48 },
    text: { anchor: "middle", offset: { x: 0, y: -25 } },
  },
];
export { DESKTOP_POSITIONS, MOBILE_POSITIONS };
