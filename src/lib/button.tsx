import { P5CanvasInstance } from "@p5-wrapper/react";
import { ScreenManager } from "./screenManager";
import { Vector } from "./../util/util";
import { Element } from "p5";

export class ButtonManager {
  buttons: Array<Element | undefined> = new Array<Element | undefined>();

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
    this.buttons.push(button);
  }

  findButton(name: string): boolean {
    return this.buttons.some((button) => button!.value.toString() === name);
  }

  deleteButtons() {
    this.buttons.forEach((button) => {
      button!.remove();
      button = undefined;
    });
  }
}
