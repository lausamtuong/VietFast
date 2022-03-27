import React from "react";
import "./customer.scss";
import { useEffect } from "react";
import axios from "axios";
import { getContact } from "../../reduxToolkit/apiRequest";
const Contact = () => {
  const [render, setRender] = React.useState([]);
  getContact({ action: "getContact" }).then((res)=>setRender(res))
  return(
    <div>
   <table>
      <tr>
        <th>Họ Và Tên</th>
        <th>Email</th>
        <th>Số điện thoại</th>
        <th>Vấn đề</th>
        <th>Nội dung chi tiết</th>
      </tr>
      {render.map((item,index)=> (
        <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
      </tr>
      )}
    
      <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
      </tr>
    </table>
  </div>
    )
};
const CardContact = () => {
  return(
  <div className="card-contact">
    <table>
      <tr>
        <th>Họ Và Tên</th>
        <th>Email</th>
        <th>Số điện thoại</th>
        <th>Vấn đề</th>
        <th>Nội dung chi tiết</th>
      </tr>
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
      </tr>
      <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
      </tr>
    </table>
  </div>
  )
};
export default Contact;
