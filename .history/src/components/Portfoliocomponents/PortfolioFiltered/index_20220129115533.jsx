import React, { useEffect } from "react";
import "./styles.scss";
export default function PortfolioFiltered() {
  useEffect(() => {
    const portfolio = document.querySelector(".portfolio-gallery"),
      portfolioItems = portfolio.querySelectorAll(".portfolio-item"),
      portfolioCats = document.querySelectorAll(".portfolio-cats > li");
    let parentWidth = portfolio.offsetWidth,
      windowWidth = window.innerWidth;

    portfolioCats.forEach((cat) => {
      cat.addEventListener("pointerdown", function () {
        const dataFilter = this.dataset.filter;
        const el = [];

        if (dataFilter === "*") {
          positionItems(portfolioItems);
        } else {
          portfolioItems.forEach((item) => {
            if (item.dataset.filter == dataFilter) {
              el.push(item);
            } else {
              item.style.cssText = "transform: scale(0.1); opacity: 0;";
            }
          });
          positionItems(el);
        }
      });
    });
    function countRowsItems() {
      let rowItems = 0;
      if (windowWidth <= 768) {
        rowItems = 1;
      } else if (windowWidth <= 992) {
        rowItems = 2;
      } else {
        rowItems = 3;
      }
      return rowItems;
    }
    // Position each item in its place
    function positionItems(items) {
      let rowItems = countRowsItems();
      let y = 0;
      let x = 0;
      let itemCount = 0;
      items.forEach((item, i) => {
        item.style.cssText = `transform: translate3d(${
          x * (parentWidth / rowItems)
        }px, ${y * 220}px, 0); opacity: 1;`;
        x++;
        if (x % rowItems == 0) {
          y++;
          x = 0;
        }
        itemCount = i;
      });
      portfolio.style.height = `${Math.ceil(itemCount / rowItems) * 220}px`;
    }

    positionItems(portfolioItems);

    window.addEventListener("resize", () => {
      parentWidth = portfolio.offsetWidth;
      windowWidth = window.innerWidth;
      positionItems(portfolioItems);
    });
  });
  return (
    <div className='pr'>
      <section class="portfolio section">
        <ul class="portfolio-cats">
          <li data-filter="*">All</li>
          <li data-filter="phone">Phone</li>
          <li data-filter="laptop">Laptop</li>
          <li data-filter="headphone">Headphone</li>
        </ul>
        <div class="portfolio-gallery">
          <div class="portfolio-item" data-filter="phone">
            <div class="item-inner">
              <img
                src="https://unsplash.com/photos/xsGxhtAsfSA/download?force=true&w=640"
                alt=""
              />
            </div>
          </div>
          <div class="portfolio-item" data-filter="laptop">
            <div class="item-inner">
              <img
                src="https://unsplash.com/photos/yC-Yzbqy7PY/download?force=true&w=640"
                alt=""
              />
            </div>
          </div>
          <div class="portfolio-item" data-filter="headphone">
            <div class="item-inner">
              <img
                src="https://unsplash.com/photos/PDX_a_82obo/download?force=true&w=640"
                alt=""
              />
            </div>
          </div>
          <div class="portfolio-item" data-filter="phone">
            <div class="item-inner">
              <img
                src="https://unsplash.com/photos/D_kOW7iHNnw/download?force=true&w=640"
                alt=""
              />
            </div>
          </div>
          <div class="portfolio-item" data-filter="laptop">
            <div class="item-inner">
              <img
                src="https://unsplash.com/photos/eBRTYyjwpRY/download?force=true&w=640"
                alt=""
              />
            </div>
          </div>
          <div class="portfolio-item" data-filter="laptop">
            <div class="item-inner">
              <img
                src="https://unsplash.com/photos/1SAnrIxw5OY/download?force=true&w=640"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
