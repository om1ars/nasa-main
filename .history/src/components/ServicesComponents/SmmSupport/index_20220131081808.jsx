import { motion } from "framer-motion";
import React from "react";


const Scroll

export default function SmmSupport() {
  return (
    <div>
      <motion.div initial="hidden" animate="show">
        <ScrollToTop />
        <Home />
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
      </motion.div>
    </div>
  );
}
