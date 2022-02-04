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
  