import React,{useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import ProductList from '../../components/product-list/ProductList';
import './product.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import Button from '../../components/button/Button';
import Privacy from '../../components/privacy/Privacy';
const Product = () => {
  const dispatch = useDispatch()
  const banner = useSelector(state => state.API.BANNER)
  const [show, setShow] = useState(false)
  const checkHandle = (e) => {
    let x = document.querySelectorAll('input')
    x.forEach((item) => {
      if (item.id != e.target.id) item.checked = false;
      else {
        item.checked=true ;

      }
    })
    const type_ = (e.target.parentNode.parentNode.classList.value.includes('bike'))? "BIKE" : 
    e.target.parentNode.parentNode.classList.value.includes('car')? "CAR" : "ALL";
    (type_=="ALL") ? dispatch({
      type:'filter',
      type_: type_,
      fuel: "",
    }):
    dispatch({
      type:'filter',
      type_: type_,
      fuel: e.target.id,
    });

  }
  return <>
    <div className='product' style={{overflow:'hidden'}}>
    <div className="product__banner">
       <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={true}
      navigation
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide>
        <img src={banner.header[0]} alt="alt" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner.header[1]} alt="alt" /></SwiperSlide>
    </Swiper>
    </div>
    <div className="product__title">
      sản phẩm bán chạy
    </div>
    <div className="product__main">
      <div className="product__category">
      <div className="__widget">
        <div className="product__category__name">
        Danh mục sản phẩm
        </div>
      <div className="product__category__all__filter">
        <div className="__all">
          <input onClick={checkHandle} type="checkbox" id="all" />
            <label htmlFor="all">Tất cả</label>
        </div>
      </div>
      <div className="product__category__car">
        <div className="product__category__car__label">
          Ô tô
        </div>
        <div className="product__category__car__filter">
          <div className="__petrol">
            <input onClick={checkHandle} type="checkbox" id="petrol" />
            <label htmlFor="petrol">Động cơ xăng</label>
          </div>
          <div className="__electric">
            <input onClick={checkHandle} type="checkbox" id="electric" />
            <label htmlFor="electric">Động cơ điện</label>
          </div>
        </div>
      </div>
      <div className="product__category__bike">
        <div className="product__category__bike__label">
          Xe mô tô
        </div>
        <div className="product__category__bike__filter">
          <div className="__bike">
            <input onClick={checkHandle} type="checkbox" id="bike" />
            <label htmlFor="bike">Xe máy xăng</label>
          </div>
          <div className="__electric">
            <input onClick={checkHandle} type="checkbox" id="e-bike" />
            <label htmlFor="e-bike">Xe máy điện</label>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div className="product__list">
      <ProductList />
    </div>
    </div>
    <div className="product__privacy">     

      <div className="product__privacy__title">
        CHÍNH SÁCH PIN LINH HOẠT - TIẾT KIỆM
      </div>
      <div className="product__privacy__desc">
        Mua pin, thuê pin linh hoạt, tiết kiệm. Khách hàng linh hoạt lựa chọn hình thức mua pin
hoặc thuê pin ưu việt với gói thuê pin chỉ từ 149.000 vnđ/pin/tháng.
      </div>
      <div className="product__privacy__banner">
        <img src={banner.privacy} alt="" />
      </div>
      <div className="product__privacy__btn" onClick={()=> setShow(!show)} >
        <Button label={"CHÍNH SÁCH THUÊ PIN"} 
        style={{padding:"1rem 2rem",marginTop:"2rem",fontWeight:"bold",
        background: "linear-gradient(270deg, #0094FF 0%, #2C72C6 100%)"
      }}
        />
      </div>
    </div>
    <div className="product__tutorial mt-3">
      <h1>Hướng dẫn trả góp</h1>
      <div className="container_tutor">
        <div className="navigation_link--active">
          TRẢ GÓP QUA THẺ TÍN DỤNG
        </div>
        <div className="content">
          <div className="step-1">
            <img src={banner.tutorial[0]} alt="" />
          </div>
          <div className="step-2">
            <img src={banner.tutorial[1]} alt="" />

          </div>
          <div className="step-3">
            <img src={banner.tutorial[2]} alt="" />

          </div>
        </div>
      </div>
    </div>
      <div className="product__banner mt-3">
       <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={true}
      navigation
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide>
        <img src={banner.footer[0]} alt="alt" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner.footer[1]} alt="alt" /></SwiperSlide>


    </Swiper>
    </div>
    <div className="product__register mt-3">
      <div className="title">ĐĂNG KÝ TRẢI NGHIỆM XE</div>
      <div className="main">
        <div className="banner">
        <img src="https://shop.vinfastauto.com/on/demandware.static/-/Sites-app_vinfast_vn-Library/default/dw666faf18/landingpage/images/register.png" alt="" />
      </div>
      <div className="content">
        <Register />
      </div>
      </div>
    </div>
  </div>;
        {show&&<Privacy show={show} setShow={setShow}/>}

  </>
};

