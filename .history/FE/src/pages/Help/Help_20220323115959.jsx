import React from "react";
import "./style.scss";
import MenuItem from "@mui/material/MenuItem";

const currencies = [
 
  {
    value: "EUR",
    label: "Chính sách",
  },
  {
    value: "BTC",
    label: "Mua hàng",
  },
  {
    value: "JPY",
    label: "Hỗ trợ",
  },
  {
    value: "JPY",
    label: "Khuyễn mãi",
  },
  {
    value: "JPY",
    label: "Góp ý",
  },
];
import TextField from "@mui/material/TextField";
const Help = () => {
    const [currency, setCurrency] = React.useState('EUR');

    const handleChange = (event) => {
      setCurrency(event.target.value);
    };
  return (
    <div>
      <div className="title">
        <p>Liên hệ VinFast</p>
      </div>
      <div className="address">
        <div className="address_item">
          <div className="address_title">Địa chỉ</div>
          <div className="address_des">
            Khu kinh tế Đình Vũ – Cát Hải, Đảo Cát Hải, Thị trấn Cát Hải, Huyện
            Cát Hải, Thành phố Hải Phòng, Việt Nam.
          </div>
        </div>
        <div className="address_item">
          <div className="address_title">Chi nhánh Hà Nội</div>
          <div className="address_des">
            Tầng 7, Toà Symphony, Đường Chu Huy Mân, Khu đô thị Vinhomes
            Riverside Long Biên, Long Biên, Hà Nội, Việt Nam.
          </div>
        </div>
        <div className="address_item">
          <div className="address_title">Thông tin liên hệ</div>
          <div className="address_des">
            <div>
              <span className="bold">Hotline</span>
              <span>123456789</span>
            </div>
            <div>
              <span className="bold">Email</span>
              <span>laptrinhweb@hcmut.edu.vn</span>
            </div>
            <div>
              <span className="bold">Facebook</span>
              <span>https://www.facebook.com/Vietfastt</span>
            </div>
          </div>
        </div>
      </div>
      <div className="send">
        <div className="send_title">Gửi câu hỏi hoặc góp ý tới VietFast</div>
        <div className="send_des">
          Chúng tôi sẽ phản hồi Quý khách trong thời gian sớm nhất.
        </div>
      </div>
      <div className="box">
        <TextField id="outlined-basic" label="Họ Và Tên" variant="outlined" />
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </div>
  );
};

export default Help;
