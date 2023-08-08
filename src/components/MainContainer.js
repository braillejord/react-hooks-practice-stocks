import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

const baseUrl = "http://localhost:3001"
const stockUrl = baseUrl + '/stocks'

function MainContainer() {
  const [stockArray, setStockArray] = useState([])
  const [purchasedStockArray, setPurchasedStockArray] = useState([])

  useEffect(() => {
    fetch(stockUrl)
      .then(r => r.json())
      .then(data => setStockArray(data))
  }, [])

  function sendToPortfolio(stock) {
    setPurchasedStockArray([...purchasedStockArray, stock])
  }

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stockArray={stockArray} sendToPortfolio={sendToPortfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer purchasedStockArray={purchasedStockArray} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
