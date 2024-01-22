import React from 'react'
import './Offer.css'
import expresso from '../../assets/expresso.png'

const Offer = () => {
  return (
    <>
    <h5>SPECIAL OFFERS</h5>
    <div className="offers-container">
        <div className="offer-title">
            <h2>Popular customer<br/>
                favorite</h2>
        </div>
    <div className="card-container">
        <div className="card">
            <img src={expresso} alt="" />
            <h4>Expresso</h4>
            <h5><span id='price'>Ksh</span>300</h5>
            
        </div>
        <div className="card">
            <img src={expresso} alt="" />
            <h4>Expresso</h4>
            <h5><span id='price'>Ksh</span>300</h5>
            
        </div>
        <div className="card">
            <img src={expresso} alt="" />
            <h4>Expresso</h4>
            <h5><span id='price'>Ksh</span>300</h5>
            
        </div>

    </div>

    </div>
    </>
    
    
  )
}

export default Offer