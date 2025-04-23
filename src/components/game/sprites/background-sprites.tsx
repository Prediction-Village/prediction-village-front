import { Assets, Texture } from "pixi.js";
import { useEffect, useState } from "react";

const villageWidth = 784;
const villageHeight = 464;

const bridgeWidth = 768;
const bridgeHeight = 288;

export const BackgroundSprites = () => {
  const [humanVillageTexture, setHumanVillageTexture] = useState(Texture.EMPTY);
  const [bridgeTexture, setBridgeTexture] = useState(Texture.EMPTY);
  const [orkVillageTexture, setOrkVillageTexture] = useState(Texture.EMPTY);

  useEffect(() => {
    Promise.all([
      Assets.load<Texture>("/assets/Human_village.png"),
      Assets.load<Texture>("/assets/Bridge.png"),
      Assets.load<Texture>("/assets/Ork_village.png"),
    ]).then(([human, bridge, ork]) => {
      setHumanVillageTexture(human);
      setBridgeTexture(bridge);
      setOrkVillageTexture(ork);
    });
  }, []);

  return (
    <>
      <pixiSprite
        texture={humanVillageTexture}
        x={0}
        y={0}
        width={villageWidth}
        height={villageHeight}
      />
      <pixiSprite
        texture={bridgeTexture}
        x={villageWidth}
        y={96}
        width={bridgeWidth}
        height={bridgeHeight}
      />
      <pixiSprite
        texture={orkVillageTexture}
        x={villageWidth + bridgeWidth}
        y={0}
        width={villageWidth}
        height={villageHeight}
      />
    </>
  );
};
