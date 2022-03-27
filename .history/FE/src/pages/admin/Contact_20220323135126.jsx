import React from 'react'
import { DataGrid } from "@mui/x-data-grid";
import './customer.scss'
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
const Contact = (props) => {
  useEffect(()=>props.renderRow(),[])
  const CustomerList = () => { 
    console.log(props)
    return (
      <div style={{ height: "80vh", width: "100%" }}>
        <DataGrid
          rows={props.rows}
          columns={props.columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick 
        />
      </div>
    );
  };
  return (
      <Routes>
          <Route path='/' element={<CustomerList /> } />
      </Routes>
  );
}

export default Contact
