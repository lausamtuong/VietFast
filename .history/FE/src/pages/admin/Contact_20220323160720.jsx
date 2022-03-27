import React from "react";
import "./customer.scss";
import { useEffect } from "react";
import axios from "axios";
import { getContact } from "../../reduxToolkit/apiRequest";
const Contact = () => {
  const [render, setRender] = React.useState([]);
  getContact({ action: "getContact" }).then((res) => setRender(res));
  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Họ Và Tên</th>
          <th>Email</th>
          <th>Số điện thoại</th>
          <th>Vấn đề</th>
          <th>Nội dung chi tiết</th>
        </tr>
        {render.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.type}</td>
            <td>{item.detail}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Contact;
