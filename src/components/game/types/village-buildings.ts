type TownHall = {
  lvl: number;
  damage: number;
};

type GoldMine = {
  lvl: number;
};

type Barrack = {
  lvl: number;
};

type Lab = {
  lvl: number;
};

export type VillageBuildings = {
  townHall: TownHall;
  goldMines: {
    gm1: GoldMine;
    gm2: GoldMine | null;
    gm3: GoldMine | null;
    gm4: GoldMine | null;
    gm5: GoldMine | null;
  };
  barracks: {
    b1: Barrack;
    b2: Barrack | null;
    b3: Barrack | null;
    b4: Barrack | null;
    b5: Barrack | null;
  };
  labs: {
    l1: Lab;
    l2: Lab | null;
    l3: Lab | null;
    l4: Lab | null;
  };
};
