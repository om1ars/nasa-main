import React from "react";
import Aboutus from "../../components/Aboutcomponents/Aboutus";
import AboutusImage from "../../components/Aboutcomponents/AboutusImage";
import OurServices from "../../components/Aboutcomponents/OurServices";
import SmmPage from "../../components/Aboutcomponents/SmmPage";
import Whyus from "../../components/Aboutcomponents/Whyus";
import './styles.scss'
export default function Aboutpage() {
  return <div>
    <AboutusImage />
    <Aboutus />
    <Whyus />
    <OurServices />
    <SmmPage />
    <Aboutlogo
  </div>;
}