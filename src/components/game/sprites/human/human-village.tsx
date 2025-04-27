import { villageHeight, villageWidth } from "@/game/assets";
import { Assets, Texture } from "pixi.js";
import { useEffect, useState } from "react";
import type { VillageBuildings } from "../../types/village-buildings";
import { HumanTownhall } from "./human-townhall";

export const HumanVillage = ({
  x,
  y,
  buildings,
}: { x: number; y: number; buildings: VillageBuildings }) => {
  const [bgTexture, setBgTexture] = useState(Texture.EMPTY);

  useEffect(() => {
    Promise.all([Assets.load<Texture>("/assets/Human_village.png")]).then(
      ([bg]) => {
        setBgTexture(bg);
      },
    );
  }, []);

  return (
    <>
      <pixiSprite
        texture={bgTexture}
        x={x}
        y={y}
        width={villageWidth}
        height={villageHeight}
      />

      <HumanTownhall x={x + 290} y={y + 190} lvl={buildings.townHall.lvl} />
    </>
  );
};
