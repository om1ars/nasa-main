import React from 'react';
import { useScroll } from '../../../utils/useScroll';
import styled from "styled-components";
import { motion } from "framer-motion";
import service1 from "../../../assets/service1.png";
import service2 from "../../../assets/service2.png";
import service3 from "../assets/service3.png";
import play from "assets/play.png";
export default function SmmServices() {
    const [element, controls] = useScroll();
    const data = [
      {
        type: "Design",
        text: "Bearable only through love of hydrogen atoms bits of moving fluff culture shores of the on cosmic ocean blue sky.",
        image: service1,
      },
      {
        type: "Code",
        text: "Global death rich in heavy with pretty stories for which is on there's little good evidencesomething incredible sea.",
        image: service2,
      },
      {
        type: "Support",
        text: "Evidence something incrediblewaiting to be known not a sunbut a galaxyrise shores of thecosmic mountian peak.",
        image: service3,
      },
    ];
  return <div></div>;
}
