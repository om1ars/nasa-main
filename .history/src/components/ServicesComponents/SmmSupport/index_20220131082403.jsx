import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Div>
        <a
          href="#"
          className={`${visible ? "scrollToTop_block" : "scrollToTop_none"}`}
        ></a>
      </Div>
    </>
  );
};

const ServiceSmmHome = () => {
  return (
    <>
      <Section id="serviceSmm_home">
        <Navbar />
        <motion.div
          variants={homeAnimation}
          transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
          className="serviceSmm_home"
        >
          <div className="serviceSmm_content">
            <div className="serviceSmm_title">
              <h1>Digital Crafters</h1>
            </div>
            <div className="serviceSmm_subTitle">
              <p>
                The not errors rendering handed he you concepts fate objective
                rare boss a road a he while what before to he is size separated
                room cold hunt by and they my
              </p>
            </div>
            <img src={play} alt="Play Button" />
          </div>
        </motion.div>
        <motion.div
          className="serviceSmm_info"
          variants={homeInfoAnimation}
          transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
        >
          <div className="serviceSmm_grid">
            <div className="serviceSmm_col">
              <strong>Agency</strong>
              <p>Digital Crafters</p>
            </div>
            <div className="serviceSmm_col">
              <strong>Email</strong>
              <p>kishansheth21@gmail.com</p>
            </div>
            <div className="serviceSmm_col">
              <strong>Mobile</strong>
              <p>+91 1231231131</p>
            </div>
            <div className="serviceSmm_col">
              <strong>Address</strong>
              <p>Some Street India,</p>
              <p>960105 India</p>
            </div>
            <div className="serviceSmm_col">
              <strong>Services</strong>
              <p>Corporate Identity</p>
              <p>Full Coding</p>
            </div>
            <div className="serviceSmm_col">
              <strong>Working Hours</strong>
              <p>Monday to Friday</p>
              <p>08:00 to 18:00</p>
            </div>
          </div>
        </motion.div>
      </Section>
    </>
  );
};

export default function SmmSupport() {
  return (
    <div>
      <motion.div initial="hidden" animate="show">
        <ScrollToTop />
        <ServiceSmmHome />
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

const Div = styled.div`
  max-width: 100vw;
  .scrollToTop_none {
    opacity: 0;
    visibility: hidden;
  }
  a {
    position: fixed;
    bottom: 40px;
    right: 40px;
    background-color: var(--secondary-color);
    padding: 1rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s ease-in-out;
    z-index: 1;
    svg {
      color: white;
      font-size: 1.3rem;
    }
    @media screen and (min-width: 280px) and (max-width: 1080px) {
      left: 75vw;
      right: initial;
    }
  }
`;

const Section = styled.section`
  background-image: url(${home});
  background-size: cover;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  .home {
    height: 100%;
    .content {
      height: 100%;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.2rem;
      padding-left: 18rem;
      margin-top: 8rem;
      width: 60%;
      .title {
        h1 {
          font-size: 5rem;
          line-height: 5.3rem;
        }
      }
      .subTitle {
        p {
          width: 70%;
          margin-bottom: 2rem;
        }
      }
    }
  }
  .info {
    position: absolute;
    bottom: -6rem;
    right: 0;
    background-color: var(--secondary-color);
    padding: 4rem;
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
      color: white;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .home {
      .content {
        padding-left: 2rem;
        width: 100%;
        margin-bottom: 2rem;
        .title {
          h1 {
            font-size: 4rem;
            line-height: 4rem;
          }
        }
      }
    }
    .info {
      position: initial;
      .grid {
        grid-template-columns: 1fr;
      }
    }
  }
`;
