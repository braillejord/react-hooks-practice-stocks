import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ purchasedStockArray }) {
  console.log(purchasedStockArray)

  function handleSellStock() {
    console.log("stock sold")
  }

  return (
    <div>
      <h2>My Portfolio</h2>
      {purchasedStockArray.map((stock) => (
        <Stock
          key={stock.id}
          name={stock.name}
          price={stock.price}
          ticker={stock.ticker}
          handleSellStock={handleSellStock}
        />
      ))}
    </div>
  );
}

export default PortfolioContainer;
