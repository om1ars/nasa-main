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
         {
             OurTeamMemebers.map((v, i) => (
                 <>
                  {/* <div className="gallery__column"> */}
            <Link to="/" className="gallery__link">
              <figure className="gallery__thumb">
                <img
                  src="https://source.unsplash.com/_cvwXhGqG-o/300x300"
                  alt="Portrait by Jessica Felicio"
                  className="gallery__image"
                />
                <BsBoxArrowUpRight className="gallery__caption_arrow" />

                <figcaption className="gallery__caption">
                  Portrait by Jessica Felicio
                </figcaption>
              </figure>
            </Link>
            
                 </>
             ))
         }
        </div>
      </div>
    </div>
  );
}
