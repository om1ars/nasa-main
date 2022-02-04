import React from "react";
import './styles.scss';

export default function Aboutus() {
  return (
    <div>
      <div className="aboutus_container">
        <header>
  
          <h1 className="aboutus_page-title">About Us</h1>
        </header>
        <main>
          <article className="aboutus_content">
            <section className="aboutus_content__descriptor">
              <h2 className="aboutus_content__title">Info</h2>
            </section>
            <section className="aboutus_content__text-box">
              <p className="aboutus_content__text">
                We aim to be the investors we wished we had when we started out.
                Lightning-fast, always on your side and fundamentally helpful.
              </p>
              <p className="aboutus_content__text">
                Our knowledge is your knowledge. Our network is your network.
                Your problems are our problems. We don't have all the answers,
                but we will help you find them.
              </p>
            </section>
          </article>
        </main>
      </div>
    </div>
  );
}
