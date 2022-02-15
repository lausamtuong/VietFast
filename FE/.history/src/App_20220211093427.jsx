import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import React from "react";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import  { useEffect} from "react";
function App() {
  const [width,setWidth] = useState(window.innerWidth<660?1:window.innerWidth<990?2:3)
  useEffect(() => {
    setWidth(window.innerWidth<660?1:window.innerWidth<990?2:3) 
   
  }, [window.innerWidth]);
  return (
    <Router>
    <Header/>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/" element={<Home useEffect={useEffect} />}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
