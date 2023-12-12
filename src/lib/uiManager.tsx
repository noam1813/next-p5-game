import { P5CanvasInstance } from "@p5-wrapper/react";
import { Font } from "p5";
import { ScreenManager } from "./screenManager";
import { Vector } from "@/util/util";

export class UIManager {
  font: Font;
  constructor(p5:P5CanvasInstance, cdn:string) {
    this.font = p5.loadFont(cdn);
  }

  makeButton(
    p5: P5CanvasInstance,
    screen: ScreenManager,
    message: string,
    size: Vector,
    pos: Vector,
    callback: any
  ) {
    let button = p5.createButton(message);
    button.style("font-size", screen.height / 45 + "px");
    button.size(screen.width * size.x, screen.height * size.y);
    button.position(
      screen.width * pos.x - button.width / 2,
      screen.height * pos.y - button.height / 2
    );
    button.mouseClicked(callback);
    return button;
  }

  centerTextPosition(
    p5: P5CanvasInstance,
    message:string
  ):number {
    return p5.textWidth(message) / 2;
  }

}
