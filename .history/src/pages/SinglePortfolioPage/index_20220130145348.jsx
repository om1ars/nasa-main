import React from "react";
import { useParams } from "react-router-dom";
export default function SinglePortfolioPage({portfolioMenu}) {
  const {  id } = useParams;

  console.log(title);
  return (
    <div>
      {portfolioMenu
        .filter((v) => v.id === id )
        .map((m, i) => (
          <>
            <h1>{m.category}</h1>
          </>
        ))}
    </div>
  );
}
