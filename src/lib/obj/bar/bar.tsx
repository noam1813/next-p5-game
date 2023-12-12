import { ScreenManager } from "@/lib/screenManager";
import { Vector } from "@/util/util";
import { P5CanvasInstance } from "@p5-wrapper/react";

export class Bar {
  color: string = "#FF0000";
  position: Vector = { x: 0, y: 0 };
  size: Vector = { x: 0, y: 0 };

  constructor(screenManager: ScreenManager) {
    this.size.x = screenManager.width * 0.25;
    this.size.y = this.size.x / 3;
    this.position = {
      x: 0 - this.size.x / 2,
      y: screenManager.rightDown.y * 0.7,
    };
  }

  update(p5: P5CanvasInstance, screenManager: ScreenManager) {
    this.position.x = p5.mouseX - screenManager.width / 2;
    p5.fill(this.color);
    p5.rect(this.position.x, this.position.y, this.size.x, this.size.y);
  }
}
