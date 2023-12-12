import { SceneManager } from "../lib/sceneManager"
import { ScreenManager } from "../lib/screenManager";
import { P5CanvasInstance } from "@p5-wrapper/react";
import { Font } from "p5";

export class scene {
    constructor(protected sceneManager: SceneManager) {
    }
  init(p5:P5CanvasInstance){}
  update(p5:P5CanvasInstance){}
  destroy(){}
}