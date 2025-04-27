type BuildingLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Warrior = {
  lvl: BuildingLevel;
};
type BridgeFigure = "empty" | Warrior;

export type BridgeColKey =
  | "c1"
  | "c2"
  | "c3"
  | "c4"
  | "c5"
  | "c6"
  | "c7"
  | "c8"
  | "c9"
  | "c10"
  | "c11"
  | "c12"
  | "c13"
  | "c14"
  | "c15"
  | "c16";
export type BridgeRowKey = "r1" | "r2" | "r3" | "r4" | "r5" | "r6";

export type BridgeRow = {
  c1: BridgeFigure;
  c2: BridgeFigure;
  c3: BridgeFigure;
  c4: BridgeFigure;
  c5: BridgeFigure;
  c6: BridgeFigure;
  c7: BridgeFigure;
  c8: BridgeFigure;
  c9: BridgeFigure;
  c10: BridgeFigure;
  c11: BridgeFigure;
  c12: BridgeFigure;
  c13: BridgeFigure;
  c14: BridgeFigure;
  c15: BridgeFigure;
  c16: BridgeFigure;
};
export type BridgeBoard = {
  r1: BridgeRow;
  r2: BridgeRow;
  r3: BridgeRow;
  r4: BridgeRow;
  r5: BridgeRow;
  r6: BridgeRow;
};
