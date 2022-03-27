import { Avatar, Button, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import DashboardWrapper, {
  DashboardWrapperRight,
} from "../../components/dashboard-wrapper/DashboardWrapper";
import "./useredit.scss";
import avt from "../../images/avt_default.png";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HomeIcon from "@mui/icons-material/Home";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { updateUser } from "../../reduxToolkit/apiRequest";
import { useDispatch } from "react-redux";
const UserEdit = (props) => {
 
  return (
    <Routes>
      <Route path="/" element={<UserEditDetail user={props.user} />} />
    </Routes>
  );
};

const UserEditDetail = ({ user }) => {
  const dispatch = useDispatch()
  const [data, setData] = useState({
    name: user?.username,
    email: user?.email,
    phone: user?.phone,
    address: user?.address,
    fullname: user?.fullname,
    action: "getUserUpdate",
    email_origin: user?.email,
  });
  const sendData = () => {
  
    updateUser(data, dispatch);
    useNavig
  };
  const [selectedImage, setSelectedImage] = useState();
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };
  const removeSelectedImage = () => {
    setSelectedImage();
  };
  return (
    <DashboardWrapper>
      {/* <DashboardWrapperRight> */}
      <div className="userEdit__header">
        <div className="title mb">Edit User</div>
        <Button size="lg" shadow auto onClick={sendData}>
          Save
        </Button>
      </div>
      <div className="userEdit__container">
        <div className="userShow">
          <div className="userShowTitle">
            <Avatar src={user?.image==''?avt:user?.image} zoomed bordered size="xl" color="success" />
            <div className="userShowTopTitle">
              <p className="name">{user?.username}</p>
              <span className="email">{user?.email}</span>
            </div>
          </div>
          <div className="userShowLabel">Account Detail</div>
          <div className="userShowIcon">
            <DriveFileRenameOutlineIcon />
            <span>{user?.fullname}</span>
          </div>
          <div className="userShowIcon">
            <LocalPhoneIcon />
            <span>{user?.phone}</span>
          </div>
          <div className="userShowIcon">
            <HomeIcon />
            <span>{user?.address}</span>
          </div>
        </div>
        <div className="userUpdate">
          <div className="userUpdateTitle">Edit</div>
          <form action="submit" className="userUpdateForm">
            <div className="textUpdate">
              <Input
                size="md"
                underlined
                labelPlaceholder="Fullname"
                color="success"
                onChange={(e) => {
                  
                  setData((state) => {
                    return {
                      ...state,
                      fullname: e.target.value,
                    };
                  });
                }}
              />
              <Input
                size="md"
                underlined
                labelPlaceholder="Phone Number"
                color="success"
                onChange={(e) => {
                  
                  setData((state) => {
                    return {
                      ...state,
                      phone: e.target.value,
                    };
                  });
                }}
              />
              <Input
                size="md"
                underlined
                labelPlaceholder="Email"
                color="success"
                onChange={(e) => {
                  
                  setData((state) => {
                    return {
                      ...state,
                      name: e.target.value,
                    };
                  });
                }}
              />
              <Input
                size="md"
                underlined
                labelPlaceholder="Address"
                color="success"
                onChange={(e) => {
                  
                  setData((state) => {
                    return {
                      ...state,
                      address: e.target.value,
                    };
                  });
                }}
              />
            </div>
            <div className="imgUpdate">
              {selectedImage && (
                <div className="imageChose">
                  <img src={URL.createObjectURL(selectedImage)} alt="Thumb" />
                  <div className="removeImage" onClick={removeSelectedImage}>
                    <Button shadow auto color="error">
                      Remove this image
                    </Button>
                  </div>
                </div>
              )}
              {!selectedImage && (
                <label htmlFor="imageFile" className="inputImage">
                  {/* <Button type="button"> */}
                    <AddPhotoAlternateIcon style={{color:'#ffffff'}}/>
                    <span>Import Your Image</span>
                    <input
                      type="file"
                      accept="image/*"
                      id="imageFile"
                      onChange={imageChange}
                      hidden
                    />
                  {/* </Button> */}
                </label>
              )}
            </div>
          </form>
        </div>
      </div>
      {/* </DashboardWrapperRight> */}
    </DashboardWrapper>
  );
};

export default UserEdit;
