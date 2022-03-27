import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./customer.scss";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
const Contact = (props) => {
  return(
    <div>
    <CardContact />
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
