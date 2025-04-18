import { Application, extend } from "@pixi/react";
import { Container, Graphics, Sprite } from "pixi.js";

import { BunnySprite } from "./sprites/bunny-sprite";

// extend tells @pixi/react what Pixi.js components are available
extend({
  Container,
  Graphics,
  Sprite,
});

export const GameLayout = () => {
  return (
    <Application>
      <BunnySprite />
    </Application>
  );
};
