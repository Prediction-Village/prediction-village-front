import { villageHeight, villageWidth } from "@/game/assets";
import { Assets, Texture } from "pixi.js";
import { useEffect, useState } from "react";

export const HumanVillage = ({ x, y }: { x: number; y: number }) => {
  const [bgTexture, setBgTexture] = useState(Texture.EMPTY);

  useEffect(() => {
    Promise.all([Assets.load<Texture>("/assets/Human_village.png")]).then(
      ([bg]) => {
        setBgTexture(bg);
      },
    );
  }, []);

  return (
    <pixiSprite
      texture={bgTexture}
      x={x}
      y={y}
      width={villageWidth}
      height={villageHeight}
    />
  );
};
