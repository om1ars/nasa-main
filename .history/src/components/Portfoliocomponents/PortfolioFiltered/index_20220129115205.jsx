import React from 'react';
import './styles.scss'
export default function PortfolioFiltered() {
  return <div>
      <section class="portfolio section">
        <ul class="portfolio-cats">
            <li data-filter="*">All</li>
            <li data-filter="phone">Phone</li>
            <li data-filter="laptop">Laptop</li>
            <li data-filter="headphone">Headphone</li>
        </ul>
        <div class="portfolio-gallery">
            <div class="portfolio-item" data-filter="phone">
                <div class="item-inner">
                    <img src="https://unsplash.com/photos/xsGxhtAsfSA/download?force=true&w=640" alt="" />
                </div>
            </div>
            <div class="portfolio-item" data-filter="laptop">
                <div class="item-inner">
                    <img src="https://unsplash.com/photos/yC-Yzbqy7PY/download?force=true&w=640" alt="" />
                </div>
            </div>
            <div class="portfolio-item" data-filter="headphone">
                <div class="item-inner">
                    <img src="https://unsplash.com/photos/PDX_a_82obo/download?force=true&w=640" alt="">
                </div>
            </div>
            <div class="portfolio-item" data-filter="phone">
                <div class="item-inner">
                    <img src="https://unsplash.com/photos/D_kOW7iHNnw/download?force=true&w=640" alt="">
                </div>
            </div>
            <div class="portfolio-item" data-filter="laptop">
                <div class="item-inner">
                    <img src="https://unsplash.com/photos/eBRTYyjwpRY/download?force=true&w=640" alt="">
                </div>
            </div>
            <div class="portfolio-item" data-filter="laptop">
                <div class="item-inner">
                    <img src="https://unsplash.com/photos/1SAnrIxw5OY/download?force=true&w=640" alt="">
                </div>
            </div>
        </div>
    </section>
  </div>;
}
