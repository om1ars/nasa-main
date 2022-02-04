import React from "react";
import './styles.scss'
export default function SmmPage() {
  return (
    <div className="container">
      <div className="smmPagedflex">
        <div>
          <span>SMM </span>

        </div>
        <div className="smmtext">
            <h1>Выжимаем из SMM максимум.</h1>
            <p>SMM для нас — это качественный контент, регулярная аналитика и гарантированный результат.</p>
        </div>
        <div>
            <img src="https://picsum.photos/200" alt="" />
        </div>
      </div>
    </div>
  );
}
