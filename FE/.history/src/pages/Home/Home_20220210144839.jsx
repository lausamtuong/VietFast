import React from "react";
import "./style.css";
import video from "../../images/home__vd.mp4";
const Home = () => {
  return (
    <div className="Home__wrapper">
      <div className="Home__video">
        <video  autoplay playsinline loop>
          <source
            src={}
            type="video/mp4"
          />
        </video>
        home
      </div>
    </div>
  );
};

export default Home;
