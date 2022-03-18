import React from "react"

const Cards = ({imgSrc,header, text}) => {
   
  return (
      <div>
          <img src={imgSrc} alt="" />
          <div>
              <h3>{header}</h3>
              <p>{text}</p>
          </div>
          <button className="btn btn-danger">Read me</button>
      </div>
  )
}

export default Cards