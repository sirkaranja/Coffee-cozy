import React from 'react'
import './Coursel.css';
import img1 from '../../assets/coffee.png'

const Coursel = () => {
  return (
    <div className="main-coursel">
        <div className="title">
            <h3>
            Discover<br/> 
            Your coffee<br/> 
            <span id='exp'>Experience</span> 
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Mauris vitae turpis quis arcu </p>
            <div className="btn-coursel">
                <button id='order'>Order Now</button>
                <button>Watch Video</button>
            </div>

        </div>
        <div className="coursel-image">
            <img src={img1} alt="" id='coursel-image' srcset="" />

        </div>
    </div>

  )
}

export default Coursel