import React from "react";
import { useScroll } from "../../../utils/useScroll";
import placeholder from "assets/placeholder.png";
import play from "assets/play.png";
import { motion } from "framer-motion";

export default function SmmBlog() {
  const [element, controls] = useScroll();
  const blogsData = [
    {
      title: "Summer trip to mountains",
      type: "Adeventure",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores deleniti rem delectus optio harum omnis veniam adipisci ducimus deserunt repudiandae?",
    },
    {
      title: "Flowers purple from sky",
      type: "Personal",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam debitis consectetur ex tempora voluptatum deleniti, officiis dicta eos illo adipisci!",
    },
    {
      title: "Rock conert main stage",
      type: "Music",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea est repudiandae nesciunt mollitia ad molestias dignissimos praesentium fugit reiciendis quis?",
    },
  ];
  return (
    <div>
      <Section id="blog" ref={element}>
        <Title value="Blog" />
        <div className="decoration"></div>
        <div className="blogs">
          {blogsData.map(({ title, type, description }) => {
            return (
              <motion.div
                className="blog"
                key={title}
                variants={blogsAnimations}
                animate={controls}
                transition={{
                  delay: 0.03,
                  type: "tween",
                  duration: 0.8,
                }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="image">
                  <img src={placeholder} alt="Placeholder" />
                </div>
                <div className="title">
                  <h3>{title}</h3>
                </div>
                <span className="type">{type}</span>
                <div className="description">
                  <p>{description}</p>
                </div>
                <div className="more">
                  <img src={play} alt="play" />
                  <span>Read more</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
