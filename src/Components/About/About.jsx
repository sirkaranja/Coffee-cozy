import React from 'react'
import './About.css';
import about from '../../assets/Drink.png'
const About = () => {
  return (
    <div className="about-container">
        <div className="about-img">
            <img src={about} alt="" srcset="" />
        </div>
        <div className="about-info">
            <h4>About</h4>
            <h3>order Coffee online from your <br/>
            favourite  local restaurant</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing<br/>
                elit. Mauris vitae turpis quis arcu blandit dictum vitae<br/>
             non ipsum. Donec odio ipsum, rhoncus sit amet <br/>
             odio eget, congue auctor erat. Integer eu tortor varius,</p>
             <button id='btn'>Explore</button>
        </div>
        
    </div>
  )
}

export default About