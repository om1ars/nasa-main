import React from "react";
import './styles.scss';

export default function Aboutus() {
  return (
    <div>
      <div className="container">
        <header>
          <nav className="nav">
            <ul className="nav__list">
              <li>
                <a className="nav__link" href="#!">
                  portfolio
                </a>
              </li>
              <li>
                <a className="nav__link nav__link--active" href="#!">
                  about us
                </a>
              </li>
            </ul>
            <span className="nav__copy">All rights reserved 2021</span>
          </nav>
          <h1 className="page-title">About Us</h1>
        </header>
        <main>
          <article className="content">
            <section className="content__descriptor">
              <h2 className="content__title">Info</h2>
            </section>
            <section className="content__text-box">
              <p className="content__text">
                We aim to be the investors we wished we had when we started out.
                Lightning-fast, always on your side and fundamentally helpful.
              </p>
              <p className="content__text">
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
