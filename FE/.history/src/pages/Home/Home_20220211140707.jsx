import React from "react";
import "./style.css";
import video from "../../images/home__vd.mp4";
import v_light from "../../images/Vlight.svg";
import cntm_1 from "../../images/cntm_1.png";
import cntm_2 from "../../images/cntm_2png.png";
import cntm_3 from "../../images/cntm_3.png";
import cntm_4 from "../../images/cntm_4.png";
import cntm_5 from "../../images/cntm_5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import Card from "../../components/Card/Card";
import LuxA20 from "../../images/A20.gif";
import LuxA20_ from "../../images/LuxA_.png";
import Fadil from "../../images/Fadil-360.gif";
import Fadil_ from "../../images/Fadil 1_.png";
import LuxSA from "../../images/LuxSA20.gif";
import LuxSA_ from "../../images/LuxSA_.png";
import Pre from "../../images/Pre.gif";
import Pre_ from "../../images/president_.png";
import VFe34 from "../../images/Vfe34.gif";
import VFe34_ from "../../images/VFe34_.png";
import xe_may from "../../images/xe-may-dien.mp4";
import vlight_up from "../../images/Vlight-up.png";
import vlight_down from "../../images/Vlight-down.png";
import klaraA2_ from "../../images/klaraA2_.png";
import tempest_ from "../../images/tempest_.png";
import klaraS_ from "../../images/klaraS_.png";
import feliz_ from "../../images/feliz_.png";
import theon_ from "../../images/theon_.png";
import bg_tab from "../../images/bg.jpg";
const ListCar = [
  {
    img: LuxA20_,
    gif: LuxA20,
    title: "Tận hưởng từng khoảnh khắc",
    name: "LUX A2.0",
    type: "SEDAN",
    price: "từ 949 triệu",
  },
  {
    img: Fadil_,
    gif: Fadil,
    title: "Tối ưu mọi trải nghiệm",
    name: "FADIL",
    type: "HATCHBACK",
    price: "từ 382 triệu",
  },
  {
    img: LuxSA_,
    gif: LuxSA,
    title: "Chinh phục mọi cung đường",
    name: "LUX SA2.0",
    type: "SUV",
    price: "từ 1.2 tỷ",
  },
  {
    img: VFe34_,
    gif: VFe34,
    title: "Cùng bạn bứt phá mọi giới hạn",
    name: "VF e34",
    type: "SUV",
    price: "690 triệu",
  },
  {
    img: Pre_,
    gif: Pre,
    title: "Dấu ấn người thủ lĩnh",
    name: "PRESIDENT",
    type: "SUV",
    price: "từ 3.8 tỷ",
  },
];
const ListMoto = [
  {
    img: theon_,
    gif: theon_,
    title: "Công nghệ bứt phá đỉnh cao",
    name: "THEON",
    type: "CAO CẤP",
    price: "63.9 triệu",
  },
  {
    img: feliz_,
    gif: feliz_,
    title: "Sống xanh thanh lịch",
    name: "FELIZ",
    type: "TRUNG CẤP",
    price: "24.9 triệu",
  },
  {
    img: klaraS_,
    gif: klaraS_,
    title: "Khởi đầu phong cách mới",
    name: "KLARA S",
    type: "TRUNG CẤP",
    price: "39.9 triệu",
  },
  {
    img: tempest_,
    gif: tempest_,
    title: "Tỏa khí chất - Hút ánh nhìn",
    name: "TEMPEST",
    type: "PHỔ THÔNG",
    price: "19.25 triệu",
  },
  {
    img: klaraA2_,
    gif: klaraA2_,
    title: "Sống xanh thanh lịch",
    name: "KLARA A2",
    type: "TRUNG CẤP",
    price: "26.9 triệu",
  },
];
const Home = ({ width }) => {
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
                      VietFast được ứng dụng những công nghệ ưu việt hàng đầu
                      thế giới, mở ra không gian hưởng thụ tiện nghi, giải trí
                      hoàn hảo cùng trải nghiệm cá nhân hóa đáng giá nhất
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
                      Pininfarina, VietFast mang đến chất lượng thiết kế đẳng
                      cấp cho từng dòng xe. Theo đuổi triết lý trải nghiệm chạm
                      sinh học, những chiếc xe VietFast sở hữu vẻ ngoài sang
                      trọng đặc trưng cùng khoang nội thất đậm chất tương lai,
                      được chăm chút trong từng chi tiết.
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
                      của VietFast được trang bị các tính năng an toàn tối tân
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
                      Sở hữu xe VietFast chính là tận hưởng những giá trị tốt
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
                      nhất cho khách hàng. VietFast cũng tiên phong thúc đẩy xu
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
            <div className="swiper_item-head">
              <h1 className="swiper_item-name">Xe ô tô</h1>
              <p className="swiper_item-des">
                Hơn cả việc tạo nên một chiếc xe mới, VietFast ra đời đại diện
                cho tinh thần và niềm kiêu hãnh dân tộc.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="block-new-home-car">
        <div className="container-fluid">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={width}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={true}
          >
            {ListCar.map((item, index) => (
              <SwiperSlide key={index}>
                <Card
                  img={item.img}
                  name={item.name}
                  gif={item.gif}
                  title={item.title}
                  price={item.price}
                  type={item.type}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="block-newhome-videomiddle">
        <div className="v-light absolute">
          <img src={vlight_up} />
        </div>
        <video autoPlay playsInline muted loop>
          <source src={xe_may} type="video/mp4" />
        </video>
      </div>
      <div className="v-light down">
        <img src={vlight_down} />
      </div>
      <div className="swiper_item-head">
        <h1 className="swiper_item-name">Xe máy điện</h1>
        <p className="swiper_item-des">
          Sản phẩm của người Việt, dành cho người Việt với các chính sách ưu đãi
          tốt nhất thị trường.
        </p>
      </div>
      <div className="block-new-home-car">
        <div className="container-fluid">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={width}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={true}
          >
            {ListMoto.map((item, index) => (
              <SwiperSlide key={index}>
                <Card
                  img={item.img}
                  name={item.name}
                  gif={item.img}
                  title={item.title}
                  price={item.price}
                  type={item.type}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="block-new-home-testimonial">
        <img alt="background-tablet" src={bg_tab} />
        {/* <img alt='background-tablet' src={}/> */}
        <div className="background__title">
          Hành trình chinh phục thế giới
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
              <p className='slogan'>
                “Trong ngành công nghiệp xe hơi, việc thiết kế và chế tạo không
                chỉ một mà hai chiếc xe chỉ trong vòng 12 tháng là tốc độ không
                tưởng”
              </p>
              <p className="author">- Top Gear -</p>
            </SwiperSlide>
           
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Home;
