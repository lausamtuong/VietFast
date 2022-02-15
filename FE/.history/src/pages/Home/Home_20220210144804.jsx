import React from 'react';
import "./style.css"
import video from "../../images/home__vd.mp4"
const Home = () => {
    return (
        <div className="Home__wrapper">
           <div className="Home__video">
               <video src={video} type="video/mp4" autoplay playsinline loop>
               <source src="https://storage.googleapis.com/cms_data_public/%5B3MB%20Web%5D%2020220106_Vinfast_VF8_VF9.mov" type="video/mp4">
               </video>
               
                home
           </div>
        </div>
    );
}

export default Home;
