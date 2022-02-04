import { motion } from "framer-motion";
import React, { useState } from "react";


const ScrollToTop = () => {
    const [visible, setVisible] = useState(false)
    return (
        <>
        
        <Div>

            <a href="#" className={`${visible ? 'scrollToTop_block' : 'scrollToTop_none'}`}></a>
        </Div>
        </>
    )
}

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
