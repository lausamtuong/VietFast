import { Avatar } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
import Contact from "./Blank";
import Customer from "./Customer";
import Dashboard from "./Dashboard";
import UserEdit from "./UserEdit";
import avt from "../../images/avt_default.png";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useSelector } from "react-redux";
import { deleteUsers, getRow } from "../../reduxToolkit/apiRequest";
import { AiOutlineReload } from "react-icons/ai";

const Admin = () => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const checkIsAdmin = useSelector(
    (state) => state?.auth?.login?.currentUser?.isAdmin
  );
  if (checkIsAdmin === "true") {
  } else navigate("/");
  const columns = [
    { field: "id", headerName: "ID", width: 70 },

    {
      field: "username",
      headerName: "Username",
      width: 170,
      renderCell: (params) => {
        return (
          <div className="userItem">
            <Avatar src={params.row.image == "" ? avt : params.row.image} />
            <span className="username">
              {params.row.username == "" ? "undefined" : params.row.username}
            </span>
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="userItem">
            {params.row.email == "" ? "undefined" : params.row.email}
          </div>
        );
      },
    },
    {
      field: "fullname",
      headerName: "Fullname",
      type: "string",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userItem">
            {params.row.fullname == "" ? "undefined" : params.row.fullname}
          </div>
        );
      },
    },
    {
      field: "address",
      headerName: "Address",
      type: "string",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userItem">
            {params.row.address == "" ? "undefined" : params.row.address}
          </div>
        );
      },
    },
    {
      field: "total",
      headerName: "Total",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userItem">
            {params.row.total == "" ? "0" : params.row.total+' vnđ'}
          </div>
        );
      },
    },
    ,
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: (params) => {
        console.log(params);
        return (
          <>
            <Link to={`./user/${params.row.id}`}>
              <button
                className="userListEdit"
                onClick={() => {
                  renderRow();
                  setUser(params.row);
                }}
              >
                Edit
              </button>
            </Link>

            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => {
                deleteUser(params.id);
              }}
            />
          </>
        );
      },
    },
    {
      field: "reload",
      headerName: <AiOutlineReload style={{cursor:'pointer'}} onClick={()=>{ renderRow()}}/>,
      sortable: false,
      editable: false,
      filter: false,
      width: 70,
      
    },
  ];
  const [rows, setRow] = useState([]);
  useEffect(() => {
    getRow({ action: "getClient" }).then((res) => setRow(res));
  },[] );
  const renderRow = () => {
    getRow({ action: "getClient" }).then((res) => setRow(res));
  };
  const deleteUser = (id) => {
    const data = {
      action: "deleteUser",
      id: id,
    };
    deleteUsers(data);
    getRow({ action: "getClient" }).then((res) => setRow(res));
  };

  return (
    <Routes>
      <Route path="/*" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="orders" element={<Blank />} />
        <Route path="contacts" element={<Contact />} />
        <Route
          path="customers/*"
          element={<Customer columns={columns} rows={rows} user={user} renderRow={renderRow}/>}
        />
        <Route path="settings" element={<Blank />} />
        <Route path="stats" element={<Blank />} />
      </Route>
    </Routes>
  );
};

export default Admin;
