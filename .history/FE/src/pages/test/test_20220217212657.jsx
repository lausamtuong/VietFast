import React from 'react';
import { payment } from '../../reduxToolkit/apiRequest';

const Test = () => {
    const handle=()=>{
        payment({
            action:'payment',
            data:[{
                name:'tuong',
                image:''
            },
            {
                name:'chuot',
                image:'d'
            }]
        })
    }
    return (
        <div style={{margin:'200px'}}>
            <button type='text' onClick={handle}>thanh toan</button>
        </div>
    );
}

export default Test;
