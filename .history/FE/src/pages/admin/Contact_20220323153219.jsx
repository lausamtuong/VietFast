import React from 'react'
import { DataGrid } from "@mui/x-data-grid";
import './customer.scss'
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
const Contact = (props) => {
  useEffect(()=>props.renderRow(),[])

  return (
      <Routes>
          <Route path='/' element={<CustomerList /> } />
      </Routes>
  );
}

export default Contact
