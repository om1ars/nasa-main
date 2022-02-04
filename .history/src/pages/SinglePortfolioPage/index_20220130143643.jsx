import React from "react";
import {useParams} from 'react-router-dom'
import portfolioMenu from '../../utils/'
export default function SinglePortfolioPage() {
    const {category, title} = useParams
  return (
    <div>
        {portfolioMenu}
    </div>
  );
}
