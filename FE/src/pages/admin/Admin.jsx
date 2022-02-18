import { Avatar } from "@nextui-org/react";
import React,{useState} from "react";
import { Routes, Route, Link } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
import Blank from "./Blank";
import Customer from "./Customer";
import Dashboard from "./Dashboard";
import UserEdit from "./UserEdit";
import avt from '../../assets/images/avt.jpg'
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Admin = () => {
  const [user, setUser] = useState(null);
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "username",
      headerName: "Username",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="userItem">
            <Avatar src={avt} />
            <span className="username">{params.row.username}</span>
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 250 },
    {
      field: "status",
      headerName: "Status",
      type: "string",
      width: 150,
    },
    {
      field: "transactions",
      headerName: "Transactions",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 200,
    },
    ,
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={`./user/${params.row.id}`}>
              <button
                className="userListEdit"
                onClick={()=> 
                  setUser(params.row)}
              >
                Edit
              </button>
            </Link>

            <DeleteOutlineIcon className="userListDelete" />
          </>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      username: "Snow",
      email: "lalatuong@gmail.com",
      status: "active",
      transactions: "$122.00",
    },
    {
      id: 2,
      username: "Sam Tuong",
      email: "lalatuong@gmail.com",
      status: "active",
      transactions: "$122.00",
    },
    {
      id: 3,
      username: "Lam Tuong",
      email: "lalatuong@gmail.com",
      status: "active",
      transactions: "$122.00",
    },
    {
      id: 4,
      username: "Snow",
      email: "lalatuong@gmail.com",
      status: "active",
      transactions: "$122.00",
    },
    {
      id: 5,
      username: "Trung Kien",
      email: "lalatuong@gmail.com",
      status: "active",
      transactions: "$122.00",
    },
    {
      id: 6,
      username: "Hoang",
      email: "lalatuong@gmail.com",
      status: "active",
      transactions: "$122.00",
    },
    {
      id: 7,
      username: "Phu",
      email: "lalatuong@gmail.com",
      status: "active",
      transactions: "$122.00",
    },
    {
      id: 8,
      username: "Trong",
      email: "lalatuong@gmail.com",
      status: "active",
      transactions: "$122.00",
    },
  ];
  
  return (
    <Routes>
      <Route path="/*" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="orders" element={<Blank />} />
        <Route path="products" element={<Blank />} />
        <Route path="customers/*" element={<Customer columns={columns} rows = {rows} user={user}/>} />
        <Route path="settings" element={<Blank />} />
        <Route path="stats" element={<Blank />} />
      </Route>
    </Routes>
  );
};

export default Admin;
