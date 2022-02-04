
import React from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
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
  );
}
