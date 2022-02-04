import gsap, { Linear, snap, TimelineMax, TweenLite } from "gsap/all";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import "./styles.scss";
// import
import { TweenMax } from "gsap/all";
import { Controller, Scene } from "scrollmagic";
export default function WebSupportPage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(".banner3d-1", { perspectiveOrigin: "center -100vh" });
    gsap.set(".banner3d-2", { perspectiveOrigin: "center -100vh" });
    gsap.set(".banner3d-3", { perspectiveOrigin: "center -100vh" });
    gsap.set(".banner3d-4", { perspectiveOrigin: "left -100vh" });

    gsap.to(".banner3d-1", {
      scrollTrigger: {
        trigger: ".banner3d-1",
        scrub: true,
        start: "top bottom",
        end: "bottom top",
      },
      perspectiveOrigin: "center 100vh",
      ease: "none",
    });

    gsap.to(".banner3d-2", {
      scrollTrigger: {
        trigger: ".banner3d-2",
        scrub: true,
        start: "top bottom",
        end: "bottom top",
      },
      perspectiveOrigin: "center 100vh",
      ease: "none",
    });

    gsap.to(".banner3d-3", {
      scrollTrigger: {
        trigger: ".banner3d-3",
        scrub: true,
        start: "top bottom",
        end: "bottom top",
      },
      perspectiveOrigin: "center 100vh",
      ease: "none",
    });

    gsap.to(".banner3d-4", {
      scrollTrigger: {
        trigger: ".banner3d-4",
        scrub: true,
        start: "top bottom",
        end: "bottom top",
      },
      perspectiveOrigin: "left 100vh",
      ease: "none",
    });
  });

  useEffect(() => {
    var svg = document.querySelector("#Layer_1"),
      plane = document.querySelector(".plane"),
      pathString = document.querySelector("#pathCubic").attr("d"),
      pathCubic = snap.path.toCubic(pathString),
      arrayPath = [],
      quantity = 900,
      duration = svg.height(),
      position = {
        x: pathCubic[0].x,
        y: [pathCubic[0].y],
      },
      dot,
      i;

    var controller = new Controller();

    // function to measure how to keep element vertically centered
    function calcOffset() {
      var center =
          document.querySelector(window).scrollTop +
          window.innerHeight / 2 -
          plane.height() / 2,
        offset = plane.position().top,
        distance = center - offset;
    }

    // grab svg and turn it into x & y coords
    function setUpPoint(segment) {
      for (var i = 0; i < segment.length; i += 2) {
        //create a new object for the point so it can be passed to the bezier plugin
        var point = {};
        point.x = segment[i];
        point.y = segment[i + 1];
        //add the point to the array
        arrayPath.push(point);
      } //loop end
    }

    //set starting position for plane
    TweenLite.set(plane, {
      x: 0,
      y: -180,
    });

    // loop through the curves collection
    for (var i = 0; i < pathCubic.length; i++) {
      var segment = pathCubic[i],
        point;
      // 1st element returned in the array is a letter, remove it
      segment.shift();
      //call the function to set up the points based on the segment returned
      point = setUpPoint(segment);
    }

    // add looping plane to timeline
    var planeTL1 = new TimelineMax().add(
      TweenMax.to(plane, duration, {
        bezier: {
          values: arrayPath,
          type: "cubic",
          autoRotate: true,
        },
        ease: Linear.easeNone,
        onUpdate: calcOffset,
      })
    );

    var dotTweenTwo = TweenMax.to(position, quantity, {
      bezier: {
        values: arrayPath,
        type: "cubic",
      },
      ease: Linear.easeOut,
    });

    for (var i = 0; i < quantity; i++) {
      dotTweenTwo.time(i);
      //create each dot, add id, .dot class, set position, add it to the container.
      dot = document
        .querySelector("<div />", {
          id: "dot" + i,
        })
        .classList.add("dot")
        .css({
          left: position.x + "px",
          top: position.y + "px",
        })
        .appendTo(".container");

      planeTL1.set(
        dot,
        {
          visibility: "visible",
        },
        i * (duration / quantity) + 0.001
      );
    }

    // build scene
    var scene = new Scene({
      triggerElement: ".container",
      duration: duration,
    })
      .setTween(planeTL1)
      .addTo(controller)
      // when scroll direction changes, plane direction changes
      .addEventListener("update", function (e) {
        var st = e.target.controller().info("scrollDirection");
        if (st === "FORWARD") {
          plane.attr(
            "src",
            "http://static.indigoimages.ca/2016/shop/114450_img01_blueAirplane_45deg.png"
          );
        } else if (st === "REVERSE") {
          plane.attr(
            "src",
            "http://static.indigoimages.ca/114450_img01_blueAirplane_45deg__REVERSED.png"
          );
        }
      });
  });
  return (
    <div className="webSupport">
      <div className="webSupport_first_content">
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
