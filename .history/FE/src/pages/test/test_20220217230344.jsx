import React, { useState } from "react";
import { payment } from "../../reduxToolkit/apiRequest";
import axios from "axios";
const Test = () => {
    const [items,setItems] = useState()
  const getData = async () => {
    const x = await axios
      .post("http://localhost:8080/WEB/BE/index.php", {
        action: "getItem",
        email: "admin123asd@gmail.com",
      })
      .then((res) => {
        return res.data;
      });
    return x ;
  };
  const promise= getData()
  promise.then((res)=>{
    console.log(res)
    setItems(res[0].item)
  })

let x = items[0].item + "tuong,";
console.log(x)

  const handle = () => {
    payment({
      action: "payment",
      email: "admin123asd@gmail.com",
      item: items[0] + "dsadasdsa",
    });
  };
  return (
    <div style={{ margin: "200px" }}>
      <button type="text" onClick={handle}>
        thanh toan
      </button>
    </div>
  );
};

export default Test;
