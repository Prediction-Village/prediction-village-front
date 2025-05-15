import { Buffer } from "buffer";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { b } from "@zorsh/zorsh";

export const PositionSchema = b.struct({
  x: b.u32(),
  y: b.u32(),
});

export const WarriorSchema = b.struct({
  level: b.u8(),
  health: b.u32(),
  damage: b.u32(),
  position: PositionSchema,
});

export const ResourcesSchema = b.struct({
  gold: b.u32(),
  goldIncome: b.u32(),
  technologies: b.u32(),
  technologiesIncome: b.u32(),
});

export const TownHallSchema = b.struct({
  level: b.u8(),
  health: b.u32(),
  damage: b.u32(),
});

export const VillageSchema = b.struct({
  townHall: TownHallSchema,
  goldMines: b.vec(b.u8()),
  barracks: b.vec(b.u8()),
  laboratories: b.vec(b.u8()),
  warriors: b.vec(WarriorSchema),
  resources: ResourcesSchema,
});

export const GameStatusSchema = b.enum({
  inProgress: b.unit(),
  finished: b.u8(),
});

export const GameSchema = b.struct({
  lightForces: VillageSchema,
  darkForces: VillageSchema,
  status: GameStatusSchema,
});

export type Position = b.infer<typeof PositionSchema>;
export type Warrior = b.infer<typeof WarriorSchema>;
export type Resources = b.infer<typeof ResourcesSchema>;
export type TownHall = b.infer<typeof TownHallSchema>;
export type Village = b.infer<typeof VillageSchema>;
export type GameStatus = b.infer<typeof GameStatusSchema>;
export type Game = b.infer<typeof GameSchema>;

export async function fetchAccountInfo() {
  const payer = new PublicKey("FKsiBA3dvTNSMCw7Uwa82LigpHgJZTQ9tBHsS6MLDBkj");
  const programId = new PublicKey(
    "7DmaWof2zqAwJXnBWyFrpQa4dXUkGVaB5WqSj5QpobaK",
  );

  const [gamePda] = await PublicKey.findProgramAddress(
    [Buffer.from("game"), payer.toBuffer()],
    programId,
  );
  console.log("🧩 PDA:", gamePda.toBase58());

  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
  const accountInfo = await connection.getAccountInfo(gamePda);

  if (!accountInfo) {
    console.log("❌ Account not found.");
    return null;
  }

  try {
    // Skip the 8-byte discriminator
    const gameData = accountInfo.data.slice(8);

    const game = GameSchema.deserialize(gameData);

    console.log("🕹 Game:", game);
    return game;
  } catch (error) {
    console.error("❌ Failed to deserialize game data:", error);
    return null;
  }
}

export function createExampleGame(): Game {
  return {
    lightForces: {
      townHall: {
        level: 1,
        health: 1000,
        damage: 50,
      },
      goldMines: new Uint8Array([1, 2, 3]),
      barracks: new Uint8Array([4, 5, 6]),
      laboratories: new Uint8Array([7, 8, 9]),
      warriors: [
        {
          level: 1,
          health: 100,
          damage: 10,
          position: { x: 5, y: 5 },
        },
      ],
      resources: {
        gold: 500,
        goldIncome: 10,
        technologies: 100,
        technologiesIncome: 5,
      },
    },
    darkForces: {
      townHall: {
        level: 1,
        health: 1000,
        damage: 50,
      },
      goldMines: new Uint8Array([1, 2, 3]),
      barracks: new Uint8Array([4, 5, 6]),
      laboratories: new Uint8Array([7, 8, 9]),
      warriors: [
        {
          level: 1,
          health: 100,
          damage: 10,
          position: { x: 15, y: 15 },
        },
      ],
      resources: {
        gold: 500,
        goldIncome: 10,
        technologies: 100,
        technologiesIncome: 5,
      },
    },
    status: { inProgress: {}, finished: 0 },
  };
}
