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
      <div className="container-fluid cta-button">
        <div className="row justify-content-center">
          {" "}
          <a
            className="deposit"
            href="https://reserve.vinfastauto.com/"
            onclick="gtag_custom_link(this);"
          >
            Đặt cọc ngay
          </a>{" "}
          <a
            className="more-information"
            href="https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dwb84ed557/raisinghands/documents/VF8-VF9_Brochure.pdf"
            onclick="gtag_custom_link(this);"
          >
            Tìm hiểu thêm
          </a>
        </div>
      </div>
      <div className="v-light">
        <img alt="v-light" src={v_light} />
      </div>
      <div className="block-new-home-cntm">
        <div className="container-fluid">
          <div class="swiper-wrapper">
            <div>
              <h1>Công nghệ thông minh cho tương lai</h1>
              <p>
                Đặt khách hàng làm trọng tâm, các mẫu xe thông minh của VinFast
                được ứng dụng những công nghệ <br >
                ưu việt hàng đầu thế giới, mở ra không gian hưởng thụ tiện nghi,
                giải trí hoàn hảo cùng trải nghiệm{" "}
                <br> cá nhân hóa đáng giá nhất.</br>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
