import { P5CanvasInstance, type Sketch } from "@p5-wrapper/react";
// @ts-ignore
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import { useEffect } from "react";
import { ScreenManager } from "../lib/screenManager";
import { SceneManager } from "../lib/sceneManager";
import React from "react";

let sceneManager: SceneManager;

const sketch: Sketch = (p5) => {
  p5.setup = () => {
    sceneManager = new SceneManager(
      p5,
      9 / 16,
      window.innerWidth,
      window.innerHeight,
      "https://fonts.gstatic.com/ea/notosansjapanese/v6/NotoSansJP-Bold.otf"
    );

    p5.createCanvas(sceneManager.width, sceneManager.height, p5.WEBGL);
  };

  p5.draw = () => {
    sceneManager.scene.update(p5);
  };
};

export default function Page() {
  return <NextReactP5Wrapper sketch={sketch} />;
}
