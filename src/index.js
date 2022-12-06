import { Game, Const } from "@vpmedia/phaser";
import { Spector } from "spectorjs";

class GameState {
  preload() {
    // console.log(this.game.renderer.type === Const.RENDER_WEBGL ? "WEBGL" : "CANVAS");
    this.game.load.pack("main", "./asset/phaser_resource.json", null, this);
  }

  create() {
    // json
    const jsonData = this.game.cache.getJSON("data.json");
    // image
    const bg = this.game.add.image(320, 240, "bg");
    bg.anchor.set(0.5, 0.5);
    const rainbow = this.game.add.image(320, 100, "rainbow");
    rainbow.anchor.set(0.5, 0.5);
    // text
    const textStyle = { fontFamily: "Arial", fontSize: 16, fill: "#FFFFFF" };
    this.game.add.text(20, 20, jsonData.title, textStyle);
    // sprite sheet
    const spriteSheet2 = this.game.add.image(bg.x, bg.y + 80, "spritesheet2", "babar-pym-wait");
    spriteSheet2.anchor.set(0.5, 0.5);
    // sprite sheet
    const spriteSheet = this.game.add.image(bg.x, bg.y, "spritesheet1");
    spriteSheet.anchor.set(0.5, 0.5);
    const anim = spriteSheet.animations.add("anim");
    anim.play(12, true);
    // sound
    const sound = this.game.sound.add("hitWall");
    // audio sprite
    const audioSprite = this.game.sound.addSprite("audiosprite1");
    // button
    const buttonHandler = () => {
      // tween
      this.game.tweens.create(rainbow).to({ y: Math.random() * 30 + 70 }, 500, "Expo.easeOut", true, 0);
      // play sound delayed with timer
      this.game.time.events.add(
        500,
        () => {
          sound.play();
        },
        this
      );
      // play random audio sprite
      const id = Math.round(Math.random() * 2) + 1;
      audioSprite.play(`impactLight${id}`);
    };
    const button = this.game.add.button(320, 400, "cat", buttonHandler, this);
    button.anchor.set(0.5, 0.5);
  }
}

const config = {
  width: 640,
  height: 480,
  renderType: Const.RENDER_AUTO,
  backgroundColor: "#333333",
  resolution: 1,
  maxParallelDownloads: 16,
  antialias: false,
  clearBeforeRender: false,
  roundPixels: true,
  disableVisibilityChange: true,
  isForceDisabledAudio: false,
  transparent: false,
};

const spector = new Spector();
spector.displayUI();

const game = new Game(config);
game.state.add("Game", GameState);
game.state.start("Game");
window.game = game;
