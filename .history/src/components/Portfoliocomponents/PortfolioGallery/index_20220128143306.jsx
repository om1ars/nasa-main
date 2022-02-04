import React, { useEffect } from "react";
import "./styles.scss";
export default function PortfolioGallery() {
  useEffect(() => {
    const imgContent = document.querySelectorAll(".img-content-hover");

    function showImgContent(e) {
      for (var i = 0; i < imgContent.length; i++) {
        let x = e.pageX;
        let y = e.pageY;
        imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    }

    document.addEventListener("mousemove", showImgContent);
  });
  return (
    <div>
    <nav>
      <div className="container">
        <div className="grid">
          <div className="column-xs-12 column-md-10">
            <p id="highlight">Katherine Kato</p>
          </div>
          <div className="column-xs-12 column-md-2">
            <ul>
              <li><a href="#" className="active">Work</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <section className="gallery">
      <div className="container">
        <div className="grid">
          <div className="column-xs-12 column-md-4">
            <figure className="img-container">
              <img src="https://source.unsplash.com/8b1cWDyvT7Y" />
              <figcaption className="img-content">
                <h2 className="title">Smart Watch</h2>
                <h3 className="category">Showcase</h3>
              </figcaption>
              <span className="img-content-hover">
                <h2 className="title">Smart Watch</h2>
                <h3 className="category">Showcase</h3>
              </span>
            </figure>
          </div>
          <div className="column-xs-12 column-md-4">
            <figure className="img-container">
              <img src="https://source.unsplash.com/5VXH4RG88gc" />
              <figcaption className="img-content">
                <h2 className="title">Camera Film</h2>
                <h3 className="category">Showcase</h3>
              </figcaption>
              <span className="img-content-hover">
                <h2 className="title">Camera Film</h2>
                <h3 className="category">Showcase</h3>
              </span>
            </figure>
          </div>
          <div className="column-xs-12 column-md-4">
            <figure className="img-container">
              <img src="https://source.unsplash.com/XtUd5SiX464" />
              <figcaption className="img-content">
                <h2 className="title">Coffee</h2>
                <h3 className="category">Showcase</h3>
              </figcaption>
              <span className="img-content-hover">
                <h2 className="title">Coffee</h2>
                <h3 className="category">Showcase</h3>
              </span>
            </figure>
          </div>
          <div className="column-xs-12 column-md-6">
            <figure className="img-container">
              <img src="https://source.unsplash.com/JYGnB9gTCls" />
              <figcaption className="img-content">
                <h2 className="title">Phone</h2>
                <h3 className="category">Showcase</h3>
              </figcaption>
              <span className="img-content-hover">
                <h2 className="title">Phone</h2>
                <h3 className="category">Showcase</h3>
              </span>
            </figure>
          </div>
          <div className="column-xs-12 column-md-6">
            <figure className="img-container">
              <img src="https://source.unsplash.com/-RBuQ2PK_L8" />
              <figcaption className="img-content">
                <h2 className="title">Keyboard</h2>
                <h3 className="category">Showcase</h3>
              </figcaption>
              <span className="img-content-hover">
                <h2 className="title">Keyboard</h2>
                <h3 className="category">Showcase</h3>
              </span>
            </figure>
          </div>
          <div className="column-xs-12">
            <figure className="img-container">
              <img src="https://source.unsplash.com/P44RIGl9V54" />
              <figcaption className="img-content">
                <h2 className="title">Wrist Watch</h2>
                <h3 className="category">Showcase</h3>
              </figcaption>
              <span className="img-content-hover">
                <h2 className="title">Wrist Watch</h2>
                <h3 className="category">Showcase</h3>
              </span>
            </figure>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div className="container">
        <div className="grid">
          <div className="column-xs-12">
            <ul className="social">
              <li><a href="https://twitter.com/kato_katherine" target="_blank" rel="noopener noreferrer"><span className="fab fa-twitter" /></a></li>
              <li><a href="https://codepen.io/kathykato" target="_blank" rel="noopener noreferrer"><span className="fab fa-codepen" /></a></li>
              <li><a href="https://github.com/kathykato" target="_blank" rel="noopener noreferrer"><span className="fab fa-github" /></a></li>
            </ul>
            <p className="copyright">© Copyright 2018 Katherine Kato</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
  );
}
