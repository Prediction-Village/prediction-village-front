import { Assets, Texture } from "pixi.js";
import { useEffect, useState } from "react";
import { StatsSprite } from "../StatsOverlay";

export const OrkTownhall = ({
  x,
  y,
  lvl,
  damage,
}: { x: number; y: number; lvl: number; damage: number }) => {
  const [bgTexture, setBgTexture] = useState(Texture.EMPTY);

  useEffect(() => {
    Promise.all([Assets.load(`/assets/ork/townhalls/${lvl}.webp`)]).then(
      ([bg]) => {
        setBgTexture(bg);
      },
    );
  }, [lvl]);

  return (
    <StatsSprite
      texture={bgTexture}
      x={x}
      y={y}
      width={100}
      height={100}
      stats={{ name: "Townhall", lvl, damage }}
    />
  );
};
