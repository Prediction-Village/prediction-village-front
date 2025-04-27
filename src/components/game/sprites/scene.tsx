import { bridgeWidth, villageWidth } from "@/game/assets";
import type { BridgeBoard, BridgeRow } from "../types/bridge";
import type { VillageBuildings } from "../types/village-buildings";
import { Bridge } from "./Bridge";
import { HumanVillage } from "./human/human-village";
import { OrkVillage } from "./ork-village";

const row: BridgeRow = {
  c1: "empty",
  c2: "empty",
  c3: "empty",
  c4: "empty",
  c5: "empty",
  c6: "empty",
  c7: "empty",
  c8: "empty",
  c9: "empty",
  c10: "empty",
  c11: "empty",
  c12: "empty",
  c13: "empty",
  c14: "empty",
  c15: "empty",
  c16: "empty",
};
const board: BridgeBoard = {
  r1: row,
  r2: row,
  r3: row,
  r4: row,
  r5: row,
  r6: row,
};

const humanVillageBuildings: VillageBuildings = {
  townHall: {
    lvl: 6,
    damage: 0,
  },
  goldMines: {
    gm1: {
      lvl: 1,
    },
    gm2: null,
    gm3: null,
    gm4: null,
    gm5: null,
  },
  barracks: {
    b1: {
      lvl: 1,
    },
    b2: null,
    b3: null,
    b4: null,
    b5: null,
  },
  labs: {
    l1: {
      lvl: 1,
    },
    l2: null,
    l3: null,
    l4: null,
    l5: null,
  },
};

export const Scene = () => {
  return (
    <>
      <HumanVillage x={0} y={0} buildings={humanVillageBuildings} />
      <Bridge x={villageWidth} y={96} board={board} />
      <OrkVillage x={villageWidth + bridgeWidth} y={0} />
    </>
  );
};
