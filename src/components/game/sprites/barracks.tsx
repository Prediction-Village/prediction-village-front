import { Assets, Texture } from "pixi.js";
import { useEffect, useState } from "react";
import type { VillageType } from "../types/bridge";
import { StatsSprite } from "./StatsOverlay";

export const Barracks = ({
  villageType,
  x,
  y,
  lvl,
}: { villageType: VillageType; x: number; y: number; lvl: number }) => {
  const [bgTexture, setBgTexture] = useState(Texture.EMPTY);

  useEffect(() => {
    Promise.all([
      Assets.load(`/assets/${villageType}/barracks/${lvl}.webp`),
    ]).then(([bg]) => {
      setBgTexture(bg);
    });
  }, [villageType, lvl]);

  return (
    <StatsSprite
      texture={bgTexture}
      x={x}
      y={y}
      width={villageType === "human" ? 110 : 100}
      height={villageType === "human" ? 131 : 88}
      stats={{ name: "Barracks", lvl }}
    />
  );
};
