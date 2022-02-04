import React from "react";
import { useParams } from "react-router-dom";
export default function SinglePortfolioPage({ portfolioMenu }) {
  const { id } = useParams();

  console.log(id);
  return (
    <div>
      <h1>Hello</h1>
      {portfolioMenu
        .filter((v) => v.id === id)
        .map((v, i) =>)}
    </div>
  );
}
