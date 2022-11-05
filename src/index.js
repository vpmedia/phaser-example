import { Game, Const } from "@vpmedia/phaser";

class GameState {
  create() {
    const text = this.game.add.text(320, 240, "Hello Phaser");
    text.anchor.set(0.5, 0.5);
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
