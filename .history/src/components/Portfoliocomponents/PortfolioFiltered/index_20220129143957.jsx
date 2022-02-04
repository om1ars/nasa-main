import React, { useEffect, useState } from "react";
import portfolioMenu from "../../../utils/portfolio";
import "./styles.scss";
const allCategories = [
  "all",
  ...new Set(portfolioMenu.map((v, i) => v.category)),
];
const CategoryComponents = () => {
  return <></>;
};

const MEnuComponents = ({}) => {
  return <></>
};

export default function PortfolioFiltered() {
  
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItem(menu);

      return;
    }
    const newItem = menu.filter((v) => v.category === category);
    setMenuItem(newItem);
  };
 
  return (
    <div>
      <CategoryComponents />
      <MEnuComponents />
    </div>
  );
}
