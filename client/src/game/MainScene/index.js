import Phaser from "phaser";
import { Scene } from "phaser";

export default class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  preload() {
    /*     this.load.setBaseURL("http://labs.phaser.io");

    this.load.image("sky", "assets/skies/space3.png");
    this.load.image("logo", "assets/sprites/phaser3-logo.png");
    this.load.image("red", "assets/particles/red.png"); */

    console.log("preload");
  }

  create() {
    console.log("create");
    this.player = new Phaser.Physics.Matter.Sprite(this.matter.world);
    this.inputKeys = this.input.keyboard.addKeys({
        up: Phaser.Input.Keyboard.KeyCodes.W,
        down: Phaser.Input.Keyboard.KeyCodes.S,
        left: Phaser.Input.Keyboard.KeyCodes.A,
        right: Phaser.Input.Keyboard.KeyCodes.D,
    })
  }

  update() {
    console.log("update");
    const speed = 2.5;
    let playerVelocity = new Phaser.Math.Vector2();
    if(this.inputKeys.left.isDown) {
        playerVelocity.x = -1;
    } else if (this.inputKeys.right.isDown) {
        playerVelocity.x = 1;
    }
    if(this.inputKeys.up.isDown) {
        playerVelocity.y = -1;
    } else if (this.inputKeys.down.isDown) {
        playerVelocity.y = 1;
    }
    playerVelocity.normalize();
    playerVelocity.scale(speed);
    this.player.setVelocity(playerVelocity.x, playerVelocity.y);
  }
}
