
import React from "react";
import { motion } from "framer-motion";
import SmmSupportScrollToTop from "./SmmSupportScrollToTop";

export default function App() {
  return (
    <motion.div initial="hidden" animate="show">
      <SmmSupportScrollToTop />
      {/* <Home />
      <Services />
      <Portfolio />
      <Milestones />
      <Blog />
      <Video />
      <Pricing />
      <Testimonials />
      <Skills />
      <Contact />
      <Footer />
    </motion.div> */}
  );
}
