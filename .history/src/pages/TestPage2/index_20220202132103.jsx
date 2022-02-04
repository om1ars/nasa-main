import React, { useEffect } from "react";
import "./styles.scss";
export default function TestPage2() {
  useEffect(() => {
    /**
     * jquery.gallery.js
     * http://www.codrops.com
     *
     * Copyright 2011, Pedro Botelho / Codrops
     * Free to use under the MIT license.
     *
     * Date: Mon Jan 30 2012
     */

    (function ($, undefined) {
      /*
       * Gallery object.
       */
      $.Gallery = function (options, element) {
        this.$el = document.querySelector(element);
        this._init(options);
      };

      $.Gallery.defaults = {
        current: 0, // index of current item
        autoplay: true, // slideshow on / off
        interval: 2000, // time between transitions
      };

      $.Gallery.prototype = {
        _init: function (options) {
          this.options = $.extend(true, {}, $.Gallery.defaults, options);

          // support for 3d / 2d transforms and transitions
          this.support3d = Modernizr.csstransforms3d;
          this.support2d = Modernizr.csstransforms;
          this.supportTrans = Modernizr.csstransitions;

          this.$wrapper = this.$el.querySelector(".dg-wrapper");

          this.$items = this.$wrapper.children();
          this.itemsCount = this.$items.length;

          this.$nav = this.$el.querySelector("nav");
          this.$navPrev = this.$nav.querySelector(".dg-prev");
          this.$navNext = this.$nav.querySelector(".dg-next");

          // minimum of 3 items
          if (this.itemsCount < 3) {
            this.$nav.remove();
            return false;
          }

          this.current = this.options.current;

          this.isAnim = false;

          this.$items.css({
            opacity: 0,
            visibility: "hidden",
          });

          this._validate();

          this._layout();

          // load the events
          this._loadEvents();

          // slideshow
          if (this.options.autoplay) {
            this._startSlideshow();
          }
        },
        _validate: function () {
          if (
            this.options.current < 0 ||
            this.options.current > this.itemsCount - 1
          ) {
            this.current = 0;
          }
        },
        _layout: function () {
          // current, left and right items
          this._setItems();

          // current item is not changed
          // left and right one are rotated and translated
          var leftCSS, rightCSS, currentCSS;

          if (this.support3d && this.supportTrans) {
            leftCSS = {
              "-webkit-transform":
                "translateX(-350px) translateZ(-200px) rotateY(45deg)",
              "-moz-transform":
                "translateX(-350px) translateZ(-200px) rotateY(45deg)",
              "-o-transform":
                "translateX(-350px) translateZ(-200px) rotateY(45deg)",
              "-ms-transform":
                "translateX(-350px) translateZ(-200px) rotateY(45deg)",
              transform: "translateX(-350px) translateZ(-200px) rotateY(45deg)",
            };

            rightCSS = {
              "-webkit-transform":
                "translateX(350px) translateZ(-200px) rotateY(-45deg)",
              "-moz-transform":
                "translateX(350px) translateZ(-200px) rotateY(-45deg)",
              "-o-transform":
                "translateX(350px) translateZ(-200px) rotateY(-45deg)",
              "-ms-transform":
                "translateX(350px) translateZ(-200px) rotateY(-45deg)",
              transform: "translateX(350px) translateZ(-200px) rotateY(-45deg)",
            };

            leftCSS.opacity = 1;
            leftCSS.visibility = "visible";
            rightCSS.opacity = 1;
            rightCSS.visibility = "visible";
          } else if (this.support2d && this.supportTrans) {
            leftCSS = {
              "-webkit-transform": "translate(-350px) scale(0.8)",
              "-moz-transform": "translate(-350px) scale(0.8)",
              "-o-transform": "translate(-350px) scale(0.8)",
              "-ms-transform": "translate(-350px) scale(0.8)",
              transform: "translate(-350px) scale(0.8)",
            };

            rightCSS = {
              "-webkit-transform": "translate(350px) scale(0.8)",
              "-moz-transform": "translate(350px) scale(0.8)",
              "-o-transform": "translate(350px) scale(0.8)",
              "-ms-transform": "translate(350px) scale(0.8)",
              transform: "translate(350px) scale(0.8)",
            };

            currentCSS = {
              "z-index": 999,
            };

            leftCSS.opacity = 1;
            leftCSS.visibility = "visible";
            rightCSS.opacity = 1;
            rightCSS.visibility = "visible";
          }

          this.$leftItm.css(leftCSS || {});
          this.$rightItm.css(rightCSS || {});

          this.$currentItm
            .css(currentCSS || {})
            .css({
              opacity: 1,
              visibility: "visible",
            })
            .classList.add("dg-center");
        },
        _setItems: function () {
          this.$items.removeClass("dg-center");

          this.$currentItm = this.$items.eq(this.current);
          this.$leftItm =
            this.current === 0
              ? this.$items.eq(this.itemsCount - 1)
              : this.$items.eq(this.current - 1);
          this.$rightItm =
            this.current === this.itemsCount - 1
              ? this.$items.eq(0)
              : this.$items.eq(this.current + 1);

          if (!this.support3d && this.support2d && this.supportTrans) {
            this.$items.css("z-index", 1);
            this.$currentItm.css("z-index", 999);
          }

          // next & previous items
          if (this.itemsCount > 3) {
            // next item
            this.$nextItm =
              this.$rightItm.index() === this.itemsCount - 1
                ? this.$items.eq(0)
                : this.$rightItm.nextElementSibling;
            this.$nextItm.css(this._getCoordinates("outright"));

            // previous item
            this.$prevItm =
              this.$leftItm.index() === 0
                ? this.$items.eq(this.itemsCount - 1)
                : this.$leftItm.previousElementSibling;
            this.$prevItm.css(this._getCoordinates("outleft"));
          }
        },
        _loadEvents: function () {
          var _self = this;

          this.$navPrev.addEventListener("click.gallery", function (event) {
            if (_self.options.autoplay) {
              clearTimeout(_self.slideshow);
              _self.options.autoplay = false;
            }

            _self._navigate("prev");
            return false;
          });

          this.$navNext.addEventListener("click.gallery", function (event) {
            if (_self.options.autoplay) {
              clearTimeout(_self.slideshow);
              _self.options.autoplay = false;
            }

            _self._navigate("next");
            return false;
          });

          this.$wrapper.addEventListener(
            "webkitTransitionEnd.gallery transitionend.gallery OTransitionEnd.gallery",
            function (event) {
              _self.$currentItm.classList.add("dg-center");
              _self.$items.removeClass("dg-transition");
              _self.isAnim = false;
            }
          );
        },
        _getCoordinates: function (position) {
          if (this.support3d && this.supportTrans) {
            switch (position) {
              case "outleft":
                return {
                  "-webkit-transform":
                    "translateX(-450px) translateZ(-300px) rotateY(45deg)",
                  "-moz-transform":
                    "translateX(-450px) translateZ(-300px) rotateY(45deg)",
                  "-o-transform":
                    "translateX(-450px) translateZ(-300px) rotateY(45deg)",
                  "-ms-transform":
                    "translateX(-450px) translateZ(-300px) rotateY(45deg)",
                  transform:
                    "translateX(-450px) translateZ(-300px) rotateY(45deg)",
                  opacity: 0,
                  visibility: "hidden",
                };
                break;
              case "outright":
                return {
                  "-webkit-transform":
                    "translateX(450px) translateZ(-300px) rotateY(-45deg)",
                  "-moz-transform":
                    "translateX(450px) translateZ(-300px) rotateY(-45deg)",
                  "-o-transform":
                    "translateX(450px) translateZ(-300px) rotateY(-45deg)",
                  "-ms-transform":
                    "translateX(450px) translateZ(-300px) rotateY(-45deg)",
                  transform:
                    "translateX(450px) translateZ(-300px) rotateY(-45deg)",
                  opacity: 0,
                  visibility: "hidden",
                };
                break;
              case "left":
                return {
                  "-webkit-transform":
                    "translateX(-350px) translateZ(-200px) rotateY(45deg)",
                  "-moz-transform":
                    "translateX(-350px) translateZ(-200px) rotateY(45deg)",
                  "-o-transform":
                    "translateX(-350px) translateZ(-200px) rotateY(45deg)",
                  "-ms-transform":
                    "translateX(-350px) translateZ(-200px) rotateY(45deg)",
                  transform:
                    "translateX(-350px) translateZ(-200px) rotateY(45deg)",
                  opacity: 1,
                  visibility: "visible",
                };
                break;
              case "right":
                return {
                  "-webkit-transform":
                    "translateX(350px) translateZ(-200px) rotateY(-45deg)",
                  "-moz-transform":
                    "translateX(350px) translateZ(-200px) rotateY(-45deg)",
                  "-o-transform":
                    "translateX(350px) translateZ(-200px) rotateY(-45deg)",
                  "-ms-transform":
                    "translateX(350px) translateZ(-200px) rotateY(-45deg)",
                  transform:
                    "translateX(350px) translateZ(-200px) rotateY(-45deg)",
                  opacity: 1,
                  visibility: "visible",
                };
                break;
              case "center":
                return {
                  "-webkit-transform":
                    "translateX(0px) translateZ(0px) rotateY(0deg)",
                  "-moz-transform":
                    "translateX(0px) translateZ(0px) rotateY(0deg)",
                  "-o-transform":
                    "translateX(0px) translateZ(0px) rotateY(0deg)",
                  "-ms-transform":
                    "translateX(0px) translateZ(0px) rotateY(0deg)",
                  transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
                  opacity: 1,
                  visibility: "visible",
                };
                break;
            }
          } else if (this.support2d && this.supportTrans) {
            switch (position) {
              case "outleft":
                return {
                  "-webkit-transform": "translate(-450px) scale(0.7)",
                  "-moz-transform": "translate(-450px) scale(0.7)",
                  "-o-transform": "translate(-450px) scale(0.7)",
                  "-ms-transform": "translate(-450px) scale(0.7)",
                  transform: "translate(-450px) scale(0.7)",
                  opacity: 0,
                  visibility: "hidden",
                };
                break;
              case "outright":
                return {
                  "-webkit-transform": "translate(450px) scale(0.7)",
                  "-moz-transform": "translate(450px) scale(0.7)",
                  "-o-transform": "translate(450px) scale(0.7)",
                  "-ms-transform": "translate(450px) scale(0.7)",
                  transform: "translate(450px) scale(0.7)",
                  opacity: 0,
                  visibility: "hidden",
                };
                break;
              case "left":
                return {
                  "-webkit-transform": "translate(-350px) scale(0.8)",
                  "-moz-transform": "translate(-350px) scale(0.8)",
                  "-o-transform": "translate(-350px) scale(0.8)",
                  "-ms-transform": "translate(-350px) scale(0.8)",
                  transform: "translate(-350px) scale(0.8)",
                  opacity: 1,
                  visibility: "visible",
                };
                break;
              case "right":
                return {
                  "-webkit-transform": "translate(350px) scale(0.8)",
                  "-moz-transform": "translate(350px) scale(0.8)",
                  "-o-transform": "translate(350px) scale(0.8)",
                  "-ms-transform": "translate(350px) scale(0.8)",
                  transform: "translate(350px) scale(0.8)",
                  opacity: 1,
                  visibility: "visible",
                };
                break;
              case "center":
                return {
                  "-webkit-transform": "translate(0px) scale(1)",
                  "-moz-transform": "translate(0px) scale(1)",
                  "-o-transform": "translate(0px) scale(1)",
                  "-ms-transform": "translate(0px) scale(1)",
                  transform: "translate(0px) scale(1)",
                  opacity: 1,
                  visibility: "visible",
                };
                break;
            }
          } else {
            switch (position) {
              case "outleft":
              case "outright":
              case "left":
              case "right":
                return {
                  opacity: 0,
                  visibility: "hidden",
                };
                break;
              case "center":
                return {
                  opacity: 1,
                  visibility: "visible",
                };
                break;
            }
          }
        },
        _navigate: function (dir) {
          if (this.supportTrans && this.isAnim) return false;

          this.isAnim = true;

          switch (dir) {
            case "next":
              this.current = this.$rightItm.index();

              // current item moves left
              this.$currentItm.classList
                .add("dg-transition")
                .css(this._getCoordinates("left"));

              // right item moves to the center
              this.$rightItm.classList
                .add("dg-transition")
                .css(this._getCoordinates("center"));

              // next item moves to the right
              if (this.$nextItm) {
                // left item moves out
                this.$leftItm.classList
                  .add("dg-transition")
                  .css(this._getCoordinates("outleft"));

                this.$nextItm.classList
                  .add("dg-transition")
                  .css(this._getCoordinates("right"));
              } else {
                // left item moves right
                this.$leftItm.classList
                  .add("dg-transition")
                  .css(this._getCoordinates("right"));
              }
              break;

            case "prev":
              this.current = this.$leftItm.index();

              // current item moves right
              this.$currentItm.classList
                .add("dg-transition")
                .css(this._getCoordinates("right"));

              // left item moves to the center
              this.$leftItm.classList
                .add("dg-transition")
                .css(this._getCoordinates("center"));

              // prev item moves to the left
              if (this.$prevItm) {
                // right item moves out
                this.$rightItm.classList
                  .add("dg-transition")
                  .css(this._getCoordinates("outright"));

                this.$prevItm.classList
                  .add("dg-transition")
                  .css(this._getCoordinates("left"));
              } else {
                // right item moves left
                this.$rightItm.classList
                  .add("dg-transition")
                  .css(this._getCoordinates("left"));
              }
              break;
          }

          this._setItems();

          if (!this.supportTrans) this.$currentItm.classList.add("dg-center");
        },
        _startSlideshow: function () {
          var _self = this;

          this.slideshow = setTimeout(function () {
            _self._navigate("next");

            if (_self.options.autoplay) {
              _self._startSlideshow();
            }
          }, this.options.interval);
        },
        destroy: function () {
          this.$navPrev.removeEventListener(".gallery");
          this.$navNext.removeEventListener(".gallery");
          this.$wrapper.removeEventListener(".gallery");
        },
      };

      var logError = function (message) {
        if (this.console) {
          console.error(message);
        }
      };

      $.fn.gallery = function (options) {
        if (typeof options === "string") {
          var args = Array.prototype.slice.call(arguments, 1);

          this.each(function () {
            var instance = $.data(this, "gallery");

            if (!instance) {
              logError(
                "cannot call methods on gallery prior to initialization; " +
                  "attempted to call method '" +
                  options +
                  "'"
              );
              return;
            }

            if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
              logError("no such method '" + options + "' for gallery instance");
              return;
            }

            instance[options].apply(instance, args);
          });
        } else {
          this.each(function () {
            var instance = $.data(this, "gallery");
            if (!instance) {
              $.data(this, "gallery", new $.Gallery(options, this));
            }
          });
        }

        return this;
      };
    })(jQuery);

    document.querySelector(function () {
      document.querySelector("#dg-container").gallery();
    });
  });
  return (
    <div>
      <section id="dg-container" className="dg-container">
        <div className="dg-wrapper">
          <a href="#" className="dg-center">
            <img
              src="https://tympanus.net/Development/3DGallery/images/1.jpg"
              alt="image01"
            />
            <div>http://www.colazionedamichy.it/</div>
          </a>
          <a href="#">
            <img
              src="https://tympanus.net/Development/3DGallery/images/2.jpg"
              alt="image02"
            />
            <div>http://www.percivalclo.com/</div>
          </a>
          <a href="#">
            <img
              src="https://tympanus.net/Development/3DGallery/images/5.jpg"
              alt="image03"
            />
            <div>http://www.wanda.net/fr</div>
          </a>
          <a href="#">
            <img
              src="https://tympanus.net/Development/3DGallery/images/8.jpg"
              alt="image04"
            />
            <div>http://lifeingreenville.com/</div>
          </a>
          <a href="#">
            <img
              src="https://tympanus.net/Development/3DGallery/images/11.jpg"
              alt="image05"
            />
            <div>http://circlemeetups.com/</div>
          </a>
          <a href="#">
            <img
              src="https://tympanus.net/Development/3DGallery/images/3.jpg"
              alt="image06"
            />
            <div>http://www.castirondesign.com/</div>
          </a>
          <a href="#">
            <img
              src="https://tympanus.net/Development/3DGallery/images/7.jpg"
              alt="image07"
            />
            <div>http://www.foundrycollective.com/</div>
          </a>
          <a href="#">
            <img
              src="https://tympanus.net/Development/3DGallery/images/2.jpg"
              alt="image08"
            />
            <div>http://www.mathiassterner.com/home</div>
          </a>
          <a href="#">
            <img
              src="https://tympanus.net/Development/3DGallery/images/9.jpg"
              alt="image09"
            />
            <div>http://learnlakenona.com/</div>
          </a>
          <a href="#">
            <img
              src="https://tympanus.net/Development/3DGallery/images/5.jpg"
              alt="image10"
            />
            <div>http://www.neighborhood-studio.com/</div>
          </a>
          <a href="#">
            <img
              src="https://tympanus.net/Development/3DGallery/images/11.jpg"
              alt="image11"
            />
            <div>http://www.beckindesign.com/</div>
          </a>
          <a href="#">
            <img
              src="https://tympanus.net/Development/3DGallery/images/12.jpg"
              alt="image12"
            />
            <div>http://kicksend.com/</div>
          </a>
        </div>
        <nav>
          <span className="dg-prev" />
          <span className="dg-next" />
        </nav>
      </section>
    </div>
  );
}
