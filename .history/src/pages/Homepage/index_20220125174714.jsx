import React from "react";
import { Brand, CTA, Navbar } from "../../components/Homecomponents";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from '../../components/Homecomponents/containers';

const Homepage = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default Homepage;
