import { Game, Const } from "@vpmedia/phaser";

class GameState {
  preload() {
    this.game.load.pack("main", "./asset/phaser_resource.json", null, this);
  }

  create() {
    const bg = this.game.add.image(320, 240, "bg");
    bg.anchor.set(0.5, 0.5);
    // text
    const textStyle = { fontFamily: "Arial", fontSize: 16, fill: "#FFFFFF" };
    this.game.add.text(20, 20, "Hello Phaser", textStyle);
    // sprite sheet
    const spriteSheet2 = this.game.add.image(bg.x, bg.y + 80, "spritesheet2", "babar-pym-wait");
    spriteSheet2.anchor.set(0.5, 0.5);
    // sprite sheet
    const spriteSheet = this.game.add.image(bg.x, bg.y, "spritesheet1");
    spriteSheet.anchor.set(0.5, 0.5);
    const anim = spriteSheet.animations.add("anim");
    anim.play(12, true);
    // button
    const cat = this.game.add.image(320, 400, "cat");
    cat.anchor.set(0.5, 0.5);
  }
}

const config = {
  width: 640,
  height: 480,
  renderer: Const.RENDER_AUTO,
  backgroundColor: "#333333",
  disableVisibilityChange: true,
};

const game = new Game(config);
game.state.add("Game", GameState);
game.state.start("Game");
window.game = game;
