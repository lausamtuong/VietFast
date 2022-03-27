import React from 'react';
import Button from '../button/Button';
import './product-card.scss'
import { useNavigate } from 'react-router-dom';
const ProductCard = ({item}) => {
  const navigate = useNavigate()
  return <div className='card'>
    <div className="card__img" style={{backgroundImage:`url(${item.src})`}}>
    </div>
    <div className="card__info">
      <div className="card__info__name">
     {item.name}
    </div>
    <div className="card__info__price">
     {item.price}
    </div>
    </div>
    <div className="detail__btn" onClick={()=>navigate(`./detail/${item.params}`)}>
      <Button label={"Xem chi tiết"} class="btn__transparent" detail={true}/>
    </div>
    
  </div>;
};

export default ProductCard;
