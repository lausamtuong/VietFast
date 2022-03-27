import React from "react";
import "./style.scss";
const Help = () => {
  return (
    <div>
      <div className="title">
        <p>Liên hệ VinFast</p>
      </div>
      <div className="address">
        <div className='address_item'>
          <div className="address_title">Địa chỉ</div>
          <div className="address_des">
            Khu kinh tế Đình Vũ – Cát Hải, Đảo Cát Hải, Thị trấn Cát Hải, Huyện
            Cát Hải, Thành phố Hải Phòng, Việt Nam.
          </div>
        </div>
        <div className='address_item'>
          <div className="address_title">Chi nhánh Hà Nội</div>
          <div className="address_des">
          Tầng 7, Toà Symphony, Đường Chu Huy Mân,
Khu đô thị Vinhomes Riverside Long Biên,
Long Biên, Hà Nội, Việt Nam.
          </div>
        </div>
        <div className='address_item'>
          <div className="address_title">Thông tin liên hệ</div>
          <div className="address_des">
           
          </div>
        </div>
      </div>
      <div className=''>
          <div className="">Gửi câu hỏi hoặc góp ý tới VinFast</div>
          <div className="">
          Chúng tôi sẽ phản hồi Quý khách trong thời gian sớm nhất.
          </div>
        </div>
    </div>
  );
};

export default Help;
