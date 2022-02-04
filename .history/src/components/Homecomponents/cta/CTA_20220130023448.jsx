import React from "react";
import { useScroll } from "../../../utils/useScroll";
import "./cta.css";

const CTA = () => {
  const [element, controls] = useScroll()
  return (
    <>
      <div className="gpt3__cta" ref={element}>
        <div className="gpt3__cta-content">
          <p>Request Early Access to Get Started</p>
          <h3>Register Today & start exploring the endless possibilities.</h3>
        </div>
        <div className="gpt3__cta-btn">
          <motion.button type="button">Get Started</motion.button>
        </div>
      </div>
    </>
  );
};

export default CTA;
