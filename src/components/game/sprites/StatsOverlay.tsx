import { TextStyle, type Texture } from "pixi.js";

export interface Stats {
  name: string;
  lvl: number;
  damage?: number;
}

export const StatsSprite = ({
  texture,
  x,
  y,
  width,
  height,
  stats,
}: {
  texture: Texture;
  x: number;
  y: number;
  width: number;
  height: number;
  stats: Stats;
}) => {
  return (
    <pixiContainer x={x} y={y}>
      <pixiSprite texture={texture} width={width} height={height} />
      {true && (
        <pixiContainer x={0} y={95} zIndex={1000}>
          <pixiGraphics
            draw={(g) => {
              g.clear();
              g.roundRect(0, 0, width, 40, 5);
              g.fill({ color: 0x000000, alpha: 0.7 });
            }}
          />
          <pixiText
            text={`${stats.name}`}
            style={
              new TextStyle({
                fill: "#ffffff",
                fontSize: 12,
              })
            }
            x={5}
            y={5}
          />
          <pixiText
            text={`Lvl: ${stats.lvl}`}
            style={new TextStyle({ fill: "#ffffff", fontSize: 14 })}
            x={5}
            y={20}
          />
          {stats.damage != null && (
            <pixiText
              text={`Dmg: ${stats.damage}`}
              style={new TextStyle({ fill: "#ffffff", fontSize: 14 })}
              x={width / 2}
              y={20}
            />
          )}
        </pixiContainer>
      )}
    </pixiContainer>
  );
};
