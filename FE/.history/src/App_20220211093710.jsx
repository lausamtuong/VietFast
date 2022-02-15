import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import React from "react";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import  { useEffect,useState} from "react";
function App() {
  const [width,setWidth] = useState(window.innerWidth<660?1:window.innerWidth<990?2:3)
  window.addEventListener("resize", ()=>{
    setWidth
  } );
  return (
    <Router>
    <Header/>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/" element={<Home width={width} />}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
