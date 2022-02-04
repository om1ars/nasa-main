import React, { useEffect, useState } from "react";
import portfolioMenu from "../../../utils/portfolio";
import "./styles.scss";
const allCategories = ['all', ...new Set(portfolioMenu.map((v, i) => v.))]
const CategoryComponents = () => {
  return <></>;
};

const MEnuComponents = ({}) => {};

export default function PortfolioFiltered() {
  const [categories, setCategories] = useState(allCategories)
  return (
    <div>
      <CategoryComponents />
      <MEnuComponents />
    </div>
  );
}
