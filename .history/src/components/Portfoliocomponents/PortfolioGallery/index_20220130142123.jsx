import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { OurTeamMemebers } from "../../../utils/memebers";
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
    <div className="ourteam container">
      <div>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400&display=swap"
          rel="stylesheet"
        />
        <div className="gallery">
          <div className="gallery__column">
            {OurTeamMemebers.map((v, i) => {
              return (
                <>
                  <Link to="/">
                    <figure className="gallery__thumb">
                      <img
                        src="https://source.unsplash.com/VLPLo-GtrIE/300x300"
                        alt="Portrait by Alex Perez"
                        className="gallery__image"
                      />
                      <BsBoxArrowUpRight className="gallery__caption_arrow" />

                      <figcaption className="gallery__caption">
                        Portrait by Alex Perez
                      </figcaption>
                    </figure>
                  </Link>
                </>
              );
            })}
          </div>
          <div className="gallery__column">
            {OurTeamMemebers.map((v, i) => {
              return (
                <>
                  <Link to="/">
                    <figure className="gallery__thumb">
                      <img
                        src="https://source.unsplash.com/VLPLo-GtrIE/300x300"
                        alt="Portrait by Alex Perez"
                        className="gallery__image"
                      />
                      <BsBoxArrowUpRight className="gallery__caption_arrow" />

                      <figcaption className="gallery__caption">
                        Portrait by Alex Perez
                      </figcaption>
                    </figure>
                  </Link>
                </>
              );
            })}
          </div>
          <div className="gallery__column">
            {OurTeamMemebers.map((v, i) => {
              return (
                <>
                  <Link to="/">
                    <figure className="gallery__thumb">
                      <img
                        src="https://source.unsplash.com/VLPLo-GtrIE/300x300"
                        alt="Portrait by Alex Perez"
                        className="gallery__image"
                      />
                      <BsBoxArrowUpRight className="gallery__caption_arrow" />

                      <figcaption className="gallery__caption">
                        Portrait by Alex Perez
                      </figcaption>
                    </figure>
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
