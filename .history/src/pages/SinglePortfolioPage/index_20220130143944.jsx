import React from "react";
import { useParams } from "react-router-dom";
import portfolioMenu from "../../utils/portfolio";
export default function SinglePortfolioPage() {
  const {  title } = useParams;
  return (
    <div>
      {portfolioMenu
        .filter((v) => v.title === title && v.category === category)
        .map((m, i) => (
          <>
            <h1>{m.category}</h1>
          </>
        ))}
    </div>
  );
}
