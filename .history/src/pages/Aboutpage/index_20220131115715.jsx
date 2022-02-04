import React from "react";
import AboutBlogs from "../../assets/AboutBlogs";
import AboutBuyAndSell from "../../components/Aboutcomponents/AboutBuyAndSell";
import AboutDesign from "../../components/Aboutcomponents/AboutDesign";
import "./styles.scss";

export default function Aboutpage() {
  return (
    <div>
      <AboutDesign />
      <AboutBuyAndSell />
      <AboutBlogs />
    </div>
  );
}
