import { villageHeight, villageWidth } from "@/game/assets";
import { Assets, Texture } from "pixi.js";
import { useEffect, useState } from "react";
import { OrkTownhall } from "./ork-townhall";

export const OrkVillage = ({ x, y }: { x: number; y: number }) => {
  const [bgTexture, setBgTexture] = useState(Texture.EMPTY);

  useEffect(() => {
    Promise.all([Assets.load<Texture>("/assets/Ork_village.png")]).then(
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

      <OrkTownhall x={x + 390} y={y + 180} lvl={2} />
    </>
  );
};
