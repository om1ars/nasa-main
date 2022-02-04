import React from "react";

export default function AboutBlogs() {
  return (
    <div>
      <Section id="blogs">
        <div className="title">
          <h2>News & Feeds</h2>
          <h5>Where you can earn crypto</h5>
        </div>
        <div className="blogs">
          {images.map((img, index) => {
            return (
              <div className="blog" key={index}>
                <img src={img} alt="Blog Image" />
                <div className="data">
                  <h6>31 Jan, 2021</h6>
                  <h4>Rightmove Now Offering Click to Purchase Option</h4>
                  <p>
                    Rightmove is now offering an option that enables buyers of
                    selected commercial properties the option to submit offers
                    and digitally exchange contracts online.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
