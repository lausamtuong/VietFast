import React from 'react';
import { payment } from '../../reduxToolkit/apiRequest';
import axios from 'axios'
const Test = () => {
   const items= await axios.post("http://localhost:8080/WEB/BE/index.php",{action:'getItem',email:'admin123asd@gmail.com'}).then(res=>{
        return res.data;
    })
  // let x = items[0].item+'tuong,'
  // console.log(x.split(','))
    const handle=()=>{
        payment({
            action:'payment',
            email:"admin123asd@gmail.com",
            item:items[0]+'dsadasdsa',
        })
    }
    return (
        <div style={{margin:'200px'}}>
            <button type='text' onClick={handle}>thanh toan</button>
        </div>
    );
}

export default Test;
