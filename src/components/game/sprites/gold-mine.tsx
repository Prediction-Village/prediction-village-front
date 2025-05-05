import { Assets, Texture } from "pixi.js";
import { useEffect, useState } from "react";
import type { VillageType } from "../types/bridge";

export const GoldMine = ({
  villageType,
  x,
  y,
  lvl,
}: { villageType: VillageType; x: number; y: number; lvl: number }) => {
  const [bgTexture, setBgTexture] = useState(Texture.EMPTY);

  useEffect(() => {
    Promise.all([
      Assets.load(`/assets/${villageType}/gold-mines/${lvl}.webp`),
    ]).then(([bg]) => {
      setBgTexture(bg);
    });
  }, [villageType, lvl]);

  return (
    <pixiSprite texture={bgTexture} x={x} y={y} width={100} height={100} />
  );
};
