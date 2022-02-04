import React from "react";

export default function AboutBuyAndSell() {
  return (
    <div>
      <Section>
        <div className="row">
          <div className="col" id="buySell1">
            <img src={BuySell1} alt="Buy Sell 1" />
            <div className="text">
              <h2>
                Buy and Sell Virtual <span>Lands</span> and
                <span> Properties</span>
              </h2>
            </div>
          </div>
          <div className="col" id="buySell2">
            <h2>
              Buy and Sell
              <span> Virtual Resources </span>
              and Businesses
            </h2>
            <img src={BuySell2} alt="Buy Sell 2" />
          </div>
          <div className="col" id="buySell3">
            <img src={BuySell3} alt="Buy Sell 3" />
            <h2>
              Earn <span>REKK</span>, a new kind of reality- backed
              cryptocurrency
            </h2>
          </div>
        </div>
      </Section>
    </div>
  );
}
