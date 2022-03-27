import React,{useState} from 'react'
import { DataGrid } from "@mui/x-data-grid";
import './customer.scss'
import { Routes, Route } from 'react-router-dom';
import UserEdit from './UserEdit';
const Customer = (props) => {
  use
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
          <Route path='/' element={<CustomerList /> } />
          <Route path='/user/:id' element={<UserEdit user={props.user} renderRow={props.renderRow} />}/>
      </Routes>
  );
}





export default Customer