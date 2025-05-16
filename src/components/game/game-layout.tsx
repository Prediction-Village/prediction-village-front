import { Application, extend } from "@pixi/react";
import { Assets, Container, Graphics, Sprite, Text } from "pixi.js";
import type { Texture } from "pixi.js";

import { useEffect, useRef, useState } from "react";
import { Scene } from "./sprites/scene";

extend({
  Container,
  Graphics,
  Sprite,
  Text,
});

export const GameLayout = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const pointerStart = useRef({ x: 0, y: 0 });
  const [bgTexture, setBgTexture] = useState<Texture | null>(null);

  useEffect(() => {
    Assets.load("/bg.png").then((texture) => {
      setBgTexture(texture as Texture);
    });
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();

      const rect = el.getBoundingClientRect();
      const cursorX = e.clientX - rect.left;
      const cursorY = e.clientY - rect.top;

      const worldX = (cursorX - position.x) / scale;
      const worldY = (cursorY - position.y) / scale;

      const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1;
      const newScale = Math.min(Math.max(scale * zoomFactor, 0.5), 2);

      const newPosX = cursorX - worldX * newScale;
      const newPosY = cursorY - worldY * newScale;

      setScale(newScale);
      setPosition({ x: newPosX, y: newPosY });
    };
    el.addEventListener("wheel", wheelHandler, { passive: false });
    return () => el.removeEventListener("wheel", wheelHandler);
  }, [scale, position]);

  const onPointerDown = (e: React.PointerEvent) => {
    setDragging(true);
    dragStart.current = { ...position };
    pointerStart.current = { x: e.clientX, y: e.clientY };
  };
  const onPointerUp = () => setDragging(false);
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    const dx = e.clientX - pointerStart.current.x;
    const dy = e.clientY - pointerStart.current.y;
    setPosition({ x: dragStart.current.x + dx, y: dragStart.current.y + dy });
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-full overflow-hidden"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerMove={onPointerMove}
    >
      <Application resizeTo={containerRef} background="#5FC8ED">
        <pixiContainer x={position.x} y={position.y} scale={scale}>
          {bgTexture && (
            <pixiSprite
              texture={bgTexture}
              x={0}
              y={0}
              width={2500}
              height={1200}
            />
          )}
          <Scene y={440} />
        </pixiContainer>
      </Application>
    </div>
  );
};
