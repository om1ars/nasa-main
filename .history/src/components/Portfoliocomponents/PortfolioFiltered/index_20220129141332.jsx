import React, { useEffect, useState } from "react";
import "./styles.scss";

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
