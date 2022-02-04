import React, { useEffect } from "react";
import "./styles.scss";
import gsap, { ScrollTrigger } from "gsap/all";
import LocomotiveScroll from "locomotive-scroll";
export default function TestPage() {
  useEffect(() => {
    var blocks = document.getElementsByClassName("container__item");
    var container = document.getElementsByClassName("container");
    var hs = new HorizontalScroll.default({
      blocks: blocks,
      container: container,
      isAnimated: true,
      springEffect: 0.8,
    });
  });
  return (
    <div className="testPage">
      
<canvas class="experience"></canvas>
<div class="scrollTarget"></div>
<div class="vignette-radial"></div>
    </div>
  );
}
