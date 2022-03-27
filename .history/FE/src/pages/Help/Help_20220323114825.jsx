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
          <div>
           <span className='bold'>Hotline</span>
           <span>123456789</span>
          </div>
          <div>
           <span className='bold'>Email</span>
           <span>laptrinhweb@hcmut.edu.vn</span>
          </div>
          <div>
           <span className='bold'>Facebook</span>
           <span>https://www.facebook.com/Vietfastt</span>
          </div>
          </div>
        </div>
      </div>
      <div className='send'>
          <div className="send_title">Gửi câu hỏi hoặc góp ý tới VietFast</div>
          <div className="send_des">
          Chúng tôi sẽ phản hồi Quý khách trong thời gian sớm nhất.
          </div>
        </div>
        .box
    </div>
  );
};

export default Help;
