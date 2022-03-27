import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./customer.scss";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
const Contact = (props) => {
  return
  <div>
    <CardContact />
  </div>;
};
const CardContact = () => {
  return(
  <div className="card-contact">
    <div className="card-contact_name"></div>
    <div className="card-contact_phone"></div>
    <div className="card-contact_email"></div>
    <div className="card-contact_detail"></div>
    <div className="card-contact_type"></div>
    <table>
      <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
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
  </div>;
};
export default Contact;
