import {
    Connection,
    PublicKey,
    clusterApiUrl,
  } from "@solana/web3.js";
import { Buffer } from "buffer";
import { deserialize, type Schema } from "borsh";

export const gameSchema: Schema = {
  struct: {
    lightForces: {
      struct: {
        townHall: {
          struct: {
            level: 'u8',
            health: 'u32',
            damage: 'u32'
          }
        },
        goldMines: 'string',       // можно заменить на { array: { type: 'u8' } } если это bytes
        barracks: 'string',
        laboratories: 'string',
        warriors: {
          array: {
            type: {
              struct: {
                level: 'u8',
                health: 'u32',
                damage: 'u32',
                position: {
                  struct: {
                    x: 'u32',
                    y: 'u32'
                  }
                }
              }
            }
          }
        },
        resources: {
          struct: {
            gold: 'u32',
            goldIncome: 'u32',
            technologies: 'u32',
            technologiesIncome: 'u32'
          }
        }
      }
    },
    darkForces: {
      struct: {
        townHall: {
          struct: {
            level: 'u8',
            health: 'u32',
            damage: 'u32'
          }
        },
        goldMines: 'string',
        barracks: 'string',
        laboratories: 'string',
        warriors: {
          array: {
            type: {
              struct: {
                level: 'u8',
                health: 'u32',
                damage: 'u32',
                position: {
                  struct: {
                    x: 'u32',
                    y: 'u32'
                  }
                }
              }
            }
          }
        },
        resources: {
          struct: {
            gold: 'u32',
            goldIncome: 'u32',
            technologies: 'u32',
            technologiesIncome: 'u32'
          }
        }
      }
    },
    status: {
        enum: [
          {
            struct: {
              inProgress: {
                struct: {} 
              }
            }
          },
          {
            struct: {
              finished: {
                struct: {
                  value: 'u8' 
                }
              }
            }
          }
        ]
      }  
    }
};

class Game {
  lightForces: Village | undefined;
  darkForces: Village | undefined;
  status: GameStatus | undefined;

  constructor(fields: Game) {
    Object.assign(this, fields);
  }
}
 
class Position {
  x: number;
  y: number;

  constructor(fields: { x: number; y: number }) {
    Object.assign(this, fields);
  }
}

class Warrior {
  level: number | undefined;
  health: number | undefined;
  damage: number | undefined;
  position: Position | undefined;

  constructor(fields: Warrior) {
    Object.assign(this, fields);
  }
}

class Resources {
  gold: number | undefined;
  goldIncome: number | undefined;
  technologies: number | undefined;
  technologiesIncome: number | undefined;

  constructor(fields: Resources) {
    Object.assign(this, fields);
  }
}

class TownHall {
  level: number | undefined;
  health: number | undefined;
  damage: number | undefined;

  constructor(fields: TownHall) {
    Object.assign(this, fields);
  }
}

class Village {
  townHall: TownHall | undefined;
  goldMines: Uint8Array | undefined;
  barracks: Uint8Array | undefined;
  laboratories: Uint8Array | undefined;
  warriors: Warrior[] | undefined;
  resources: Resources | undefined;

  constructor(fields: Village) {
    Object.assign(this, fields);
  }
}

class GameStatus {
  kind: string;
  value?: any;

  constructor({ kind, value }: { kind: string; value?: any }) {
    this.kind = kind;
    this.value = value;
  }
}

export async function fetchAccountInfo() {
    const payer = new PublicKey("FKsiBA3dvTNSMCw7Uwa82LigpHgJZTQ9tBHsS6MLDBkj");
    const programId = new PublicKey("7DmaWof2zqAwJXnBWyFrpQa4dXUkGVaB5WqSj5QpobaK");
  
    // Найдём PDA: game_pda = find_program_address(["game", payer], programId)
    const [gamePda] = await PublicKey.findProgramAddress(
      [Buffer.from("game"), payer.toBuffer()],
      programId
    );
    console.log("🧩 PDA:", gamePda.toBase58());
  
    // Получим данные аккаунта
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
    const accountInfo = await connection.getAccountInfo(gamePda);
  
    if (!accountInfo) {
      console.log("❌ Аккаунт не найден.");
      return;
    }
  
    const gameData = accountInfo.data.slice(8);
    const game = deserialize(gameSchema, gameData) as Game;

    console.log("🕹 Game:", game);
}
