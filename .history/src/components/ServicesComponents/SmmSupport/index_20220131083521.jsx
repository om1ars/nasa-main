import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import home from '../../../assets/home.png'
import { useScroll } from "../../../utils/useScroll";

function Services() {
    const [element, controls] = useScroll();
    const data = [
      {
        type: "Design",
        text: "Bearable only through love of hydrogen atoms bits of moving fluff culture shores of the on cosmic ocean blue sky.",
        image: 'service1',
      },
      {
        type: "Code",
        text: "Global death rich in heavy with pretty stories for which is on there's little good evidencesomething incredible sea.",
        image: 'service2',
      },
      {
        type: "Support",
        text: "Evidence something incrediblewaiting to be known not a sunbut a galaxyrise shores of thecosmic mountian peak.",
        image: 'service3',
      },
    ];
    return (
      <Section id="services" ref={element}>
        <Title value="services" />
        <div className="services">
          {data.map((service, index) => {
            return (
              <motion.div
                className="services__service"
                key={service.type}
                // variants={servicesAnimations}
                animate={controls}
                transition={{
                  delay: 0.03,
                  type: "tween",
                  duration: 0.8,
                }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="services__service__image">
                  <img src={service.image} alt="service" />
                </div>
                <div className="services__service__title">
                  <span>0{index + 1}</span>
                  <h2>{service.type}</h2>
                </div>
                <p className="services__service__description">{service.text}</p>
                <img src={play} alt="Play" />
              </motion.div>
            );
          })}
        </div>
      </Section>
    );
  }
  


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
        <motion.div
        //   variants={homeAnimation}
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
            {/* <img src={play} alt="Play Button" /> */}
          </div>
        </motion.div>
        <motion.div
          className="serviceSmm_info"
        //   variants={homeInfoAnimation}
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
  .serviceSmm_home {
    height: 100%;
    .serviceSmm_content {
      height: 100%;
      color: white;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.2rem;
      padding-left: 18rem;
      width: 60%;
      .serviceSmm_title {
        h1 {
          font-size: 5rem;
          line-height: 5.3rem;
        }
      }
      .serviceSmm_subTitle {
        p {
          width: 70%;
          margin-bottom: 2rem;
        }
      }
    }
  }
  .serviceSmm_info {
    position: absolute;
    bottom: -6rem;
    right: 0;
    background-color: var(--secondary-color);
    padding: 4rem;
    .serviceSmm_grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
      color: white;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .serviceSmm_home {
      .serviceSmm_content {
        padding-left: 2rem;
        width: 100%;
        margin-bottom: 2rem;
        .serviceSmm_title {
          h1 {
            font-size: 4rem;
            line-height: 4rem;
          }
        }
      }
    }
    .serviceSmm_info {
      position: initial;
      .serviceSmm_grid {
        grid-template-columns: 1fr;
      }
    }
  }
`;