const Register = () =>  {

  return (
    <>
      <div className="group-item">
        <div className="label">
          Họ tên
        </div>
        <input type="text" placeholder='Họ tên' required />
      </div>
      <div className="group-item">
        <div className="label">
          Số điện thoại
        </div>
        <input type="text" placeholder='Số điện thoại' required />
      </div>
      <div className="group-item">
        <div className="label">
          Tỉnh thành
        </div>
        <select name="" id="">
<option value="An Giang">An Giang</option>
<option value="Bà rịa – Vũng tàu">Bà rịa – Vũng tàu</option> – Vũng tàu
<option value="Bắc Giang">Bắc Giang</option>
<option value="Bắc Kạn">Bắc Kạn</option>
<option value="Bạc Liêu">Bạc Liêu</option>
<option value="Bắc Ninh">Bắc Ninh</option>
<option value="Bến Tre">Bến Tre</option>
<option value="Bình Định">Bình Định</option>
<option value="Bình Dương">Bình Dương</option>
<option value="Bình Phước">Bình Phước</option>
<option value="Bình Thuận">Bình Thuận</option>
<option value="Cà Mau">Cà Mau</option>
<option value="Cần Thơ">Cần Thơ</option>
<option value="Cao Bằng ">Cao Bằng </option> 
<option value="Đà Nẵng">Đà Nẵng</option>
<option value="Đắk Lắk">Đắk Lắk</option>
<option value="Đắk Nông">Đắk Nông</option>
<option value="Điện Biên">Điện Biên</option>
<option value="Đồng Nai">Đồng Nai</option>
<option value="Đồng Tháp">Đồng Tháp</option>
<option value="Gia Lai">Gia Lai</option>
<option value="Hà Giang">Hà Giang</option>
<option value="Hà Nam">Hà Nam</option>
<option value="Hà Nội ">Hà Nội </option> 
<option value="Hà Tĩnh">Hà Tĩnh</option>
<option value="Hải Dương">Hải Dương</option>
<option value="Hải Phòng">Hải Phòng</option>
<option value="Hậu Giang">Hậu Giang</option>
<option value="Hòa Bình">Hòa Bình</option>
<option value="Hưng Yên">Hưng Yên</option>
<option value="Khánh Hòa">Khánh Hòa</option>
<option value="Kiên Giang">Kiên Giang</option>
<option value="Kon Tum">Kon Tum</option>
<option value="Lai Châu">Lai Châu</option>
<option value="Lâm Đồng">Lâm Đồng</option>
<option value="Lạng Sơn">Lạng Sơn</option>
<option value="Lào Cai">Lào Cai</option>
<option value="Long An">Long An</option>
<option value="Nam Định">Nam Định</option>
<option value="Nghệ An">Nghệ An</option>
<option value="Ninh Bình">Ninh Bình</option>
<option value="Ninh Thuận">Ninh Thuận</option>
<option value="Phú Thọ">Phú Thọ</option>
<option value="Phú Yên">Phú Yên</option>
<option value="Quảng Bình">Quảng Bình</option>
<option value="Quảng Nam">Quảng Nam</option>
<option value="Quảng Ngãi">Quảng Ngãi</option>
<option value="Quảng Ninh">Quảng Ninh</option>
<option value="Quảng Trị">Quảng Trị</option>
<option value="Sóc Trăng">Sóc Trăng</option>
<option value="Sơn La">Sơn La</option>
<option value="Tây Ninh">Tây Ninh</option>
<option value="Thái Bình">Thái Bình</option>
<option value="Thái Nguyên">Thái Nguyên</option>
<option value="Thanh Hóa">Thanh Hóa</option>
<option value="Thừa Thiên Huế">Thừa Thiên Huế</option>
<option value="Tiền Giang">Tiền Giang</option>
<option value="Thành phố Hồ Chí Minh">Thành phố Hồ Chí Minh</option>
<option value="Trà Vinh">Trà Vinh</option>
<option value="Tuyên Quang">Tuyên Quang</option>
<option value="Vĩnh Long">Vĩnh Long</option>
<option value="Vĩnh Phúc">Vĩnh Phúc</option>
<option value="Yên Bái">Yên Bái</option>
        </select>
      </div>
      <div className="group-item">
        <div className="label">
          Mẫu xe
        </div>
        <select name="" id="" required>
          <option value="feliz">Feliz</option>
          <option value="ludo">LUDO</option>
          <option value="impes">IMPES</option>
          <option value="klara-a2">Klara A2</option>
          <option value="klara-s">Klara S</option>
          <option value="theon">Theon</option>


          </select> 
          
      </div>
      <div className="register__btn mt-3">
            <button>Đăng ký lái thử</button>
          </div>
          <div className="hotline">
            HOTLINE - 1900 23 23 89 (1000đ/phút)
          </div>
    </>
  )
}

export default Product;
