import React, { useState } from 'react';
import './SportsCard.css'

const SportsCard = (props) => {
  const {field, handleShow, showDetails} = props
  const {strStadiumThumb, strTeam, strStadiumDescription } = field

  return (
  

  <div className="col cart-size">
    <div className="card">
        <img src={strStadiumThumb} className='card-img-top' alt="" />
      <div className="card-body">
        <h5 className="card-title">{strTeam}</h5>
        <p className="card-text">{strStadiumDescription.slice(0, 100)}</p>
        <button onClick={() => {
          handleShow()
          showDetails(field)

          } } className='btn btn-info btn-outline-primary text-white border-0' >Show Details</button>
      </div>
    </div>
  </div>
  );
};

export default SportsCard;