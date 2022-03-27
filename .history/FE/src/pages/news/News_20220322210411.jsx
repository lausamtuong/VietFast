import React, { useState } from "react";
import "./news.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
const data = "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_03/Go%20Boundless%20Grand%20Prize_1647413260.jpg?itok=_dYKaUqt https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_03/9%20-%20Camping%20(%20c%E1%BA%B7p%20%C4%91%C3%B4i%20ng%E1%BB%93i%20%E1%BB%9F%20c%E1%BB%91p%204)%20DSCF2929%20copy_1646909567.jpg?itok=DmPq4ynf https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_02/VinFast_1645781273.jpg?itok=yKUW6kzC https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_02/1200x628_1645760182.png?itok=ws2Stn9O https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_02/vinfast-nguyen-van-linh-thumbnail_1645502749.jpg?itok=aFNer9U4 https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_02/Frame%2025-jpg_1645089583.jpg?itok=5-X9I4tD https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_02/KV%20Vento-01_1644984147.jpg?itok=3TwvORTO https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_02/VFe36_Lookdev_011_INTERIOR_2ND_ROW0000_1644563590.png?itok=50RM6UbK https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_02/Doanhsothang1_1644486610.png?itok=jtASL6C1 https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_02/FPT%20play%20KV_Option%202_KV%20hop%20tac%20FPT_1644894996.png?itok=puY79c4A https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_03/Tram-sac-xe-o-to-dien-VinFast_1647501206.jpg?itok=IHNo1oBN https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_01/bo-sac-di-dong-vinfast-vfe34-thumb_1642410056.jpg?itok=TsyLqZ0P https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_01/OSxOF_1641963570.jpg?itok=ltbUXn52 https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_01/IMG_2611_1641806963.jpg?itok=KYjfgVWl https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_01/KV%20MBS%20T12_1641453801.png?itok=C4EuQqqy https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_01/1600x900_1641613124.jpg?itok=O0xdSBVd https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_01/6N9A7750_1641435561.jpg?itok=imt77xmQ https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_01/pic%202%20VinFast_CES_KV_1641265586.jpeg?itok=pHCuGjEj https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_12/vinfast-arvr_1640935065.jpg?itok=4wMMjZZK https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_12/vinfast-ceo_1640682014.png?itok=Q4pQluJN https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_12/vinfast-ban-giao-xe-dien-1_1640446224.jpg?itok=OQHJU_Mx https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_12/VinFast_CES_KV_Comp%20(1)-min_1639620395.png?itok=zTwvVSpR https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_12/vines_1639309026.jpg?itok=2pqeQsq8 https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_12/Doanhsothang19_thumb_1_1631274510_1633950016_1636543085%20(1)_1639138577.png?itok=6DAv2-w5 https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_12/6a628609-256e-44b3-99be-7f28b06c50cd_1638961486.png?itok=orCOFk7O https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_11/200tramsacVF_02_1628667897_1637298437.jpg?itok=JK6AHFFW https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_11/Showroom%20Hai%20Phong1_1637201725.jpg?itok=tA0DSIom https://vinfastauto.com/sites/default/files/styles/news_360x200/public/2021-11/VF1_1637230117.jpg?itok=5YPxeRyV https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_11/XK%20Lao_Anh%201_1636628282.JPG?itok=cuNZpEye https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_11/Doanhsothang19_thumb_1_1631274510_1633950016_1636543085.png?itok=nKYAHJE1 https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_11/MOU%20VF_EDF_1636098006.jpg?itok=rCaoVSz8 https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_10/shutterstock_1193551489_1634881071.jpg?itok=puzL0BKC https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_10/Press%20Release%20-%20ENG_1634367120.png?itok=wqt_vD5v https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_10/Doanhsothang19_thumb_1_1631274510_1633950016.png?itok=Iw2B38Pd https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_10/VF%20e36_1633090326.jpg?itok=VjlRtqos https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_09/VFe36_1632812116.jpg?itok=KugEFGq_ https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_09/Doanhsothang08_thumb_1_1631274510.png?itok=4IwsA-mn https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_09/sieuapp_1631701003.png?itok=qG2fSPpO https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_09/tramsac-01_1630987575.png?itok=jUcVZIyc https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_12/VF-e34_1640219705.jpg?itok=Cq5C4zZw https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_08/VF-3-1541436120_1630320208.jpg?itok=3uLSpTQn https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_08/gotion_1629689392.jpeg?itok=sE2hvolh https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_08/20190521_VinID_HDNV_HDSDGiffCard_1629446354.jpg?itok=BKlQNga4 https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_08/LPTB_50_1629401387.jpg?itok=sp9r0On2 https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_09/quayso_05_1631175229.png?itok=kEWiawoa"
const News = () => {
  window.scrollTo(0, 0);
  const [data, setData] = useState([
    <div className="item">
      <RelatedCard
        topic="Technology"
        date="March 26, 2022"
        title="Japan’s virus success has puzzled the world. Is its luck running out?"
      />
    </div>,
    <div className="item">
      <RelatedCard
        topic="Technology"
        date="March 26, 2022"
        title="Japan’s virus success has puzzled the world. Is its luck running out?"
      />
    </div>,
  ]);
  const showMore = () => {
    setData((state) => [
      ...state,
      <div className="item">
        <RelatedCard
          topic="Technology"
          date="March 26, 2022"
          title="Japan’s virus success has puzzled the world. Is its luck running out?"
        />
      </div>,
    ]);
  };
  return (
    <div className="news">
      <div className="news__header">
        <div className="hot__news">
          <NewsCard
            topic="Technology"
            date="March 26, 2022"
            title="Japan’s virus success has puzzled the world. Is its luck running out?"
          />
        </div>
        <div className="related__news">
          <div className="label">RELATED</div>
          {data.map((item, index) => item)}
          <button onClick={showMore}>Show more</button>
        </div>
      </div>
      <div className="news__future">
        <div className="label">Feature News</div>
        <div className="content">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            spaceBetween={50}
            slidesPerView="auto"
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay={{ delay: 3000 }}
          >
            <SwiperSlide>
              <NewsCard
                topic="Technology"
                date="March 26, 2022"
                title="Japan’s virus success has puzzled the world. Is its luck running out?"
              />
            </SwiperSlide>
            <SwiperSlide>
              <NewsCard
                topic="Technology"
                date="March 26, 2022"
                title="Japan’s virus success has puzzled the world. Is its luck running out?"
              />
            </SwiperSlide>
            <SwiperSlide>
              <NewsCard
                topic="Technology"
                date="March 26, 2022"
                title="Japan’s virus success has puzzled the world. Is its luck running out?"
              />
            </SwiperSlide>
            <SwiperSlide>
              <NewsCard
                topic="Technology"
                date="March 26, 2022"
                title="Japan’s virus success has puzzled the world. Is its luck running out?"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

const NewsCard = (props) => {
  return (
    <div className="news__card">
      <div className="image">
        <img src="https://source.unsplash.com/random" alt="" />
      </div>
      <div className="text">
        <div className="timestamp">
          <span>
            {props.topic} / {props.date}
          </span>
        </div>
        <div className="title">{props.title}</div>
      </div>
    </div>
  );
};

const RelatedCard = (props) => {
  return (
    <div className="related__card">
      <div className="image">
        <img src="https://source.unsplash.com/random" alt="" />
      </div>
      <div className="text">
        <div className="timestamp">
          <span>
            <span style={{ color: "#1091ff" }}>{props.topic}</span> /{" "}
            {props.date}
          </span>
        </div>
        <div className="title">{props.title}</div>
      </div>
    </div>
  );
};

export default News;
