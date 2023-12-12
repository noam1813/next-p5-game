import { SceneManager } from "../../../lib/sceneManager";
import { P5CanvasInstance } from "@p5-wrapper/react";
import { Vector } from "../../../util/util";

export class Ball {
    color:string = "#FFFFFF";
    position:Vector = {x:0,y:0.8};
    size:number = 0.1;
    speed:Vector = {x:0,y:0};
    gravity:number = 8;
    isDead:boolean = false;
    speedXLength:number= 2.8;
    bound = {
        max:3,
        min:1.5
    }

    constructor(sceneManager:SceneManager) {
      this.position = {x:this.position.x * sceneManager.width,y:sceneManager.rightDown.y - this.position.y * sceneManager.height}
      this.size = this.size * sceneManager.width;
      this.gravity = this.gravity * sceneManager.height;

      this.speed.x = Math.floor(
        sceneManager.width * (-this.speedXLength + Math.random() * this.speedXLength * 2)
      );
    }

    update(p5:P5CanvasInstance){
        console.log(this.position);
        this.position.y += this.speed.y * (p5.deltaTime / 1000);
        this.position.x += this.speed.x * (p5.deltaTime / 1000);
        this.speed.y += this.gravity * (p5.deltaTime / 1000);
        p5.fill(this.color);
        p5.circle(this.position.x,this.position.y, this.size);
    }
  }
  