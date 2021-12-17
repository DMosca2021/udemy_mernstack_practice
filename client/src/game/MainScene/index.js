import Phaser from "phaser";
import { Scene } from "phaser";

import spriteAtlas from "../assets/images/test_sprite2_atlas.json";
import testSprite from "../assets/images/test_sprite2.png";
// import spriteAtlas from "../assets/images/knight-sprite.json";
// import testSprite from "../assets/images/knight-sprite.png";

export default class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  preload() {
    console.log("preload");
    this.load.spritesheet('test_sprite2', testSprite, spriteAtlas)
    console.log(testSprite, spriteAtlas)
  }

  create() {
    console.log("create");
    this.player = new Phaser.Physics.Matter.Sprite(
      this.matter.world,
      400,
      300,
      "atlas",
      "knight_idle_1"
    );
    this.add.existing(this.player);
    this.inputKeys = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
    });
  }

  update() {
    console.log("update");
    const speed = 2.5;
    let playerVelocity = new Phaser.Math.Vector2();
    if (this.inputKeys.left.isDown) {
      playerVelocity.x = -1;
    } else if (this.inputKeys.right.isDown) {
      playerVelocity.x = 1;
    }
    if (this.inputKeys.up.isDown) {
      playerVelocity.y = -1;
    } else if (this.inputKeys.down.isDown) {
      playerVelocity.y = 1;
    }
    playerVelocity.normalize();
    playerVelocity.scale(speed);
    this.player.setVelocity(playerVelocity.x, playerVelocity.y);
  }
}
