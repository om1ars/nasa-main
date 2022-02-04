import React, { useEffect } from "react";
import "./styles.scss";
import gsap, { ScrollTrigger } from "gsap/all";
import HorizontalScroll from "./horizontalScroll";
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
      <div class="wrapper">
        <nav class="menu">
          <div class="menu__logo">
            <a href="index.html">kd</a>
          </div>
          <div class="menu__items">
            <div class="menu__items-link active">
              <a href="index.html">Projects</a>
            </div>
            <div class="menu__items-link">
              <a href="about.html">About</a>
            </div>
          </div>
        </nav>

        <div class="container">
          <div class="container__item container__item-header">
            <h1>
              Kurt Davenport, <br /> Graphic Design
            </h1>
          </div>

          <div class="container__item container__item-1">
            <h1 class="container__item-title">
              <a href="project.html">Asterisks</a>
            </h1>
          </div>
          <div class="container__item container__item-2">
            <h1 class="container__item-title">
              <a href="project.html">Unlocked</a>
            </h1>
          </div>
          <div class="container__item container__item-3">
            <h1 class="container__item-title">
              <a href="project.html">Offbeat</a>
            </h1>
          </div>
          <div class="container__item container__item-4">
            <h1 class="container__item-title">
              <a href="project.html">Brutal</a>
            </h1>
          </div>
          <div class="container__item container__item-5">
            <h1 class="container__item-title">
              <a href="project.html">Mouthwash</a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
