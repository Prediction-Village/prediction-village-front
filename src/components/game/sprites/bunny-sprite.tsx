import { Assets, Texture } from "pixi.js";
import { useEffect, useRef, useState } from "react";

export function BunnySprite({ x, y }: { x: number; y: number }) {
  const spriteRef = useRef(null);
  const [texture, setTexture] = useState(Texture.EMPTY);
  const [isHovered, setIsHover] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (texture === Texture.EMPTY) {
      Assets.load("https://pixijs.com/assets/bunny.png").then((result) => {
        setTexture(result);
      });
    }
  }, [texture]);

  const toggleActive = () => setIsActive((prev) => !prev);

  return (
    <pixiSprite
      ref={spriteRef}
      anchor={0.5}
      eventMode="static"
      tabIndex={0}
      onClick={toggleActive}
      onPointerOver={() => setIsHover(true)}
      onPointerOut={() => setIsHover(false)}
      scale={isActive ? 1.5 : 1}
      rotation={isHovered ? 0.2 : 0}
      texture={texture}
      x={x}
      y={y}
    />
  );
}
