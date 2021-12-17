import Phaser from "phaser";
// import { Scene } from "phaser";

import spriteAtlas from '../assets/images/test_sprite_atlas.json'
import testSprite from '../assets/images/test_sprite.png'
// import spriteAtlas2 from '../assets/images/test_sprite2_atlas.json'
// import testSprite2 from '../assets/images/test_sprite2.png'
// import knightAtlas from '../assets/images/knight-sprite.json'
// import knightSprite from '../assets/images/knight-sprite.png'
// import sobAtlas from '../assets/images/atlas.json'
// import sobSprite from '../assets/images/atlas.png'

export default class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  preload() {
    console.log("preload");
    this.load.atlas('test_sprite', testSprite, spriteAtlas)
    console.log(testSprite, spriteAtlas)
    // this.load.atlas('test_sprite2', testSprite2, spriteAtlas2)
    // console.log(testSprite2, spriteAtlas2)
    // this.load.atlas('knight-sprite', knightSprite, knightAtlas)
    // console.log(knightSprite, knightAtlas)
    // this.load.atlas('atlas', testSprite, spriteAtlas)
    // console.log(sobSprite, sobAtlas)
  }

  create() {
    console.log("create");
    this.player = new Phaser.Physics.Matter.Sprite(this.matter.world,10,50,'test_sprite');
    // this.player = new Phaser.Physics.Matter.Sprite(this.matter.world,10,50,'test_sprite2');
    // this.player = new Phaser.Physics.Matter.Sprite(this.matter.world,10,50,'knight-sprite');
    // this.player = new Phaser.Physics.Matter.Sprite(this.matter.world,10,50,'atlas');
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
