import React from 'react';
import { useScroll } from '../../../utils/useScroll';
import styled from "styled-components";
import milestone1 from "../../../assets/milestone1.png";
import milestone2 from "assets/milestone2.png";
import milestone3 from "assets/milestone3.png";
import milestoneBackround from "assets/milestone-background.png";
import { motion } from "framer-motion";
export default function SmmSupportMilestone() {
    const [element, controls] = useScroll();
    const milestone = [
      {
        image: milestone1,
        data: "Cleints Served",
        amount: "407",
      },
      {
        image: milestone2,
        data: "of raw data",
        amount: "10T",
      },
      {
        image: milestone3,
        data: "recommendation",
        amount: "235",
      },
    ];
  return <div></div>;
}
