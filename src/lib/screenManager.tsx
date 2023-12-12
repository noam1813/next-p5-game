import { Vector } from "@/util/util";

export class ScreenManager {
  width: number;
  height: number;
  leftUp: Vector;
  rightDown: Vector;
  constructor(aspectRatio: number, width: number, height: number) {
    if (width / height >= aspectRatio) {
      // 高さが幅に対して16/9以上なら、幅を100%に設定して高さを計算
      [this.width, this.height] = [height * aspectRatio, height];
    } else {
      // それ以外の場合、高さを100%に設定して幅を計算
      [this.width, this.height] = [width, width / aspectRatio];
    }
    this.leftUp = { x: (-1 * this.width) / 2, y: (-1 * this.height) / 2 };
    this.rightDown = { x: this.width / 2, y: this.height / 2 };
  }
}
