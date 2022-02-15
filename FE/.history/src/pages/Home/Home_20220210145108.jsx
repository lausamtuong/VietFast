import React from "react";
import "./style.css";
import video from "../../images/home__vd.mp4";
const Home = () => {
  return (
    <div className="Home__wrapper">
      <div className="Home__video">
        <video  autoPlay playsInline muted loop>
          <source
            src={video}
            type="video/mp4"
          />
        </video>
      
      </div>
    </div>
  );
};

export default Home;
