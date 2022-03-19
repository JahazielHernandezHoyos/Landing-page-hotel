import React from "react";

const Cards = ({ imgSrc, header, text }) => {
  return (
    
    
      <div className="col-sm-4 py-3">
      <div className="card-group">
        <div className="card bg-restaurante">
          <div className="card-body" style={{ width: "100%" }}>
            <img src={imgSrc} className="card-img-top" alt="restaurante" />
            <h3 className="card-title text-center p-3">{header}</h3>
            <p className="card-text">{text}</p>
            {/* centrar elemento con margen bootstrap */}
            <div className="text-center">
                <a href="#" className="text-center btn btn-outline-light">
                    Ver más información
                </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    
  );
};

export default Cards;
