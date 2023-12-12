import { scene } from "../../util/scene";
import { SceneManager } from "../sceneManager";
import { P5CanvasInstance } from "@p5-wrapper/react";

export class resultScene extends scene {
  constructor(sceneManager: SceneManager) {
    super(sceneManager);
  }

  init(p5: P5CanvasInstance) {
    // insert initialization code here
  }

  update(p5: P5CanvasInstance) {
    p5.background(32, 64, 128);
    p5.textSize(this.sceneManager.height / 13);
    p5.textFont(this.sceneManager.font);
    p5.fill(255);
    p5.text(
      "GAME OVER",
      -p5.textWidth("GAME OVER") / 2,
      this.sceneManager.leftUp.y + this.sceneManager.height * 0.4 - 32
    );
    p5.textSize(this.sceneManager.height / 18);
    p5.text(
      Math.floor(this.sceneManager.score),
      -p5.textWidth(Math.floor(this.sceneManager.score).toString()) / 2,
      this.sceneManager.leftUp.y + this.sceneManager.height * 0.5 - 16
    );
    p5.mouseClicked = () => {
      this.sceneManager.sceneChange("Title");
    };
  }

  destroy() {
    // insert destruction code here
  }
}
