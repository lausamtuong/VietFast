import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../product-card/ProductCard";
import { useParams } from "react-router-dom";
import "./product-list.scss";

const ProductList = () => {
  const user = useSelector((state) => state?.auth?.login?.currentUser?.isAdmin);
  const api = useSelector((state) => state.auth.API);
  const type = useSelector((state) => state.auth.type);
  const fuel = useSelector((state) => state.auth.fuel);
  const [list, setList] = useState([]);
  useEffect(() => {
    if (type == "ALL") setList(() => api[type].map((item) => item));
    else setList(() => api[type]?.filter((item) => item?.type == fuel));
  }, []);
  return (
    <div className="product__grid">
      {list?.map((item, i) => (
        <ProductCard key={i} item={item} user={user != "false"} more={true} />
      ))}
      {user != "false" ? <ProductCard more={false} setList={setList()} list={list}/> : ""}
    </div>
  );
};

export default ProductList;
