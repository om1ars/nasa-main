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
  const [menuItem, setMenuItem] = useState(portfolioMenu)
  const [categories, setCategories] = useState(allCategories);
  return (
    <div>
      <CategoryComponents />
      <MEnuComponents />
    </div>
  );
}
