import React from "react";
import "./style.css";
import video from "../../images/home__vd.mp4";
import v_light from "../../images/Vlight.svg";
const Home = () => {
  return (
    <div className="Home__wrapper">
      <div className="Home__video">
        <video autoPlay playsInline muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="v-light">
        <img
          alt="v-light"
          src={v_light}
        />
      </div>
      <div className="block-new-home">
          lorem
          
      </div>
    </div>
  );
};

export default Home;
