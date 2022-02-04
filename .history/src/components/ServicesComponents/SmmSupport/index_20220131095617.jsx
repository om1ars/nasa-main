import React from "react";
import { motion } from "framer-motion";
import SmmSupportScrollToTop from "./SmmSupportScrollToTop";
import SmmSupportHome from "./SmmSupportHome";
import SmmServices from "./SmmServices";
import SmmPortfolio from "./SmmPortfolio";
import SmmSupportMilestone from "./SmmSupportMilestone";
import SmmBlog from "./SmmBlog";
import SmmVideo from "./SmmVideo";

export default function App() {
  return (
    <motion.div
      style={{ minHeight: "100vh", width: "100%" }}
      initial="hidden"
      animate="show"
    >
      <SmmSupportScrollToTop />
      <SmmSupportHome />
      <SmmServices />
      <SmmPortfolio />
      <SmmSupportMilestone />
      <SmmBlog />
      <SmmVideo />
      <Pricing />
      {/* <Testimonials /> */}
      {/* <Skills /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </motion.div>
  );
}
