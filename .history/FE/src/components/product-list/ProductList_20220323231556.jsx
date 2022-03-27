import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../product-card/ProductCard";
import { useParams } from "react-router-dom";
import "./product-list.scss";

const ProductList = () => {
  const user = useSelector((state) => state?.auth?.login?.currentUser?.isAdmin);
  const api = useSelector((state) => state.auth.API);
  const type = useSelector((state) => state.auth.type);
  const fuel = useSelector((state) => state.auth.fuel);
  let list = [];
  if (type == "ALL") list = api[type].map((item) => item);
  else list = api[type]?.filter((item) => item?.type == fuel);
  return (
    <div className="product__grid">
      {list?.map((item, i) => (
        <ProductCard key={i} item={item} user={user} more={false} />
      ))}
      {user ? <ProductCard more={false} /> : ""}
    </div>
  );
};

export default ProductList;
