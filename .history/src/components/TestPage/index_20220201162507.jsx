import React, { useEffect } from "react";
import "./styles.scss";
import gsap, { ScrollTrigger } from "gsap/all";
import LocomotiveScroll from "locomotive-scroll";
export default function TestPage() {
  useEffect(() => {
    const scroller = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    })
    
    gsap.registerPlugin(ScrollTrigger)
    
    
    scroller.on('scroll', ScrollTrigger.update)
    
    ScrollTrigger.scrollerProxy(
        '.container', {
            scrollTop(value) {
                return arguments.length ?
                scroller.scrollTo(value, 0, 0) :
                scroller.scroll.instance.scroll.y
            },
            getBoundingClientRect() {
                return {
                    left: 0, top: 0, 
                    width: window.innerWidth,
                    height: window.innerHeight
                }
            }
        }
    )
    
    
    ScrollTrigger.create({
        trigger: '.image-mask',
        scroller: '.container',
        start: 'top+=30% 50%',
        end: 'bottom-=40% 50%',
        animation: gsap.to('.image-mask', {backgroundSize: '120%'}),
        scrub: 2,
        // markers: true
    })
    
    
    ScrollTrigger.addEventListener('refresh', () => scroller.update())
    
    
    ScrollTrigger.refresh()
  });
  return (
    <div classNameName="testPage">
 <div>
        <meta charSet="utf-8" />
        <title>Locomotive Scroll | Detection of elements in viewport &amp; smooth scrolling with parallax effects.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <link rel="manifest" href="site.webmanifest" />
        <link rel="apple-touch-icon" sizes="152x152" href="dist/images/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="dist/images/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="dist/images/favicons/favicon-16x16.png" />
        <link rel="mask-icon" href="dist/images/favicons/safari-pinned-tab.svg" color="#000000" />
        <link rel="stylesheet" href="dist/styles/main.css" />
        <div className="o-scroll" id="js-scroll">
          <div data-scroll-section>
            <div className="o-container">
              <header className="c-header" id="header">
                <div className="c-header_heading" data-scroll data-scroll-speed={-8} data-scroll-position="top" data-scroll-target="#header">
                  <div className="o-layout">
                    <div className="o-layout_item u-1/2" data-scroll data-scroll-direction="horizontal" data-scroll-speed={-2} data-scroll-position="top" data-scroll-target="#header">
                      <span className="u-label c-header_heading_label">
                        <a href="/">
                          Locomotive.ca
                        </a>
                      </span>
                    </div>
                    <div className="o-layout_item u-1/2" data-scroll data-scroll-direction="horizontal" data-scroll-speed={2} data-scroll-position="top" data-scroll-target="#header">
                      <div className="u-text-right">
                        <p className="u-label c-header_heading_label">
                          v3 – Edition
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <h1 className="c-header_title o-h1" data-scroll>
                  <span className="c-header_title_line">
                    <span data-scroll data-scroll-speed={3} data-scroll-position="top">Locomotive</span>
                  </span>
                  <span className="c-header_title_line">
                    <span data-scroll data-scroll-speed={2} data-scroll-position="top">Scroll</span>
                  </span>
                  <span className="c-header_title_line -version u-white">
                    <span className="o-h1" data-scroll data-scroll-speed={3} data-scroll-position="top" data-scroll-delay="0.05">v</span><span className="o-h1" data-scroll data-scroll-speed={5} data-scroll-position="top" data-scroll-delay="0.05">3</span><span className="o-h1" data-scroll data-scroll-speed={2} data-scroll-position="top" data-scroll-delay="0.05">.</span><span className="o-h1" data-scroll data-scroll-speed={4} data-scroll-position="top" data-scroll-delay="0.05">0</span>
                  </span>
                </h1>
                <hr className="c-header_line" data-scroll data-scroll-offset={100} />
                <a className="c-header_logo" href="https://locomotive.ca" target="_blank">
                  <svg role="img"><use xlinkHref="dist/images/sprite.svg#logo" /></svg>
                </a>
              </header>
            </div>
          </div>
          <section data-scroll-section>
            <div className="o-container">
              <div className="c-summary" data-scroll data-scroll-offset={100}>
                <div className="o-layout -gutter">
                  <div className="o-layout_item u-2/5@from-medium">
                    <p className="c-summary_text">
                      A simple scroll library used by developers at Locomotive. Built as a layer on top of <em>ayamflow's</em> <a href="https://github.com/ayamflow/virtual-scroll" target="_blank">virtual-scroll</a>, it provides smooth scrolling with support for parallax effects, toggling classes, and triggering event listeners when elements are in the viewport.
                    </p>
                  </div>
                  <div className="o-layout_item u-3/5@from-medium">
                    <ul className="c-summary_list">
                      <li className="c-summary_list_item u-label" data-scroll>
                        <a href="#speed-control" data-scroll-to>
                          01. Speed Control
                          <span className="c-summary_list_icon u-icon">
                            ↓
                          </span>
                        </a>
                      </li>
                      <li className="c-summary_list_item u-label" data-scroll>
                        <a href="#scroll-direction" data-scroll-to>
                          02. Scroll direction
                          <span className="c-summary_list_icon u-icon">
                            ↓
                          </span>
                        </a>
                      </li>
                      <li className="c-summary_list_item u-label" data-scroll>
                        <a href="#lerp-effect" data-scroll-to>
                          03. Lerp effect
                          <span className="c-summary_list_icon u-icon">
                            ↓
                          </span>
                        </a>
                      </li>
                      <li className="c-summary_list_item u-label" data-scroll>
                        <a href="#fixed-elements" data-scroll-to>
                          04. Fixed Elements
                          <span className="c-summary_list_icon u-icon">
                            ↓
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="c-section" data-scroll-section>
            <div className="o-container" id="speed-control">
              <div className="o-layout -gutter">
                <div className="o-layout_item u-2/5@from-medium">
                  <div className="c-section_infos -padding" data-scroll data-scroll-speed={-2}>
                    <div className="c-section_infos_inner" data-scroll data-scroll-offset={200}>
                      <h3>
                        01. <br />
                        Speed control
                      </h3>
                      <div className="c-sections_infos_text u-text">
                        <p>
                          Each element can be animated at a different speed. You get to choo-choo-choose!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="o-layout_item u-3/5@from-medium">
                  <div className="c-speed-block" data-scroll data-scroll-speed={2}>
                    <div className="o-image_wrapper" data-scroll data-scroll-call="dynamicBackground" data-scroll-repeat>
                      <div className="o-image" data-scroll>
                        <img className="c-speed-block_image" src="dist/images/locomotive01.jpg" alt="Locomotive image from unsplash" />
                      </div>
                    </div>
                    <p className="c-speed-block_title" data-scroll>
                      Speed x2
                    </p>
                    <span className="c-speed-block_bubble" data-scroll data-scroll-speed={4} data-scroll-call="dynamicColor" data-scroll-repeat>
                      4x
                    </span>
                  </div>
                </div>
              </div>
              <div className="o-layout -gutter -bottom">
                <div className="o-layout_item u-2/5@from-medium">
                  <div className="c-speed-block" data-scroll data-scroll-speed={4}>
                    <div className="o-image_wrapper" data-scroll data-scroll-call="dynamicBackground" data-scroll-repeat>
                      <div className="o-image" data-scroll data-scroll-speed="-1.5">
                        <img className="c-speed-block_image" src="dist/images/locomotive02.jpg" alt="Locomotive image from unsplash" />
                      </div>
                    </div>
                    <p className="c-speed-block_title" data-scroll>
                      Speed x4
                    </p>
                    <span className="c-speed-block_bubble -right" data-scroll data-scroll-speed={1} data-scroll-call="dynamicColor" data-scroll-repeat>
                      1x
                    </span>
                    <span className="c-speed-block_bubble -left -bottom" data-scroll data-scroll-speed={3} data-scroll-call="dynamicColor" data-scroll-repeat>
                      3x
                    </span>
                  </div>
                </div>
                <div className="o-layout_item u-3/5@from-medium">
                  <div className="o-layout u-text-right">
                    <div className="o-layout_item u-1/2@from-medium">
                      <div className="c-speed-block -margin" data-scroll data-scroll-speed={6}>
                        <div className="o-image_wrapper" data-scroll data-scroll-call="dynamicBackground" data-scroll-repeat>
                          <div className="o-image" data-scroll data-scroll-speed={-2}>
                            <img className="c-speed-block_image" src="dist/images/locomotive03.jpg" alt="Locomotive image from unsplash" />
                          </div>
                        </div>
                        <p className="c-speed-block_title" data-scroll>
                          Speed x6
                        </p>
                        <span className="c-speed-block_bubble -left -top" data-scroll data-scroll-speed={2} data-scroll-call="dynamicColor" data-scroll-repeat>
                          2x
                        </span>
                        <span className="c-speed-block_bubble -right" data-scroll data-scroll-speed={6} data-scroll-call="dynamicColor" data-scroll-repeat>
                          6x
                        </span>
                        <span className="c-speed-block_bubble -left -bottom" data-scroll data-scroll-speed={9} data-scroll-call="dynamicColor" data-scroll-repeat>
                          9x
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="c-section" data-scroll-section>
            <div className="o-container" id="scroll-direction">
              <div className="c-direction-block_wrapper">
                <div className="c-section_infos -padding" data-scroll data-scroll-sticky data-scroll-target="#scroll-direction">
                  <div className="c-section_infos_inner" data-scroll>
                    <h3>
                      02. <br />
                      Scroll direction
                    </h3>
                    <div className="c-sections_infos_text u-text">
                      <p>
                        And if that wasn't enough, make 'em go backwards. Or upwards. Or downwards!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="c-direction-block" id="direction">
                  <div className="c-direction-block_item -one">
                    <span className="c-direction-block_item_inner" data-scroll data-scroll-direction="horizontal" data-scroll-speed={6} data-scroll-target="#direction">
                      I'm moving in this direction
                    </span>
                  </div>
                  <div className="c-direction-block_item -two">
                    <span className="c-direction-block_item_inner" data-scroll data-scroll-direction="horizontal" data-scroll-speed={-8} data-scroll-target="#direction">
                      And in this direction
                    </span>
                  </div>
                  <div className="c-direction-block_item -three">
                    <span className="c-direction-block_item_inner" data-scroll data-scroll-direction="horizontal" data-scroll-speed={9} data-scroll-target="#direction" data-scroll-delay="0.05">
                      Sooo customizable. Right?
                    </span>
                  </div>
                  <div className="c-direction-block_item -four">
                    <span className="c-direction-block_item_inner" data-scroll data-scroll-direction="horizontal" data-scroll-speed={15} data-scroll-target="#direction">
                      I can also go in this direction
                    </span>
                  </div>
                  <div className="c-direction-block_item -five">
                    <span className="c-direction-block_item_inner" data-scroll data-scroll-direction="horizontal" data-scroll-speed={-20} data-scroll-target="#direction" data-scroll-delay="0.05">
                      Ok, enough!!!!
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="c-section" data-scroll-section>
            <div className="o-container" id="lerp-effect">
              <div className="o-layout">
                <div className="o-layout_item u-2/5@from-medium">
                  <div className="c-section_infos" data-scroll>
                    <div className="c-section_infos_inner" data-scroll data-scroll-offset={200}>
                      <h3>
                        03. <br />
                        Lerp elements
                      </h3>
                      <div className="c-sections_infos_text u-text">
                        <p>
                          Stagger those smooth animations using delays to create a rushing or dragging effect.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="o-layout_item u-3/5@from-medium">
                  <div className="c-lerp-block">
                    <span className="c-lerp-block_index" data-scroll data-scroll-delay="0.2" data-scroll-speed={6} data-scroll-call="dynamicColor" data-scroll-repeat>
                      01
                    </span>
                    <span className="c-lerp-block_title" data-scroll data-scroll-delay="0.6" data-scroll-speed={6}>
                      <span>
                        I have a lerp
                      </span>
                    </span>
                  </div>
                  <div className="c-lerp-block">
                    <span className="c-lerp-block_index" data-scroll data-scroll-delay="0.06" data-scroll-speed={6} data-scroll-call="dynamicColor" data-scroll-repeat>
                      02
                    </span>
                    <span className="c-lerp-block_title" data-scroll data-scroll-delay="0.1" data-scroll-speed={6}>
                      <span>
                        Me too! <br />
                        And even more
                      </span>
                    </span>
                  </div>
                  <div className="c-lerp-block">
                    <span className="c-lerp-block_index" data-scroll data-scroll-delay="0.06" data-scroll-speed={6} data-scroll-call="dynamicColor" data-scroll-repeat>
                      03
                    </span>
                    <span className="c-lerp-block_title" data-scroll>
                      <span data-scroll data-scroll-delay="0.13" data-scroll-speed={6}>B</span>
                      <span data-scroll data-scroll-delay="0.12" data-scroll-speed={6}>y</span>
                      <span data-scroll data-scroll-delay="0.11" data-scroll-speed={6}> </span>
                      <span data-scroll data-scroll-delay="0.1" data-scroll-speed={6}>L</span>
                      <span data-scroll data-scroll-delay="0.09" data-scroll-speed={6}>e</span>
                      <span data-scroll data-scroll-delay="0.08" data-scroll-speed={6}>t</span>
                      <span data-scroll data-scroll-delay="0.07" data-scroll-speed={6}>t</span>
                      <span data-scroll data-scroll-delay="0.06" data-scroll-speed={6}>e</span>
                      <span data-scroll data-scroll-delay="0.05" data-scroll-speed={6}>r</span>
                    </span>
                  </div>
                  <div className="c-lerp-block">
                    <span className="c-lerp-block_index" data-scroll data-scroll-delay="0.03" data-scroll-speed={6} data-scroll-call="dynamicColor" data-scroll-repeat>
                      04
                    </span>
                    <span className="c-lerp-block_title" data-scroll data-scroll-delay="0.04" data-scroll-speed={6}>
                      <span>
                        Soooo smooooth
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="c-section -fixed" data-scroll-section data-persistent>
            <div className="o-container" id="fixed-elements">
              <div className="o-layout">
                <div className="o-layout_item u-2/5@from-medium">
                  <div className="c-section_infos -padding" data-scroll data-scroll-sticky data-scroll-target="#fixed-elements">
                    <div className="c-section_infos_inner" data-scroll data-scroll-offset={200}>
                      <h3>
                        04. <br />
                        Fixed elements
                      </h3>
                      <div className="c-sections_infos_text u-text">
                        <p>
                          Create slides that stick and untick to the viewport while scrolling through.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="o-layout_item u-3/5@from-medium">
                  <div className="c-fixed_wrapper" data-scroll data-scroll-call="dynamicBackground" data-scroll-repeat>
                    <div className="c-fixed_target" id="fixed-target" />
                    <div className="c-fixed" data-scroll data-scroll-sticky data-scroll-target="#fixed-target" style={{backgroundImage: 'url("dist/images/locomotive04.jpg")'}} />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="c-section" data-scroll-section>
            <div className="o-container">
              <div className="c-cta">
                <h1 className="o-title" data-scroll>
                  <span className="o-title_line">
                    <span>If you</span>
                  </span>
                  <span className="o-title_line">
                    <span>Enjoyed</span>
                  </span>
                  <span className="o-title_line u-white">
                    <span>Scrolling</span>
                  </span>
                </h1>
                <hr className="c-cta_line" data-scroll data-scroll-offset={100} />
                <div className="c-cta_content">
                  <div className="o-layout -gutter">
                    <div className="o-layout_item u-2/5@from-medium">
                      <p className="u-label">
                        Github
                      </p>
                    </div>
                    <div className="o-layout_item u-3/5@from-medium">
                      <div className="c-cta_section">
                        <div className="c-cta_content_text" data-scroll data-scroll-offset={100}>
                          <h3>Check out Locomotive Scroll v3</h3>
                          <p>
                            This library has evolved considerably over the years. The architecture and conventions shift according to our projects.
                          </p>
                          <p>
                            Visit the GitHub repository page for a complete introduction and list of available options. Search the GitHub issue tracker carefully to check if your issue/feature has already been reported/requested before opening a new issue or submitting a pull request.
                          </p>
                        </div>
                        <a className="c-cta_button o-button" href="https://github.com/locomotivemtl/locomotive-scroll" target="_blank" data-scroll data-scroll-offset={100}>
                          <span className="o-button_icon">
                            <svg role="img"><use xlinkHref="dist/images/sprite.svg#github" /></svg>
                          </span>
                          Check on Github
                          <span className="o-button_arrow u-icon">
                            →
                          </span>
                        </a>
                      </div>
                      <hr className="c-cta_line -margin" data-scroll data-scroll-offset={100} />
                      <div className="c-cta_section">
                        <div className="c-cta_content_text" data-scroll data-scroll-offset={100}>
                          <h4>Neue Montreal <br />Pangram Pangram® Foundry</h4>
                          <p>
                            You like the font used on this page? Well this is your lucky day. You can get it for free on <a className="o-link -underline" href="https://pangrampangram.com/" target="_blank">pangrampangram.com</a>! Thanks to our good friend Mathieu Desjardins ❤️
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section data-scroll-section>
            <div className="c-choochoo">
              <div className="c-choochoo_item u-text-center" data-scroll data-scroll-direction="horizontal" data-scroll-speed={10}>
                <span>
                  🚂
                </span>
              </div>
              <div className="c-choochoo_item u-text-center -reverse" data-scroll data-scroll-direction="horizontal" data-scroll-speed={-10}>
                <span>
                  🚂
                </span>
              </div>
            </div>
          </section>
          <section data-scroll-section>
            <div className="o-container">
              <div className="c-damn">
                <h1 className="o-title" data-scroll>
                  <span className="o-title_line">
                    <span>
                      Damn
                    </span>
                  </span>
                  <span className="o-title_line">
                    <span>
                      You really
                    </span>
                  </span>
                  <span className="o-title_line">
                    <span>
                      like to
                    </span>
                  </span>
                  <span className="o-title_line u-white">
                    <span>
                      scroll
                    </span>
                  </span>
                </h1>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
