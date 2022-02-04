import React from "react";
import AboutBlogs from "../../components/Aboutcomponents/AboutBlogs";
import AboutBuyAndSell from "../../components/Aboutcomponents/AboutBuyAndSell";
import AboutDesign from "../../components/Aboutcomponents/AboutDesign";
import AboutusImage from "../../components/Aboutcomponents/AboutusImage";
import "./styles.scss";

export default function Aboutpage() {
  return (
    <>
      <AboutusImage />
      <AboutDesign />
      <AboutBuyAndSell />
      <AboutBlogs />
    </>
  );
}
