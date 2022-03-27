import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./customer.scss";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
const Contact = (props) => {
  return <div>
    <CardContact/>
  </div>;
};
const CardContact = () => {
  return;
  <div className="card-contact">
    <div className="card-contact_name"></div>
    <div className="card-contact_phone"></div>
    <div className="card-contact_email"></div>
    <div className="card-contact_detail"></div>
    <div className="card-contact_type"></div>
  </div>;
  
};
export default Contact;
