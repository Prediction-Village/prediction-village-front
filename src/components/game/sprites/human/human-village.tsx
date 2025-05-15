import { villageHeight, villageWidth } from "@/game/assets";
import { Assets, Texture } from "pixi.js";
import { useEffect, useState } from "react";
import type { VillageBuildings } from "../../types/village-buildings";
import { ArcherTower } from "../archer-tower";
import { Barracks } from "../barracks";
import { Lab } from "../lab";
import { GoldMine } from "../gold-mine";
import { HumanTownhall } from "./human-townhall";

export const HumanVillage = ({
  x,
  y,
  buildings,
}: { x: number; y: number; buildings: VillageBuildings }) => {
  const [bgTexture, setBgTexture] = useState(Texture.EMPTY);
  const [fenceTexture, setFenceTexture] = useState(Texture.EMPTY);

  useEffect(() => {
    Promise.all([
      Assets.load<Texture>("/assets/human/Human_village__Ground.png"),
      Assets.load<Texture>(
        `/assets/human/fence/Human_village__Fence_lv${buildings.townHall.lvl}.png`,
      ),
    ]).then(([bg, fence]) => {
      setBgTexture(bg);
      setFenceTexture(fence);
    });
  }, [buildings.townHall.lvl]);

  return (
    <>
      <pixiSprite
        texture={bgTexture}
        x={x}
        y={y}
        width={villageWidth}
        height={villageHeight}
      />
      <pixiSprite
        texture={fenceTexture}
        x={x}
        y={y}
        width={villageWidth}
        height={villageHeight}
      />

      <GoldMine
        villageType="human"
        x={x + 125}
        y={y + 180}
        lvl={buildings.goldMines.gm1.lvl}
      />
      {buildings.goldMines.gm2 && (
        <GoldMine
          villageType="human"
          x={x + 125}
          y={y + 50}
          lvl={buildings.goldMines.gm2.lvl}
        />
      )}
      {buildings.goldMines.gm3 && (
        <GoldMine
          villageType="human"
          x={x + 125}
          y={y + 310}
          lvl={buildings.goldMines.gm3.lvl}
        />
      )}
      {buildings.goldMines.gm4 && (
        <GoldMine
          villageType="human"
          x={x + 10}
          y={y + 120}
          lvl={buildings.goldMines.gm4.lvl}
        />
      )}
      {buildings.goldMines.gm5 && (
        <GoldMine
          villageType="human"
          x={x + 10}
          y={y + 240}
          lvl={buildings.goldMines.gm5.lvl}
        />
      )}

      <HumanTownhall
        x={x + 290}
        y={y + 180}
        lvl={buildings.townHall.lvl}
        damage={buildings.townHall.damage}
      />

      <ArcherTower
        villageType="human"
        x={x + 690}
        y={y + 65}
        lvl={buildings.townHall.lvl}
      />
      <ArcherTower
        villageType="human"
        x={x + 690}
        y={y + 265}
        lvl={buildings.townHall.lvl}
      />

      <Barracks
        villageType="human"
        x={x + 455}
        y={y + 160}
        lvl={buildings.barracks.b1.lvl}
      />
      {buildings.barracks.b2 && (
        <Barracks
          villageType="human"
          x={x + 455}
          y={y + 300}
          lvl={buildings.barracks.b2.lvl}
        />
      )}
      {buildings.barracks.b3 && (
        <Barracks
          villageType="human"
          x={x + 455}
          y={y + 20}
          lvl={buildings.barracks.b3.lvl}
        />
      )}
      {buildings.barracks.b4 && (
        <Barracks
          villageType="human"
          x={x + 565}
          y={y + 80}
          lvl={buildings.barracks.b4.lvl}
        />
      )}
      {buildings.barracks.b5 && (
        <Barracks
          villageType="human"
          x={x + 565}
          y={y + 230}
          lvl={buildings.barracks.b5.lvl}
        />
      )}

      <Lab
        villageType="human"
        x={x + 235}
        y={y + 10}
        lvl={buildings.labs.l1.lvl}
      />
      {buildings.labs.l2 && (
        <Lab
          villageType="human"
          x={x + 345}
          y={y + 10}
          lvl={buildings.labs.l2.lvl}
        />
      )}
      {buildings.labs.l3 && (
        <Lab
          villageType="human"
          x={x + 235}
          y={y + 330}
          lvl={buildings.labs.l3.lvl}
        />
      )}
      {buildings.labs.l4 && (
        <Lab
          villageType="human"
          x={x + 345}
          y={y + 330}
          lvl={buildings.labs.l4.lvl}
        />
      )}
    </>
  );
};
