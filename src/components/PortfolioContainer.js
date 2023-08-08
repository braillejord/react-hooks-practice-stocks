import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ purchasedStockArray, setPurchasedStockArray }) {

  function handleSellStock(name) {
    const updatedPortfolio = purchasedStockArray.filter((stock) => {
      if (stock.name !== name) {
        return true;
      }
    })
    setPurchasedStockArray(updatedPortfolio)
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
          onClick={() => handleSellStock(stock.name)}
        />
      ))}
    </div>
  );
}

export default PortfolioContainer;
