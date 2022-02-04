import React from "react";
import people from "../../../../assets/people.png";
import ai from "../../../../assets/ai.png";
import "./header.css";

const Header = () => (
  <div className="homepage_gpt3__header section__padding" id="home">
    <div className="homepage_gpt3__header-content">
      <h1 className="homepage_gradient__text">
        Let&apos;s Build Something amazing with NASA.io
      </h1>
      <p>
        Yet bed any for travelling assistance indulgence unpleasing. Not
        thoughts all exercise blessing. Indulgence way everything joy alteration
        boisterous the attachment. Party we years to order allow asked of.
      </p>

      <div className="homepage_gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Send</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>100 people requested access a visit recently</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
