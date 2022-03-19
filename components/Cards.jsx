import React from "react";

const Cards = ({ imgSrc, header, text }) => {
  return (
    
    
      <div className="col-sm-3">
      <div className="card-group">
        <div className="card bg-restaurante">
          <div className="card-body" style={{ width: "16rem" }}>
            <img src={imgSrc} className="card-img-top" alt="restaurante" />
            <h3 className="card-title">{header}</h3>
            <p className="card-text">{text}</p>
            <button className="btn btn-danger">Read me</button>
          </div>
        </div>
      </div>
      </div>
    
  );
};

export default Cards;
