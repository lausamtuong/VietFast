import React from 'react'
import { DataGrid } from "@mui/x-data-grid";
import './customer.scss'
import { Routes, Route } from 'react-router-dom';
import UserEdit from './UserEdit';
import { useEffect } from 'react';
const Blank = (props) => {
  useEffect(()=>props.renderRow(),[])
  const CustomerList = () => { 
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
          <Route path='/' element={<Blank /> } />
      </Routes>
  );
}

export default Blank
