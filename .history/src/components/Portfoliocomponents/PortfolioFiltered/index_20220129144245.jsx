import React, { useEffect, useState } from "react";
import portfolioMenu from "../../../utils/portfolio";
import "./styles.scss";
const allCategories = [
  "all",
  ...new Set(portfolioMenu.map((v, i) => v.category)),
];
const MenuComponent = ({ items }) => {
  return (
    <>
      <div className="portfolio-gallery">
        {items.map((menuItem) => {
          const { id, title, img, desc, price } = menuItem;
          return (
            <div class="portfolio-item" data-filter="phone">
              <div class="item-inner">
                <img src={img} alt={title} />
                <h1>{price}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const CategoryComponent = ({ categoires, filterItems }) => {
  return (
    <>
      <div className="portfolio-cats">
        {categoires.map((category, index) => {
          return (
            <button
              type="button"
              className="portfolio-cats"
              key={index}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
};
export default function PortfolioFiltered() {
  const [menuItem, setMenuItem] = useState(portfolioMenu)
  const [categories, setCategories] = useState(allCategories);
  
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItem(portfolioMenu);

      return;
    }
    const newItem = portfolioMenu.filter((v) => v.category === category);
    setMenuItem(newItem);
  };
 
  return (
    <div>
   <CategoryComponent categoires={categories} filterItems={filterItems} />
      <MenuComponent items={menuItem} />
    </div>
  );
}
