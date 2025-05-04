import { bridgeWidth, villageWidth } from "@/game/assets";
import type { BridgeBoard, BridgeRow } from "../types/bridge";
import type { VillageBuildings } from "../types/village-buildings";
import { Bridge } from "./Bridge";
import { HumanVillage } from "./human/human-village";
import { OrkVillage } from "./ork/ork-village";

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
    lvl: 1,
    damage: 0,
  },
  goldMines: {
    gm1: {
      lvl: 1,
    },
    gm2: {
      lvl: 2,
    },
    gm3: {
      lvl: 3,
    },
    gm4: {
      lvl: 4,
    },
    gm5: {
      lvl: 5,
    },
  },
  barracks: {
    b1: {
      lvl: 1,
    },
    b2: {
      lvl: 2,
    },
    b3: {
      lvl: 3,
    },
    b4: {
      lvl: 4,
    },
    b5: {
      lvl: 5,
    },
  },
  labs: {
    l1: {
      lvl: 1,
    },
    l2: {
      lvl: 2,
    },
    l3: {
      lvl: 3,
    },
    l4: {
      lvl: 4,
    },
  },
};

export const Scene = () => {
  return (
    <>
      <HumanVillage x={0} y={0} buildings={humanVillageBuildings} />
      <Bridge x={villageWidth} y={89} board={board} />
      <OrkVillage x={villageWidth + bridgeWidth} y={0} />
    </>
  );
};
