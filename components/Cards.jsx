import React from "react"

const Cards = ({imgSrc, header, text}) => {

  return (
      <div className="">
      <div className="card bg-restaurante" style={{width: "18rem"}}>
          <img src={imgSrc} className="card-img-top" alt="restaurante" />
          <div>
              <h3>{header}</h3>
              <p>{text}</p>
          </div>
          <button className="btn btn-danger">Read me</button>
      </div>
      </div>
  )
}

export default Cards