import { P5CanvasInstance } from "@p5-wrapper/react";
import { scene as Scene } from "../util/scene";
import { titleScene as TitleScene } from "./scenes/title";
import { Vector } from "../util/util";
import { Font } from "p5";
import { playScene as PlayScene } from "./scenes/play";
import { resultScene as ResultScene } from "./scenes/result";

export const SceneList: { [key: string]: typeof Scene } = {
  Title: TitleScene,
  Play: PlayScene,
  Result: ResultScene,
};

export class SceneManager {
  p5: P5CanvasInstance;
  scene: Scene;
  font: Font;

  width: number;
  height: number;
  leftUp: Vector;
  rightDown: Vector;
  score = 0;

  constructor(
    p5: P5CanvasInstance,
    aspectRatio: number,
    width: number,
    height: number,
    font: string
  ) {
    this.p5 = p5;

    if (width / height >= aspectRatio) {
      // 高さが幅に対して16/9以上なら、幅を100%に設定して高さを計算
      [this.width, this.height] = [height * aspectRatio, height];
    } else {
      // それ以外の場合、高さを100%に設定して幅を計算
      [this.width, this.height] = [width, width / aspectRatio];
    }
    this.leftUp = { x: (-1 * this.width) / 2, y: (-1 * this.height) / 2 };
    this.rightDown = { x: this.width / 2, y: this.height / 2 };

    this.font = p5.loadFont(font);

    this.scene = new SceneList['Title'](this);
  }

  sceneChange(sceneName: string) {
    this.scene.destroy();
    this.scene = new SceneList[sceneName](this);
    this.scene.init(this.p5);
  }
}
