import React from "react";
import "./style.css";
import video from "../../images/home__vd.mp4";
import v_light from "../../images/Vlight.svg";
import cntm_1 from "../../images/cntm_1.png";
import cntm_1 from "../../images/cntm_1.png";
import cntm_1 from "../../images/cntm_1.png";
import cntm_1 from "../../images/cntm_1.png";
import cntm_1 from "../../images/cntm_1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
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
          <div className="swiper-box">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              autoplay={true}
            >
              <SwiperSlide>
                {" "}
                <div className="swiper_item">
                  <div className="swiper_item-head">
                    <h1 className="swiper_item-name">
                      Công nghệ thông minh cho tương lai
                    </h1>
                    <p className="swiper_item-des">
                      Đặt khách hàng làm trọng tâm, các mẫu xe thông minh của
                      VinFast được ứng dụng những công nghệ ưu việt hàng đầu thế
                      giới, mở ra không gian hưởng thụ tiện nghi, giải trí hoàn
                      hảo cùng trải nghiệm cá nhân hóa đáng giá nhất
                    </p>
                  </div>
                  <div className="swiper_item-body">
                    <img src={cntm_1} atl="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="swiper_item">
                  <div className="swiper_item-head">
                    <h1 className="swiper_item-name">Thiết kế đầy đam mê</h1>
                    <p className="swiper_item-des">
                      Kết hợp với nhà thiết kế xe nổi tiếng thế giới
                      Pininfarina, VinFast mang đến chất lượng thiết kế đẳng cấp
                      cho từng dòng xe. Theo đuổi triết lý trải nghiệm chạm sinh
                      học, những chiếc xe VinFast sở hữu vẻ ngoài sang trọng đặc
                      trưng cùng khoang nội thất đậm chất tương lai, được chăm
                      chút trong từng chi tiết.
                    </p>
                  </div>
                  <div className="swiper_item-body">
                    <img src={cntm_2} atl="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="swiper_item">
                  <div className="swiper_item-head">
                    <h1 className="swiper_item-name">
                      Đẳng cấp an toàn quốc tế
                    </h1>
                    <p className="swiper_item-des">
                      Đặt sự an tâm của khách hàng lên trên hết, những chiếc xe
                      của VinFast được trang bị các tính năng an toàn tối tân
                      nhất để bảo vệ người lái và mọi hành khách trên xe, đáp
                      ứng tiêu chuẩn khắt khe của các tổ chức đánh giá xe uy tín
                      hàng đầu thế giới như ASEAN NCAP, EURO NCAP, NHTSA...
                    </p>
                  </div>
                  <div className="swiper_item-body">
                    <img src={cntm_3} atl="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="swiper_item">
                  <div className="swiper_item-head">
                    <h1 className="swiper_item-name">Trải nghiệm xuất sắc</h1>
                    <p className="swiper_item-des">
                      Sở hữu xe VinFast chính là tận hưởng những giá trị tốt
                      nhất của một hệ sinh thái đẳng cấp, từ mô hình O2O tích
                      hợp thương mại điện tử và trải nghiệm tại hệ thống Đại
                      lý/Showroom/Trạm sạc rộng khắp, tới chất lượng dịch vụ hậu
                      mãi vượt trội và sự tận tâm trong từng khoảnh khắc của
                      khách hàng.
                    </p>
                  </div>
                  <div className="swiper_item-body">
                    <img src={cntm_4} atl="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="swiper_item">
                  <div className="swiper_item-head">
                    <h1 className="swiper_item-name">Chính sách thấu hiểu</h1>
                    <p className="swiper_item-des">
                      VietFast luôn có chính sách bán hàng và hậu mãi có lợi
                      nhất cho khách hàng. VinFast cũng tiên phong thúc đẩy xu
                      hướng sử dụng xe điện, hướng tới tương lai xanh, bền vững
                      bằng chính sách pin và chế độ bảo hành 10 năm duy nhất
                      trên thị trường cho ô tô điện.
                    </p>
                  </div>
                  <div className="swiper_item-body">
                    <img src={cntm_5} atl="" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
