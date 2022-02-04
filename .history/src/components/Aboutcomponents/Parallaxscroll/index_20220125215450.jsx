import React from "react";

export default function Parallaxscroll() {
  return (
    <div classNameName="parallax_scroll">
      <div className="wrapper">
        <div className="header grid-container full">
          <div
            className="hero-banner bg-img grid-x"
            style="background-image: url('https://cdn.pixabay.com/photo/2016/08/10/02/10/world-1582347_960_720.jpg');"
          >
            <div className="grid-container">
              <div className="grid-x grid-margin-x">
                <div className="cell text-center">
                  <h1>3 golden rules</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="grid-container full">
            <div
              className="banner-wrapper bg-img"
              style="background-image:url('https://cdn.pixabay.com/photo/2019/05/31/16/16/australia-4242493_960_720.jpg');"
            >
              <div className="grid-container">
                <div className="grid-x grid-margin-x grid-margin-y">
                  <div className="cell">
                    <div className="box text-center v-align">
                      <div className="headline">
                        <h2>Dream big</h2>
                      </div>
                      <div className="text">
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita kasd gubergren, no sea
                          takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                          ipsum dolor sit amet, consetetur sadipscing elitr, sed
                          diam nonumy eirmod tempor invidunt ut labore et dolore
                          magna aliquyam erat, sed diam voluptua. At vero eos et
                          accusam et justo duo dolores et ea rebum.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid-container full">
            <div
              className="banner-wrapper bg-img"
              style={{
                backgroundImage:
                  'url("https://cdn.pixabay.com/photo/2015/03/26/18/36/spacex-693229_960_720.jpg")',
              }}
            >
              <div className="grid-container">
                <div className="grid-x grid-margin-x grid-margin-y">
                  <div className="cell medium-6">
                    <div className="box">
                      <div className="headline">
                        <h2>Work towards your goal</h2>
                      </div>
                      <div className="text">
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita kasd gubergren, no sea
                          takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                          ipsum dolor sit amet, consetetur sadipscing elitr, sed
                          diam nonumy eirmod tempor invidunt ut labore et dolore
                          magna aliquyam erat, sed diam voluptua. At vero eos et
                          accusam et justo duo dolores et ea rebum.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid-container full">
            <div
              className="banner-wrapper bg-img"
              style="background-image:url('https://cdn.pixabay.com/photo/2019/09/06/10/36/astronaut-4456106_960_720.jpg');"
            >
              <div className="grid-container">
                <div className="grid-x grid-margin-x grid-margin-y">
                  <div className="cell medium-6 medium-offset-6">
                    <div className="box">
                      <div className="headline">
                        <h2>Enjoy the success</h2>
                      </div>
                      <div className="text">
                        <p>
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita kasd gubergren, no sea
                          takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                          ipsum dolor sit amet, consetetur sadipscing elitr, sed
                          diam nonumy eirmod tempor invidunt ut labore et dolore
                          magna aliquyam erat, sed diam voluptua. At vero eos et
                          accusam et justo duo dolores et ea rebum.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer grid-container full">
          <div className="grid-x text-center">
            <p className="cell">
              <span className="copyright_date"></span> &copy; copyright{" "}
              <a href="https://codepen.io/havutcuoglu">havutcuoglu</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
