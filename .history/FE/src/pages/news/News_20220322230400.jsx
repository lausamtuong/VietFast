import React, { useState } from "react";
import "./news.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

var cnt =6;
var lo;
const News = () => {
    const api = [
        {
          name: "Hơn 5.000 đăng ký tham gia cuộc thi toàn cầu của VinFast và Nas Academy",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_03/Go%20Boundless%20Grand%20Prize_1647413260.jpg?itok=_dYKaUqt",
        },
        {
          name: "VinFast công bố kết quả kinh doanh ô tô Tháng 2/2022",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_03/9%20-%20Camping%20(%20c%E1%BA%B7p%20%C4%91%C3%B4i%20ng%E1%BB%93i%20%E1%BB%9F%20c%E1%BB%91p%204)%20DSCF2929%20copy_1646909567.jpg?itok=DmPq4ynf",
        },
        {
          name: "VinFast tham dự triển lãm di động toàn cầu MWC 2022",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_02/VinFast_1645781273.jpg?itok=yKUW6kzC",
        },
        {
          name: "VinFast thay đổi lựa chọn màu sơn ngoại thất đón đầu xu hướng",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_02/1200x628_1645760182.png?itok=ws2Stn9O",
        },
        {
          name: "Trải nghiệm không gian hiện đại, đẳng cấp tại VinFast Nguyễn Văn Linh",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_02/vinfast-nguyen-van-linh-thumbnail_1645502749.jpg?itok=aFNer9U4",
        },
        {
          name: "VinFast và Nas Academy tổ chức cuộc thi toàn cầu truyền cảm hứng chuyển đổi từ xe xăng sang xe điện",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_02/Frame%2025-jpg_1645089583.jpg?itok=5-X9I4tD",
        },
        {
          name: "VinFast ra mắt xe máy điện Vento hoàn toàn mới, tốc độ tối đa 80km/h",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_02/KV%20Vento-01_1644984147.jpg?itok=3TwvORTO",
        },
        {
          name: "Khám phá trải nghiệm xuất sắc chỉ có trên “ghế cơ trưởng” của VinFast VF 9",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_02/VFe36_Lookdev_011_INTERIOR_2ND_ROW0000_1644563590.png?itok=50RM6UbK",
        },
        {
          name: "VinFast công bố kết quả kinh doanh ô tô Tháng 1/2022",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_02/Doanhsothang1_1644486610.png?itok=jtASL6C1",
        },
        {
          name: "Khám phá kho giải trí đa dạng nội dung trong ứng dụng FPT Play trên VinFast VF e34",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_02/FPT%20play%20KV_Option%202_KV%20hop%20tac%20FPT_1644894996.png?itok=puY79c4A",
        },
        {
          name: "VinFast thông báo chính sách cho thuê pin ô tô và chính sách sạc tại trạm sạc công cộng 2022",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_03/Tram-sac-xe-o-to-dien-VinFast_1647501206.jpg?itok=IHNo1oBN",
        },
        {
          name: "Lưu ý và hướng dẫn sử dụng bộ sạc di động 2.2 kW cho xe điện VinFast VF e34",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_01/bo-sac-di-dong-vinfast-vfe34-thumb_1642410056.jpg?itok=TsyLqZ0P",
        },
        {
          name: "VinFast nâng cao bảo hành lên 10 năm cho các dòng Ô tô chạy xăng",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_01/OSxOF_1641963570.jpg?itok=ltbUXn52",
        },
        {
          name: "VinFast bán ra tổng cộng 35.723 xe ô tô trong năm 2021",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_01/IMG_2611_1641806963.jpg?itok=KYjfgVWl",
        },
        {
          name: "VinFast triển khai dịch vụ sửa chữa lưu động chính hãng đầu tiên tại Việt Nam",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_01/KV%20MBS%20T12_1641453801.png?itok=C4EuQqqy",
        },
        {
          name: "VinFast cam kết phục vụ đến hết vòng đời với từng chiếc xe bán ra",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_01/1600x900_1641613124.jpg?itok=O0xdSBVd",
        },
        {
          name: "VinFast công bố chiến lược thuần điện và dải sản phẩm hoàn thiện tại CES 2022",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_01/6N9A7750_1641435561.jpg?itok=imt77xmQ",
        },
        {
          name: "VinFast công bố nhận đặt hàng trước xe VF e35, VF e36 và ứng dụng blockchain tại CES",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2022_01/pic%202%20VinFast_CES_KV_1641265586.jpeg?itok=pHCuGjEj",
        },
        {
          name: "Hệ thống showroom Vin3S sở hữu không gian công nghệ AR/VR trên toàn quốc",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_12/vinfast-arvr_1640935065.jpg?itok=4wMMjZZK",
        },
        {
          name: "Vingroup bổ nhiệm bà Lê Thị Thu Thủy làm Tổng giám đốc VinFast toàn cầu thay ông Michael Lohscheller",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_12/vinfast-ceo_1640682014.png?itok=Q4pQluJN",
        },
        {
          name: "VinFast bàn giao lô xe ô tô điện VF e34 đầu tiên cho Khách hàng",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_12/vinfast-ban-giao-xe-dien-1_1640446224.jpg?itok=OQHJU_Mx",
        },
        {
          name: "VinFast giới thiệu dải sản phẩm ô tô điện và các công nghệ thông minh tại triển lãm CES 2022",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_12/VinFast_CES_KV_Comp%20(1)-min_1639620395.png?itok=zTwvVSpR",
        },
        {
          name: "Vingroup khởi công nhà máy sản xuất pin VinES tại khu kinh tế Vũng Áng, Hà Tĩnh",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_12/vines_1639309026.jpg?itok=2pqeQsq8",
        },
        {
          name: "VinFast công bố kết quả kinh doanh ô tô tháng 11/2021",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_12/Doanhsothang19_thumb_1_1631274510_1633950016_1636543085%20(1)_1639138577.png?itok=6DAv2-w5",
        },
        {
          name: "VinFast sẽ bàn giao lô xe ô tô điện VF e34 đầu tiên vào ngày 25/12/2021",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_12/6a628609-256e-44b3-99be-7f28b06c50cd_1638961486.png?itok=orCOFk7O",
        },
        {
          name: "VinFast tập trung triển khai dịch vụ đổi pin cho xe máy điện tại hệ thống Xưởng Dịch vụ và Showroom Vin3S trên toàn quốc",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_11/200tramsacVF_02_1628667897_1637298437.jpg?itok=JK6AHFFW",
        },
        {
          name: "VinFast chính thức khai trương Showroom VinFast 3S Hải Phòng",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_11/Showroom%20Hai%20Phong1_1637201725.jpg?itok=tA0DSIom",
        },
        {
          name: "VinFast ra mắt thương hiệu xe điện tại Los Angeles Auto Show 2021",
          img: "https://vinfastauto.com/sites/default/files/styles/news_360x200/public/2021-11/VF1_1637230117.jpg?itok=5YPxeRyV",
        },
        {
          name: "VinFast xuất khẩu lô xe đầu tiên sang thị trường Lào",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_11/XK%20Lao_Anh%201_1636628282.JPG?itok=cuNZpEye",
        },
        {
          name: "VinFast công bố kết quả kinh doanh ô tô Tháng 10/2021",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_11/Doanhsothang19_thumb_1_1631274510_1633950016_1636543085.png?itok=nKYAHJE1",
        },
        {
          name: "VinFast và EDF ký kết biên bản ghi nhớ hợp tác lắp đặt trạm sạc điện tại Pháp",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_11/MOU%20VF_EDF_1636098006.jpg?itok=rCaoVSz8",
        },
        {
          name: "Triệu hồi 2.853 xe Chevrolet Spark Van tại Việt Nam",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_10/shutterstock_1193551489_1634881071.jpg?itok=puzL0BKC",
        },
        {
          name: "VinFast công bố 2 mẫu xe điện mới tại Los Angeles Auto Show 2021",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_10/Press%20Release%20-%20ENG_1634367120.png?itok=wqt_vD5v",
        },
        {
          name: "VinFast công bố kết quả kinh doanh ô tô tháng 9/2021",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_10/Doanhsothang19_thumb_1_1631274510_1633950016.png?itok=Iw2B38Pd",
        },
        {
          name: "VinFast hợp tác với tổ chức xe hơi hàng đầu Châu Âu - AUTOBEST thúc đẩy xu hướng ô tô điện",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_10/VF%20e36_1633090326.jpg?itok=VjlRtqos",
        },
        {
          name: "VinFast chọn Cerence làm đối tác phát triển trợ lý ảo thông minh điều khiển bằng giọng nói",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_09/VFe36_1632812116.jpg?itok=KugEFGq_",
        },
        {
          name: "VinFast công bố kết quả kinh doanh ô tô tháng 08/2021",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_09/Doanhsothang08_thumb_1_1631274510.png?itok=4IwsA-mn",
        },
        {
          name: "VinFast ra mắt app VinFast E-Scooter mới dành riêng cho các dòng xe máy điện",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_09/sieuapp_1631701003.png?itok=qG2fSPpO",
        },
        {
          name: "VinFast tìm kiếm đối tác đặt trạm xe điện toàn quốc",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_09/tramsac-01_1630987575.png?itok=jUcVZIyc",
        },
        {
          name: "VinFast VF e34 chính thức lộ diện những hình ảnh thực tế mới nhất",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_12/VF-e34_1640219705.jpg?itok=Cq5C4zZw",
        },
        {
          name: "VinFast công bố thông tin trái phiếu",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_08/VF-3-1541436120_1630320208.jpg?itok=3uLSpTQn",
        },
        {
          name: "VinFast hợp tác với Gotion High-Tech nghiên cứu và sản xuất cell pin LFP cho xe điện",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_08/gotion_1629689392.jpeg?itok=sE2hvolh",
        },
        {
          name: "Bí kíp sử dụng thẻ VinID khi trúng thưởng lớn cùng VinFast",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_08/20190521_VinID_HDNV_HDSDGiffCard_1629446354.jpg?itok=BKlQNga4",
        },
        {
          name: "Bộ Tài chính đề xuất giảm 50% lệ phí trước bạ: Cú hích cho ngành ô tô điện Việt",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_08/LPTB_50_1629401387.jpg?itok=sp9r0On2",
        },
        {
          name: "Thể lệ quay số trúng thưởng: Đặt dấu tiên phong - Nhận quà may mắn",
          img: "https://storage.googleapis.com/vinfast-data-01/styles/news_360x200/public/2021_09/quayso_05_1631175229.png?itok=kEWiawoa",
        },
      ];
      
  window.scrollTo(0, 0);
  const [data, setData] = useState([
    api.splice(0, 4).map((item, ind) => {
      return (
        <div className="item" key={ind}>
          <RelatedCard
            topic="Technology"
            date="March 26, 2022"
            title="Japan’s virus success has puzzled the world. Is its luck running out?"
            name={item.name}
            img={item.img}
          />
        </div>
      );
    }),
  ]);
  const [content, setContent] = useState([
    api.splice(0, 6).map((item, ind) => {
      return (
        <div className="item" key={ind}>
          <CardContent
            name={item.name}
            img={item.img}
          />
        </div>
      );
    }),
  ]);
  const showMore = () => {
    cnt+=6;
    lo=window.scrollY
 
    setContent([
        api.splice(0,cnt).map((item, ind) => {
            return (
              <div className="item" key={ind}>
                <CardContent
                  name={item.name}
                  img={item.img}
                />
              </div>
            );
          })  
    ]);
  
  };
  
  window.scrollTo(0,lo +0);
  return (
    <div className="news">
      <div className="news__header">
        <div className="hot__news">
          <NewsCard
            img
          
            title={api[0].name}
          />
        </div>
        <div className="related__news">
          <div className="label">RELATED</div>
          {data.map((item, index) => item)}
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
      <div className="Content">
     {content.map((item, index) => item)}
      </div>
      <button className='show' onClick={showMore}>SHOW MORE</button>
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
        <img src={props.img} alt="img" />
      </div>
      <div className="text">
        <div className="title">{props.name}</div>
      </div>
    </div>
  );
};
const CardContent = (props)=>{
    return (
        <div className="card_content">
            <div className="image">
                <img src={props.img} alt="avt" />
            </div>
            <div className="title">
        <span>
             {props.name} 
        </span>
            </div>
        </div>
        )
}
export default News;
