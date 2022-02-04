import React from "react";
import "./styles.scss";
export default function Haveproject() {
  return (
    <div className="haveProject">
      <div className="haveProject_container">
        <span>Cooporation</span>
        <h1>Has project?</h1>
        <h1>Let's discuss</h1>
        <span>
          Наша команда всегда готова к новым приключениям, оставляйте заявку, и
          мы скоро свяжемся.
        </span>
        <div />
        <form>
            <div>
                <span>Name</span>
                <input type='text' placeholder="Your name" />
            </div>
            <div></div>
            <div></div>
        </form>
      </div>
    </div>
  );
}
