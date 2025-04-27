import { bridgeHeight, bridgeWidth } from "@/game/assets";
import { Assets, Texture } from "pixi.js";
import { useEffect, useState } from "react";
import type { BridgeBoard, BridgeColKey, BridgeRowKey } from "../types/bridge";

const assetHeight = 256;
const assetWidth = 256;

export const Bridge = ({
  x,
  y,
  board,
}: { x: number; y: number; board: BridgeBoard }) => {
  const [bgTexture, setBgTexture] = useState(Texture.EMPTY);
  const [warriorTexture, setWarriorTexture] = useState(Texture.EMPTY);

  useEffect(() => {
    Promise.all([
      Assets.load<Texture>("/assets/Bridge.png"),
      Assets.load("https://pixijs.com/assets/bunny.png"),
    ]).then(([bg, warrior]) => {
      setBgTexture(bg);
      setWarriorTexture(warrior);
    });
  }, []);

  return (
    <>
      <pixiSprite
        texture={bgTexture}
        x={x}
        y={y}
        width={bridgeWidth}
        height={bridgeHeight}
      />

      {Object.keys(board).flatMap((rowKey) => {
        const row = board[rowKey as BridgeRowKey];
        const rowIndex = parseInt(rowKey.substring(1)) - 1;

        return Object.keys(row).map((colKey) => {
          const figure = row[colKey as BridgeColKey];
          const colIndex = parseInt(colKey.substring(1)) - 1;

          // Skip rendering empty cells
          if (figure === "empty") return null;

          const figureTexture =
            typeof figure !== "string"
              ? Assets.get(`assets/Warrior_${figure.lvl}.png`) || warriorTexture
              : Texture.EMPTY;

          return (
            <pixiSprite
              key={`${rowKey}-${colKey}`}
              texture={figureTexture}
              x={x + colIndex * assetWidth}
              y={y + rowIndex * assetHeight}
              width={assetWidth}
              height={assetHeight}
            />
          );
        });
      })}
    </>
  );
};
