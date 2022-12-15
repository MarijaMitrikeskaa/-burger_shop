import React from "react";
import "./Slider.css";
export default function Slider(){
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const check = index => setSelectedIndex(index);
    return(
        <div>
          <section
            id="slider"
          >
            <input
              type="radio"
              name="slider"
              id="s1"
              checked={selectedIndex === 0}
              onClick={() => check(0)}
            />
            <input 
              type="radio" 
              name="slider" 
              id="s2" 
              checked={selectedIndex === 1}
              onClick={() => check(1)}
            />
            <input
              type="radio"
              name="slider"
              id="s3"
              checked={selectedIndex === 2}
              onClick={() => check(2)}
            />
            <label htmlFor="s1" id="slide1">
              <img className="fea" src={require('../assets/images/ad1.png')} height="100%" width="100%" alt="ad1"/>
            </label>
            <label htmlFor="s2" id="slide2">
              <img className="fea" src={require('../assets/images/ad2.png')} height="100%" width="100%" alt="ad2"/>
            </label>
            <label htmlFor="s3" id="slide3">
              <img className="fea" src={require('../assets/images/ad3.png')} height="100%" width="100%" alt="ad3"/>
            </label>
          </section>
        </div>
    )
}