import React,{useEffect,useState} from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../product-card/ProductCard';
import { useParams } from 'react-router-dom';
import './product-list.scss'


const ProductList = () => {
  const api = useSelector(state => state.auth.API)
  const type = useSelector(state => state.auth.type)
  const fuel = useSelector(state => state.auth.fuel)
  const [list,setList] = useState([]) 
  if (type == 'ALL') setListapi[type].map(item=>item) 
  else list = api[type]?.filter(item => item?.type == fuel)
  return <div className='product__grid'>
    {list?.map((item,i) => <ProductCard key={i} item={item} />)}
  </div>;
};




export default ProductList;
