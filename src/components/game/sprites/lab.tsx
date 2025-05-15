import { Assets, Texture } from "pixi.js";
import { useEffect, useState } from "react";
import type { VillageType } from "../types/bridge";
import { StatsSprite } from "./StatsOverlay";

export const Lab = ({
  villageType,
  x,
  y,
  lvl,
}: { villageType: VillageType; x: number; y: number; lvl: number }) => {
  const [bgTexture, setBgTexture] = useState(Texture.EMPTY);

  useEffect(() => {
    Promise.all([Assets.load(`/assets/${villageType}/lab/${lvl}.webp`)]).then(
      ([bg]) => {
        setBgTexture(bg);
      },
    );
  }, [villageType, lvl]);

  return (
    <StatsSprite
      texture={bgTexture}
      x={x}
      y={y}
      width={100}
      height={
        villageType === "human" ? 100 : lvl === 1 ? 86 : lvl <= 10 ? 99 : 108
      }
      stats={{ name: "Lab", lvl }}
    />
  );
};
