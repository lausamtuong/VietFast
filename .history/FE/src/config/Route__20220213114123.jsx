import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import News from '../pages/news/News';
import Payment from '../pages/payment/Payment';
import Product from '../pages/product/Product';
import Register from '../pages/Register/Register';
import Contact from '../pages/Contact/Contact';
import Detail from './detail/Detail';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Route_ = (props) => {
  return <div>
    <Header />
      <Routes>
          <Route path='/product/detail/:id' element={<Detail />}/>
          <Route path='/product/payment/:id' element={<Payment />}/>
          <Route path='/product' element={<Product />}/>
          <Route path='/news' element={<News />}/>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/" element={<Home width={props.width} />}></Route>
      </Routes>
      <Footer />
  </div>;
};

export default Route_;
