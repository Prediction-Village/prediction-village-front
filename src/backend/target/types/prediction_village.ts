/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/prediction_village.json`.
 */
export type PredictionVillage = {
  "address": "7DmaWof2zqAwJXnBWyFrpQa4dXUkGVaB5WqSj5QpobaK",
  "metadata": {
    "name": "predictionVillage",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "generateIncome",
      "discriminator": [
        79,
        224,
        119,
        150,
        186,
        71,
        225,
        66
      ],
      "accounts": [
        {
          "name": "game",
          "writable": true
        }
      ],
      "args": []
    },
    {
      "name": "initGame",
      "discriminator": [
        251,
        46,
        12,
        208,
        184,
        148,
        157,
        73
      ],
      "accounts": [
        {
          "name": "game",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  97,
                  109,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "payer"
              }
            ]
          }
        },
        {
          "name": "payer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "restartGame",
      "discriminator": [
        16,
        197,
        136,
        154,
        109,
        220,
        184,
        140
      ],
      "accounts": [
        {
          "name": "game",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  103,
                  97,
                  109,
                  101
                ]
              },
              {
                "kind": "account",
                "path": "authority"
              }
            ]
          }
        },
        {
          "name": "authority",
          "writable": true,
          "signer": true
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "game",
      "discriminator": [
        27,
        90,
        166,
        125,
        74,
        100,
        121,
        18
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "statusIsNotInProgress",
      "msg": "The game status is not currently set to InProgress."
    },
    {
      "code": 6001,
      "name": "lightForcesKeyMismatch",
      "msg": "The light forces key mismatch."
    },
    {
      "code": 6002,
      "name": "darkForcesKeyMismatch",
      "msg": "The dark forces key mismatch."
    },
    {
      "code": 6003,
      "name": "gameInProgress",
      "msg": "The game is in progress."
    }
  ],
  "types": [
    {
      "name": "game",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "lightForces",
            "type": {
              "defined": {
                "name": "village"
              }
            }
          },
          {
            "name": "darkForces",
            "type": {
              "defined": {
                "name": "village"
              }
            }
          },
          {
            "name": "status",
            "type": {
              "defined": {
                "name": "gameStatus"
              }
            }
          }
        ]
      }
    },
    {
      "name": "gameStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "inProgress"
          },
          {
            "name": "finished",
            "fields": [
              "u8"
            ]
          }
        ]
      }
    },
    {
      "name": "position",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "x",
            "type": "u32"
          },
          {
            "name": "y",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "resources",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "gold",
            "type": "u32"
          },
          {
            "name": "goldIncome",
            "type": "u32"
          },
          {
            "name": "technologies",
            "type": "u32"
          },
          {
            "name": "technologiesIncome",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "townHall",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "level",
            "type": "u8"
          },
          {
            "name": "health",
            "type": "u32"
          },
          {
            "name": "damage",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "village",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "townHall",
            "type": {
              "defined": {
                "name": "townHall"
              }
            }
          },
          {
            "name": "goldMines",
            "type": "bytes"
          },
          {
            "name": "barracks",
            "type": "bytes"
          },
          {
            "name": "laboratories",
            "type": "bytes"
          },
          {
            "name": "warriors",
            "type": {
              "vec": {
                "defined": {
                  "name": "warrior"
                }
              }
            }
          },
          {
            "name": "resources",
            "type": {
              "defined": {
                "name": "resources"
              }
            }
          }
        ]
      }
    },
    {
      "name": "warrior",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "level",
            "type": "u8"
          },
          {
            "name": "health",
            "type": "u32"
          },
          {
            "name": "damage",
            "type": "u32"
          },
          {
            "name": "position",
            "type": {
              "defined": {
                "name": "position"
              }
            }
          }
        ]
      }
    }
  ]
};
