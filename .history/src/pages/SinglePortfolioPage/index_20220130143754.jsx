import React from "react";
import {useParams} from 'react-router-dom'
import portfolioMenu from '../../utils/portfolio'
export default function SinglePortfolioPage() {
    const {category, title} = useParams
  return (
    <div>
        {portfolioMenu.filter((v) => v.title && v.category).map((m, i) => (
            <>
            
            </>
        ))}
    </div>
  );
}
