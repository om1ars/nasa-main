
import React from "react";
import { motion } from "framer-motion";
import SmmSupportScrollToTop from "./SmmSupportScrollToTop";
import SmmSupportHome from "./SmmSupportHome";

export default function App() {
  return (
    <motion.div initial="hidden" animate="show">
      <SmmSupportScrollToTop />
      <SmmSupportHome/>
      <SmmService />
      {/* <Portfolio /> */}
      {/* <Milestones /> */}
      {/* <Blog /> */}
      {/* <Video /> */}
      {/* <Pricing /> */}
      {/* <Testimonials /> */}
      {/* <Skills /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </motion.div>
  );
}
