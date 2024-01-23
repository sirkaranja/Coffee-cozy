import React from 'react';
import './Services.css';
import catering from '../../assets/icons/salad.png'
import cart from '../../assets/icons/cart.png'
import time from '../../assets/icons/time.png'
import gift from '../../assets/icons/gift.png'

const Services = () => {
  return (
    <>
    <div>Our Story & Services</div>
    <div className="main-service">
          <div className="service-text">
            <h2>Our Culinary Journey<br/> And Services</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br/>
                elit. Mauris vitae turpis quis arcu blandit dictum <br/>
                vitae non ipsum. Donec odio ipsum, rhoncus sit amet <br/>
                odio eget, congue auctor erat. Integer eu </p>
                <button>Explore</button>

          </div>
          <div className="card-container">
          <div className="card-gif">
                <img src={catering} alt="" srcset="" />
                <h5>Catering</h5>
                <p>Delight your guests<br/> with our flavors and<br/>presentation</p>
            </div>
            <div className="card-gif">
                <img src={time} alt="" srcset="" />
                <h5>Fast delivery</h5>
                <p>We deliver your order<br/> promptly to your door</p>
            </div>
            <div className="card-gif">
                <img src={cart} alt="" srcset="" />
                <h5>Online Ordering</h5>
                <p>Explore menu & order<br/> with ease using ou<br/> Online Ordering </p>
            </div>
            <div className="card-gif">
                <img src={gift} alt="" srcset="" />
                <h5>Gift Cards</h5>
                <p>Give the gift of<br/> exceptional dining with<br/>  Coffee Cozy Cards</p>
            </div>
            

          </div>

      </div>
      </>
  )
}

export default Services