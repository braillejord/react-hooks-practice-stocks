import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

const baseUrl = "http://localhost:3001"
const stockUrl = baseUrl + '/stocks'

function MainContainer() {
  const [stockArray, setStockArray] = useState([])
  const [purchasedStockArray, setPurchasedStockArray] = useState([])
  const [selectedCategory, setSelectedCategory] = useState()

  useEffect(() => {
    fetch(stockUrl)
      .then(r => r.json())
      .then(data => setStockArray(data))
  }, [])

  function sendToPortfolio(stock) {
    setPurchasedStockArray([...purchasedStockArray, stock])
  }

  function sortByName() {
    const stocksByName = stockArray.sort((a, b) => a.ticker.localeCompare(b.ticker))
    setStockArray([...stocksByName])
  }

  function sortByPrice() {
    const stocksByPrice = stockArray.sort((a, b) => (a.price - b.price))
    setStockArray([...stocksByPrice])
  }

  return (
    <div>
      <SearchBar sortByName={sortByName} sortByPrice={sortByPrice} setSelectedCategory={setSelectedCategory} />
      <div className="row">
        <div className="col-8">
          <StockContainer stockArray={stockArray.filter((stock) => selectedCategory ? stock.type === selectedCategory : true)} sendToPortfolio={sendToPortfolio} />
        </div>
        <div className="col-4">
          <PortfolioContainer
            purchasedStockArray={purchasedStockArray}
            setPurchasedStockArray={setPurchasedStockArray} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
