import React from "react";
import "./styles.scss";
export default function WebSupportPage() {
  useEffect
  return (
    <div>
      <div>
        <section className="full">scroll down</section>
        <section className="banner">
          <div className="banner3d-1">
            <div className="banner3d-1-front">
              just a 3d banner
              <br />
              made with gsap
              <br />
              and scrolltrigger
            </div>
          </div>
        </section>
        <section className="mini" />
        <section className="banner">
          <div className="banner3d-2">
            <div className="banner3d-2-front">
              oh that's cool
              <br />i didn't expect that...
            </div>
          </div>
        </section>
        <section className="half">scroll more</section>
        <section className="banner">
          <div className="banner3d-3">
            <div className="banner3d-3-front">
              it's all
              <br />
              about
              <br />
              perspective
            </div>
          </div>
          <div className="image" />
        </section>
        <section className="half">it's not over yet</section>
        <section className="banner">
          <div className="image2" />
          <div className="banner3d-4">
            <div className="banner3d-4-front">
              well
              <br />
              that was cool
              <br />
              but
              <br />
              it's time
              <br />
              to end
              <br />
              the show...
            </div>
          </div>
        </section>
        <section className="full">bisous</section>
      </div>
    </div>
  );
}
