import React from "react";
import {useParams} from 'react'
export default function SinglePortfolioPage() {
    const {category, title} = useParams
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
