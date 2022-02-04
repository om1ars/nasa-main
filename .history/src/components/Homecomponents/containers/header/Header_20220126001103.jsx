import React from "react";
import people from "../../../../assets/people.png";
import "./header.css";

const Header = () => (
  <div className="gpt3__header " id="home">
    <div className="gpt3__header-content">
      <h1>Более 300 брендов в портфолио за 4 года работы</h1>
      <h1 className="gradient__text">
        Let&apos;s Build Something amazing with NASA.io
      </h1>
      <p>
        Yet bed any for travelling assistance indulgence unpleasing. Not
        thoughts all exercise blessing. Indulgence way everything joy alteration
        boisterous the attachment. Party we years to order allow asked of.
      </p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Send</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>100 people requested access a visit recently</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src="https://xspace.uz/wp-content/uploads/2020/05/IMG_8766.jpg" />
    </div>
  </div>
);

export default Header;
