import React from "react";
import { useParams } from "react-router-dom";
import CartForSinlgePortfolioPage from "../../components/Portfoliocomponents/CardForSinglePortfolioPage";
export default function SinglePortfolioPage({ portfolioMenu }) {
  const { id, category } = useParams();

  return (
    <div>
      {portfolioMenu
        .filter((v) => v.id == id && v.category == category)
        .map((v, i) => {
          const np = v + 1;

          console.log(np);
          return (
            <>
              <CartForSinlgePortfolioPage v={v} />
            </>
          );
        })}
    </div>
  );
}
