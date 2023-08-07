import React from "react";
import Stock from "./Stock";

function StockContainer({ stockArray }) {
  console.log(stockArray)

  return (
    <div>
      <h2>Stocks</h2>
      {stockArray.map((stock) => (
        <Stock key={stock.id} name={stock.name} price={stock.price} ticker={stock.ticker} />
      ))}
    </div>
  );
}

export default StockContainer;
