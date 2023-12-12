import { scene } from "../../util/scene";
import { SceneList, SceneManager } from "../sceneManager";
import { P5CanvasInstance } from "@p5-wrapper/react";
import { ScreenManager } from "../screenManager";
import { Vector } from "../../util/util";
import { Ball } from "../obj/ball/ball";
import { Bar } from "../obj/bar/bar";

export class playScene extends scene {
  // ボール周り
  ball: Ball;
  // バー周り
  bar: Bar;
  scoreVelocity = 10;

  constructor(sceneManager: SceneManager) {
    super(sceneManager);
    this.ball = new Ball(sceneManager);
    this.bar = new Bar(sceneManager);
  }

  init(p5: P5CanvasInstance) {
    this.sceneManager.score = 0;
    // insert initialization code here
  }

  update(p5: P5CanvasInstance) {
    p5.background(32, 64, 128);
    console.log(this.sceneManager.width);
    this.bar.update(p5, this.sceneManager);
    this.ball.update(p5);
    if (
      this.ball.position.y > this.bar.position.y + this.bar.size.y / 2 &&
      this.ball.speed.y > 0 &&
      !this.ball.isDead
    ) {
      if (
        (this.ball.position.x - this.ball.size >= this.bar.position.x &&
          this.ball.position.x - this.ball.size <=
            this.bar.position.x + this.bar.size.x) ||
        (this.ball.position.x + this.ball.size >= this.bar.position.x &&
          this.ball.position.x + this.ball.size <=
            this.bar.position.x + this.bar.size.x)
      ) {
        this.ball.speed.x = Math.floor(
          this.sceneManager.width *
            (-this.ball.speedXLength +
              Math.random() * this.ball.speedXLength * 2)
        );
        this.ball.speed.y = -Math.floor(
          this.sceneManager.height *
            (Math.random() * (this.ball.bound.max - this.ball.bound.min) +
              this.ball.bound.min)
        );
      } else {
        this.ball.isDead = true;
      }
    }

    if (
      (this.ball.speed.x > 0 &&
        this.ball.position.x > this.sceneManager.rightDown.x) ||
      (this.ball.speed.x < 0 &&
        this.ball.position.x < this.sceneManager.leftUp.x)
    ) {
      this.ball.speed.x *= -1;
    }

    if (this.ball.position.y > this.sceneManager.rightDown.y) {
      this.sceneManager.sceneChange("Result");
    }
    this.sceneManager.score += (this.scoreVelocity * p5.deltaTime) / 1000;
    p5.textSize(this.sceneManager.height / 26);
    p5.textFont(this.sceneManager.font);
    p5.fill(255);
    p5.text(
      "Score : " + Math.floor(this.sceneManager.score),
      this.sceneManager.leftUp.x + this.sceneManager.width * 0.01,
      this.sceneManager.leftUp.y + 32 + this.sceneManager.height * 0.01
    );
  }

  destroy() {
    // insert destruction code here
  }
}
