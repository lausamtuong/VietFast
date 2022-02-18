import React from 'react';
import { payment } from '../../reduxToolkit/apiRequest';
import axios from 'axios'
const Test = async() => {
   const items= await axios.post("http://localhost:8080/WEB/BE/index.php",{action:'getItem',email:'admin123asd@gmail.com'}).then(res=>{
        return res.data;
    })
    console.log(items)
    const handle=()=>{
        payment({
            action:'payment',
            email:"admin123asd@gmail.com",
            item:items[0]+'dsadasd'
        })
    }
    return (
        <div style={{margin:'200px'}}>
            <button type='text' onClick={handle}>thanh toan</button>
        </div>
    );
}

export default Test;
