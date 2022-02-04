import React from "react";import placeholder from "assets/placeholder.png";
import loadmore from "assets/loadmore.png";
import portfolio1 from "assets/portfolio1.png";
import portfolio2 from "assets/portfolio2.png";
import { motion } from "framer-motion";
import { useScroll } from "../../../utils/useScroll";

export default function SmmPortfolio() {
  const [element, controls] = useScroll();

  return (
    <div>
      <Section id="portfolio" ref={element}>
        <Title value="Portfolio" />
        <div className="background">
          <img src={portfolio1} alt="Design" className="design1" />
          <img src={portfolio2} alt="Design" className="design2" />
        </div>
        <div className="portfolio__title">
          <p>Our Work</p>
          <h2>Check our super awesome portfolio</h2>
        </div>
        <div className="grid">
          <motion.div
            className="child-one grid-box"
            variants={portfolioAnimation}
            animate={controls}
            transition={{
              delay: 0.03,
              type: "tween",
              duration: 0.8,
            }}
            whileInView={{ opacity: 1 }}
          >
            <img src={placeholder} alt="placeholder" />
          </motion.div>
          <motion.div
            className="child-two grid-box"
            variants={portfolioAnimation}
            animate={controls}
            transition={{
              delay: 0.03,
              type: "tween",
              duration: 0.8,
            }}
            viewport={{ once: true }}
          >
            <img src={placeholder} alt="placeholder" />
          </motion.div>
          <motion.div
            className="child-three grid-box"
            variants={portfolioAnimation}
            animate={controls}
            transition={{
              delay: 0.03,
              type: "tween",
              duration: 0.8,
            }}
            viewport={{ once: true }}
          >
            <img src={placeholder} alt="placeholder" />
          </motion.div>
          <motion.div
            className="child-four grid-box"
            variants={portfolioAnimation}
            animate={controls}
            transition={{
              delay: 0.03,
              type: "tween",
              duration: 0.8,
            }}
            viewport={{ once: true }}
          >
            <img src={placeholder} alt="placeholder" />
          </motion.div>
          <motion.div
            className="child-five grid-box"
            variants={portfolioAnimation}
            animate={controls}
            transition={{
              delay: 0.03,
              type: "tween",
              duration: 0.8,
            }}
            viewport={{ once: true }}
          >
            <img src={placeholder} alt="placeholder" />
          </motion.div>
          <motion.div
            className="child-six grid-box"
            variants={portfolioAnimation}
            animate={controls}
            transition={{
              delay: 0.03,
              type: "tween",
              duration: 0.8,
            }}
            viewport={{ once: true }}
          >
            <img src={placeholder} alt="placeholder" />
          </motion.div>
          <motion.div
            className="child-seven grid-box"
            variants={portfolioAnimation}
            animate={controls}
            transition={{
              delay: 0.03,
              type: "tween",
              duration: 0.8,
            }}
            viewport={{ once: true }}
          >
            <img src={placeholder} alt="placeholder" />
          </motion.div>
          <motion.div
            className="child-eight grid-box"
            variants={portfolioAnimation}
            animate={controls}
            transition={{
              delay: 0.03,
              type: "tween",
              duration: 0.8,
            }}
            viewport={{ once: true }}
          >
            <img src={placeholder} alt="placeholder" />
          </motion.div>
        </div>
        <div className="portfolio-more">
          <span>Load More</span>
          <img src={loadmore} alt="Load More" />
        </div>
      </Section>
    </div>
  );
}
