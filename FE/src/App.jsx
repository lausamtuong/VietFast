import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import  { useState} from "react";
import Route_ from "./config/Route_";
import Contact from "./pages/Contact/Contact";
function App() {
  const [width,setWidth] = useState(window.innerWidth<660?1:window.innerWidth<990?2:3)
  window.addEventListener("resize", ()=>{
    setWidth(window.innerWidth<660?1:window.innerWidth<990?2:3)
  } );

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
