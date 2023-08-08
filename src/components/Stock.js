import React from "react";

function Stock({ name, price, ticker, onClick }) {

  return (
    <div onClick={onClick}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker + ": " + price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
