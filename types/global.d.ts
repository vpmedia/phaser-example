import { Game } from "@vpmedia/phaser";

declare global {
  interface Window {
    game: Game;
  }
}

export {};
