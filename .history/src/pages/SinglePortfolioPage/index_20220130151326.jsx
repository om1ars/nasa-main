import React from "react";
import { useParams } from "react-router-dom";
export default function SinglePortfolioPage({ portfolioMenu }) {
  const { title, category } = useParams();

  return (
    <div>
      <h1>Hello</h1>
      {portfolioMenu
        .filter((v) => v.title == title && v.category == category)
        .map((v, i) => {
          console.log(v);
          return (
            <>
              <h1 style={{ color: "white" }}>{v.id}</h1>
            </>
          );
        })}
    </div>
  );
}
