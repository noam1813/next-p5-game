import { scene } from "../../util/scene";
import { SceneList, SceneManager } from "../sceneManager";
import { P5CanvasInstance } from "@p5-wrapper/react";
import { ScreenManager } from "../screenManager";
import { Vector } from "../../util/util";


export class titleScene extends scene {

    constructor(sceneManager: SceneManager) {
        super(sceneManager);
    }

  init(p5:P5CanvasInstance) {
    // insert initialization code here
  }

  update(p5:P5CanvasInstance) {
    p5.background(32, 64, 128);
    p5.textSize(this.sceneManager.height / 13);
    p5.textFont(this.sceneManager.font);
    p5.fill(255);
    p5.text(
      "BALL",
      -this.sceneManager.p5.textWidth("BALL") / 2,
      this.sceneManager.leftUp.y + this.sceneManager.height * 0.3 - 16
    );
    p5.mouseClicked = () => {
        this.sceneManager.sceneChange("Play");
    };
  }

  destroy() {
    // insert destruction code here
  }
}