import React from "react";
import { useScroll } from "../../../utils/useScroll";
import styled from "styled-components";
import milestone1 from "../../../assets/milestone1.png";
import milestone2 from "../../../assets/milestone2.png";
import milestone3 from "../../../assets/milestone3.png";
import milestoneBackround from "../../../assets/milestone-background.png";
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
  return <div>
       <Section ref={element}>
      <div className="background">
        <img src={milestoneBackround} alt="Milestone Background" />
      </div>
      <div className="milestones">
        {milestone.map((ms) => {
          return (
            <motion.div
              className="milestone"
              key={ms.data}
              variants={milestoneAnimations}
              animate={controls}
              transition={{
                delay: 0.03,
                type: "tween",
                duration: 0.8,
              }}
            >
              <p>{ms.amount}</p>
              <span>{ms.data}</span>
              <img src={ms.image} alt="milestone image" />
            </motion.div>
          );
        })}
      </div>
    </Section>
  </div>;
}
