import React from "react";
import "./styles.scss";
export default function Aboutaccordion() {
  return (
    <div className="aboutAccordion">
      <div className="aboutAccordion__image_section">
        <img src="https://picsum.photos/200/300" />
      </div>
      <div className="aboutAccordion_accordion">
      <section>
    <div class="container">
      <div class="accordion">
        <div class="accordion-item" id="question1">
          <a class="accordion-link" href="#question1">
            <div class="flex">
              <h3>BRANDING</h3>
              <ul>
                <li>#Figma</li>
                <li>#Sketch</li>
                <li>#Adobe</li>
                <li>#Invision</li>
                <li>#Protopie</li>
              </ul>
            </div>
            <i class="icon ion-md-arrow-forward"></i>
            <i class="icon ion-md-arrow-down"></i>
          </a>
          <div class="answer">
            <p> We believe in the greater good, we strive to do something for people, we aim to make their lives easier and more enjoyable, we love businesses that keep this</p>
          </div>
          <hr>
      </div>
        <div class="accordion-item" id="question2">
          <a class="accordion-link" href="#question2">
            <div class="flex">
              <h3>UX/UI DESIGN</h3>
              <ul>
                <li>#Figma</li>
                <li>#Sketch</li>
                <li>#Adobe</li>
                <li>#Invision</li>
                <li>#Protopie</li>
              </ul>
            </div>
            <i class="icon ion-md-arrow-forward"></i>
            <i class="icon ion-md-arrow-down"></i>
          </a>
          <div class="answer">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
          </div>
          <hr>
      </div>
        <div class="accordion-item" id="question3">
          <a class="accordion-link" href="#question3">
            <div class="flex">
              <h3>FRONTEND DEVELOPMENT</h3>
              <ul>
                <li>#Figma</li>
                <li>#Sketch</li>
                <li>#Adobe</li>
                <li>#Invision</li>
                <li>#Protopie</li>
              </ul>
            </div>
            <i class="icon ion-md-arrow-forward"></i>
            <i class="icon ion-md-arrow-down"></i>
          </a>
          <div class="answer">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
          </div>
          <hr>
      </div>
        <div class="accordion-item" id="question4">
          <a class="accordion-link" href="#question4">
            <div>
              <h3>BACKEND DEVELOPMENT</h3>
              <ul>
                <li>#Figma</li>
                <li>#Sketch</li>
                <li>#Adobe</li>
                <li>#Invision</li>
                <li>#Protopie</li>
              </ul>
            </div>
            <i class="icon ion-md-arrow-forward"></i>
            <i class="icon ion-md-arrow-down"></i>
          </a>
          <div class="answer">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
          </div>
          <hr>
      </div>
     </div>
    </div>
  </section>
      </div>
    </div>
  );
}
