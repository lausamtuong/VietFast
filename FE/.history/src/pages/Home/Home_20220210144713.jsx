import React from 'react';
import "./style.css"
import video from "../../images/home__vd.mp4"
const Home = () => {
    return (
        <div className="Home__wrapper">
           <div className="Home__video">
               <video src={video} type="video/mp4" autoplay play>
                  Home
               </video>
               
                home
           </div>
        </div>
    );
}

export default Home;
