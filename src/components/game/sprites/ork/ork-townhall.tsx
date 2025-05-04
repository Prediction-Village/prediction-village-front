import { Assets, Texture } from "pixi.js";
import { useEffect, useState } from "react";

export const OrkTownhall = ({
  x,
  y,
  lvl,
}: { x: number; y: number; lvl: number }) => {
  const [bgTexture, setBgTexture] = useState(Texture.EMPTY);

  useEffect(() => {
    Promise.all([Assets.load(`/assets/ork/townhalls/${lvl}.webp`)]).then(
      ([bg]) => {
        setBgTexture(bg);
      },
    );
  }, [lvl]);

  return (
    <pixiSprite texture={bgTexture} x={x} y={y} width={100} height={100} />
  );
};
