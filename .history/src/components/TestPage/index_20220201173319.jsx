import React, { useEffect } from "react";
import "./styles.scss";
import gsap, { ScrollTrigger } from "gsap/all";
import LocomotiveScroll from "locomotive-scroll";
import * as THREE from "three";
export default function TestPage() {
  useEffect(() => {
  });
  return (
    <div className="testPage">
      <canvas class="experience"></canvas>
      <div class="scrollTarget"></div>
      <div class="vignette-radial"></div>
    </div>
  );
}
