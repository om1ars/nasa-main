import React from "react";
import { useParams } from "react-router-dom";
export default function SinglePortfolioPage({ portfolioMenu }) {
  const { id, category } = useParams();

  return (
    <div>
      <h1>Hello</h1>
      {portfolioMenu
        .filter((v) => v.id == id && v.category == category)
        .map((v, i) => {
          console.log(v);
          return (
            <>
            <Ca
            </>
          );
        })}
    </div>
  );
}
