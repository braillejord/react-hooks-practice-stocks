import React from "react";
import Stock from "./Stock";

function StockContainer({ stockArray, sendToPortfolio }) {

  function handleBuyStock(name) {
    const stockToBuy = stockArray.find((stock) => {
      if (stock.name === name) {
        return true;
      }
    })
    sendToPortfolio(stockToBuy)
  }

  return (
    <div>
      <h2>Stocks</h2>
      {stockArray.map((stock) => (
        <Stock
          key={stock.id}
          name={stock.name}
          price={stock.price}
          ticker={stock.ticker}
          onClick={() => handleBuyStock(stock.name)}
        />
      ))}
    </div>
  );
}

export default StockContainer;
