import React,{useState}from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {useSelector} from 'react-redux'
import "./payment.scss"
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
import { payment } from '../../reduxToolkit/apiRequest';
import axios from "axios";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: #ffffff;
`;
const Payment = () => {
    window.scrollTo(0,0)
    let [loading, setLoading] = useState(false);
    const [success, setSuccess]  = useState(false)
    const api = useSelector(state => state.auth.API)
    const user = useSelector(state => state?.auth?.login?.currentUser)
    
    const params = useParams()
    
    let item = api.ALL.filter(x => x.params == params.id)
    const submitHandle = (e) => {
        e.preventDefault();
        setLoading(true)
        setTimeout(()=>{
        setLoading(false)
        setSuccess(true)
        },3000)
    }
    const navigate = useNavigate()
    const [items,setItems] = useState({})
   
    const getData = async () => {
      const x = await axios
        .post("http://localhost:8080/WEB/Vietfast/BE/index.php", {
          action: "getItem",
          email: user.email
        })
        .then((res) => {
          return res.data;
        });
      return x ;
    };
    useEffect(() => {
        effect
        
    }, []);
    const promise= getData();
    promise.then((res)=>{
        console.log(123)
      setItems({
          item:res[0].item,
          total:res[0].total
      })
   
    })
    const paymentHandle = () =>{
        
        payment({
            action: "payment",
            email: user.email,
            item: items.item + params.id+',',
            total:Number(items.total)+Number(item.price.split(' ')[0].replaceAll('.',''))
          });
    }
  return <form className='payment' onSubmit={submitHandle}>
      {loading&&<div className="overlay__loading">
           <DotLoader color={'#ffffff'} loading={loading} css={override} size={150} />
      </div>}
      {success && <div className="success">
          <div className="wrapper">
              <div className="text">
              <div className="content">
            <box-icon name='chevron-down-circle' type='solid' color='#2bbb34' size='lg'></box-icon>
          </div>
          <p>?????t h??ng th??nh c??ng. Ch??c b???n mua s???m vui v???</p>
          </div>
          <div className="home">
              <button type='button' className='btn btn__home' onClick={()=>navigate('/')}>V??? trang ch???</button>
          </div>
          </div>
      </div>}
      <div className="payment__customer">
            <div className="user__info">
                <div className="label">TH??NG TIN KH??CH H??NG</div>
                <span>Th??ng tin kh??ch h??ng s??? ???????c ????a v??o th???a thu???n h???p ?????ng. Qu?? kh??ch vui l??ng nh???p ch??nh x??c c??c n???i dung d?????i ????y.</span>
                <div className="input">
                    <div className="input__field">
                        <label htmlFor="name">H??? V?? T??N</label>
                        <input required type="text" id="name" placeholder='Nh???p h??? v?? t??n'/>
                    </div>
                    <div className="input__field">
                        <label htmlFor="phone">S??? ??I???N THO???I</label>
                        <input required type="text" id="phone" placeholder='Nh???p s??? ??i???n tho???i'/>
                    </div>
                    <div className="input__field">
                        <label htmlFor="id">CMND/CCCD</label>
                        <input required type="text" id="id" placeholder='Nh???p CMND/CCCD'/>
                    </div>
                    <div className="input__field">
                        <label htmlFor="email">Email</label>
                        <input required type="email" id="email" placeholder='Nh???p Email '/>
                    </div>

                </div>
            </div>
            <div className="voucher">
                <div className="label">M?? ??u ????i</div>
                <div className="input">
                    <input type="text" placeholder='Nh???p m?? E-voucher' />
                    <button type='button' className='btn btn__voucher'>??P D???NG</button>
                </div>
                <p>
CH????NG TR??NH <span>TH??? XANH CH??O NG??Y M???I</span> <a href="#">Xem ch????ng tr??nh chi ti???t</a></p>
            </div>
            <div className="thanhtoan">
               <div className="label">THANH TO??N</div>
                <span>????? ho??n th??nh ????n ?????t h??ng. Qu?? kh??ch vui l??ng thanh to??n {item[0].price} cho VinFast b???ng c??ch l???a ch???n m???t trong c??c ph????ng th???c thanh to??n sau:</span>
                <div className="option">
                    <input type="radio" id='tienmat' checked/>
                    <label htmlFor="tienmat">Thanh to??n b???ng ti???n m???t khi nh???n xe</label>
                </div>
            </div>
      </div>
      <div className="payment__card">
            <div className="image">
                <img src={item[0].detail.img.main} alt="" />
            </div>
            <div className="name">{item[0].name.split(' ')[0]}</div>
            <div className="price">
                <span>Gi?? xe</span>
                <p>{item[0].price}</p>
            </div>
            <div className="total_price">
                <span>Gi?? tr??? ????n h??ng</span>
                <p style={{fontWeight:'bold'}}>{item[0].price}</p>
            </div>
            <div className="payment__btn">
                <button type='submit' className={`btn btn__payment`} onClick={paymentHandle}>Thanh to??n</button>
            </div>
      </div>
  </form>;
};

export default Payment;
