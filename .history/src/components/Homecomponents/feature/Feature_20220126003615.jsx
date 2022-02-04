import React from "react";
import "./feature.css";

const Feature = ({sercice, titlemain, title, text, more }) => (
  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title">
      <div />
      <span>{service}</span>
      <h1>{title}</h1>
      <h1 className="feature_main_one">
        {titlemain}
        <span className="gpt3_see_more">{more}</span>
      </h1>
    </div>
    <div className="gpt3__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
