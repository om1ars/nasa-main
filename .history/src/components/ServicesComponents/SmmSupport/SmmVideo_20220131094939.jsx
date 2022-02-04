import { motion } from "framer-motion";
import React from "react";

export default function SmmVideo() {
  return (
    <div>
      <Section>
        <div className="background">
          <img src={video1} alt="Design" className="design1" />
          <img src={video2} alt="Design" className="design2" />
        </div>
        <motion.div
          className="video"
          variants={videoAnimations}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
          whileInView={{ opacity: 1 }}
        >
          <iframe
            width="960"
            height="515"
            src="https://www.youtube.com/embed/B_RNoAScPMI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </Section>
    </div>
  );
}
