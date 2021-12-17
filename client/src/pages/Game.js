import Phaser from "phaser";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import MainScene from "../game/MainScene";

function Game() {
  /*     // Config for phaser demo
    const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        parent: 'game-content',
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 }
            }
        },
        scene: {
            preload: preload,
            create: create
        }
    }; */

  //-----Beginning to the game arrow function from https://github.com/blopa/top-down-react-phaser-game-template/blob/main/src/Game.jsx
  // Trying to get the useEffect working so the game does not render multiple times.

/*   const dispatch = useDispatch();
  const [game, setGame] = useState(null);

  useEffect(() => {
    if (game) {
      return;
    }

    const phaserGame = new Phaser.Game({
      type: Phaser.AUTO,
      width: 512,
      height: 512,
      backgroundColor: "#333333",
      parent: "game-content",
      physics: {
        default: "matter",
        matter: {
          debug: true,
          gravity: { y: 0 },
        },
      },
      scene: [MainScene],
    });

    setGame(phaserGame);
  }, [game]); */

      // Config for survival game 
    const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600, 
        backgroundColor: '#333333',
        parent: 'game-content',
        physics: {
            default: 'matter',
            matter: {
                debug: true,
                gravity: {y:0},
            }
        },
        scene: [MainScene],
        // plugins: {
        //     scene: [
        //         {
        //             plugin: PhaserMatterCollisionPlugin,
        //             key: 'matterCollision',
        //             mapping: 'matterCollision,'
        //         }
        //     ]
        // }
    };

    const game = new Phaser.Game(config);

  return (
    <div>
      <div id="game-content"></div>
    </div>
  );
}

// Game currently renders twice on page, look into using useEffect to make it render once.

export default Game;
