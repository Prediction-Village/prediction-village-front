import { villageHeight, villageWidth } from "@/game/assets";
import { Assets, Texture } from "pixi.js";
import { useEffect, useState } from "react";
import type { VillageBuildings } from "../../types/village-buildings";
import { ArcherTower } from "../archer-tower";
import { Barracks } from "../barracks";
import { GoldMine } from "../gold-mine";
import { Lab } from "../lab";
import { OrkTownhall } from "./ork-townhall";

export const OrkVillage = ({
  x,
  y,
  buildings,
}: { x: number; y: number; buildings: VillageBuildings }) => {
  const [bgTexture, setBgTexture] = useState(Texture.EMPTY);
  const [fenceTexture, setFenceTexture] = useState(Texture.EMPTY);

  useEffect(() => {
    Promise.all([
      Assets.load<Texture>("/assets/ork/Ork_village__Ground.png"),
      Assets.load<Texture>(
        `/assets/ork/fence/Ork_village__Fence_lv${buildings.townHall.lvl}.png`,
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
        villageType="ork"
        x={x + 560}
        y={y + 180}
        lvl={buildings.goldMines.gm1.lvl}
      />
      {buildings.goldMines.gm2 && (
        <GoldMine
          villageType="ork"
          x={x + 560}
          y={y + 50}
          lvl={buildings.goldMines.gm2.lvl}
        />
      )}
      {buildings.goldMines.gm3 && (
        <GoldMine
          villageType="ork"
          x={x + 560}
          y={y + 310}
          lvl={buildings.goldMines.gm3.lvl}
        />
      )}
      {buildings.goldMines.gm4 && (
        <GoldMine
          villageType="ork"
          x={x + 670}
          y={y + 120}
          lvl={buildings.goldMines.gm4.lvl}
        />
      )}
      {buildings.goldMines.gm5 && (
        <GoldMine
          villageType="ork"
          x={x + 670}
          y={y + 240}
          lvl={buildings.goldMines.gm5.lvl}
        />
      )}

      <OrkTownhall
        x={x + 390}
        y={y + 180}
        lvl={buildings.townHall.lvl}
        damage={buildings.townHall.damage}
      />

      <ArcherTower
        villageType="ork"
        x={x + 20}
        y={y + 65}
        lvl={buildings.townHall.lvl}
      />
      <ArcherTower
        villageType="ork"
        x={x + 20}
        y={y + 265}
        lvl={buildings.townHall.lvl}
      />

      <Barracks
        villageType="ork"
        x={x + 225}
        y={y + 170}
        lvl={buildings.barracks.b1.lvl}
      />
      {buildings.barracks.b2 && (
        <Barracks
          villageType="ork"
          x={x + 225}
          y={y + 310}
          lvl={buildings.barracks.b2.lvl}
        />
      )}
      {buildings.barracks.b3 && (
        <Barracks
          villageType="ork"
          x={x + 225}
          y={y + 40}
          lvl={buildings.barracks.b3.lvl}
        />
      )}
      {buildings.barracks.b4 && (
        <Barracks
          villageType="ork"
          x={x + 110}
          y={y + 100}
          lvl={buildings.barracks.b4.lvl}
        />
      )}
      {buildings.barracks.b5 && (
        <Barracks
          villageType="ork"
          x={x + 110}
          y={y + 250}
          lvl={buildings.barracks.b5.lvl}
        />
      )}

      <Lab
        villageType="ork"
        x={x + 340}
        y={y + 10}
        lvl={buildings.labs.l1.lvl}
      />
      {buildings.labs.l2 && (
        <Lab
          villageType="ork"
          x={x + 450}
          y={y + 10}
          lvl={buildings.labs.l2.lvl}
        />
      )}
      {buildings.labs.l3 && (
        <Lab
          villageType="ork"
          x={x + 340}
          y={y + 330}
          lvl={buildings.labs.l3.lvl}
        />
      )}
      {buildings.labs.l4 && (
        <Lab
          villageType="ork"
          x={x + 450}
          y={y + 330}
          lvl={buildings.labs.l4.lvl}
        />
      )}
    </>
  );
};
