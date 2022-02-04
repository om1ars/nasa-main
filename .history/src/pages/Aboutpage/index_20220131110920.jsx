import React from "react";
import Aboutlogos from "../../components/Aboutcomponents/Aboutlogos";
import Aboutus from "../../components/Aboutcomponents/Aboutus";
import AboutusImage from "../../components/Aboutcomponents/AboutusImage";
import Haveproject from "../../components/Aboutcomponents/HaveProject";
import Whyus from "../../components/Aboutcomponents/Whyus";
import PortfolioGallery from "../../components/Portfoliocomponents/PortfolioGallery";
import Portfolioheader from "../../components/Portfoliocomponents/Portfolioheader";
import RotateText from "../../components/RotateText";
import "./styles.scss";
export default function Aboutpage() {
  return (
    <div>
      <AboutusImage />
      <Aboutus />
      <Whyus />
      <Haveproject />
    </div>
  );
}
