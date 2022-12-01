import { Game, Const } from "@vpmedia/phaser";

class GameState {
  preload() {
    // console.log(game.renderer.type === Const.RENDER_WEBGL ? "WEBGL" : "CANVAS");
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
    // button
    const button = this.game.add.button(
      320,
      400,
      "cat",
      () => {
        sound.play();
      },
      this
    );
    button.anchor.set(0.5, 0.5);
  }
}

const config = {
  width: 640,
  height: 480,
  renderer: Const.RENDER_WEBGL,
  backgroundColor: "#333333",
  resolution: 1,
  antialias: false,
  clearBeforeRender: true,
  disableVisibilityChange: true,
  forceSingleUpdate: true,
  isForceDisabledAudio: false,
  isSkipWindowFocus: false,
  transparent: false,
};

const game = new Game(config);
game.state.add("Game", GameState);
game.state.start("Game");
window.game = game;
