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
  
  const dispatch = useDispatch();
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
  }, [game]);

  /*     // Config for survival game 
    const config = {
        type: Phaser.AUTO,
        width: 512,
        height: 512, 
        backgroundColor: '#333333',
        parent: 'game-content',
        physics: {
            default: 'matter',
            matter: {
                debug: true,
                gravity: {y:0},
            }
        },
        scene: [],
        plugins: {
            scene: [
                {
                    plugin: PhaserMatterCollisionPlugin,
                    key: 'matterCollision',
                    mapping: 'matterCollision,'
                }
            ]
        }
    } */

  function preload() {
    this.load.setBaseURL("http://labs.phaser.io");

    this.load.image("sky", "assets/skies/space3.png");
    this.load.image("logo", "assets/sprites/phaser3-logo.png");
    this.load.image("red", "assets/particles/red.png");
  }

  function create() {
    this.add.image(400, 300, "sky");

    const particles = this.add.particles("red");

    const emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: "ADD",
    });

    const logo = this.physics.add.image(400, 100, "logo");

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);
  }

  return (
    <div>
      <div id="game-content"></div>
    </div>
  );
}

// Game currently renders twice on page, look into using useEffect to make it render once.

export default Game;
