import Login from "./pages/Login/Login";
import axios from 'axios';

import Register from "./pages/Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import React from "react";
import  { useState,useEffect} from "react";
import Route_ from "./config/Route_";
import Contact from "./pages/Contact/Contact";
function App() {
  const [width,setWidth] = useState(window.innerWidth<660?1:window.innerWidth<990?2:3)
  window.addEventListener("resize", ()=>{
    setWidth(window.innerWidth<660?1:window.innerWidth<990?2:3)
  } );
  const loadData = async() =>{
    axios
    .post("http://localhost:8080/WEB/post.php", {obs:123})
    .then(function(body) {
      console.log(body);
    })
    .catch(function(error) {
      console.log(error);
    });
  }
  useEffect(()=>loadData())
  return (
    <Router>
      <Routes>
        <Route path='*' element ={<Route_ width={width}/>} />
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
