// import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {serviceId} = useParams();
    // const [info,setInfo] = useState([]);

    // useEffect( ()=>{
    //     fetch('services.json')
    //     .then(res => res.json())
    //     .then(data =>console.log(data))
    // },[])
   

    return (
        <div>
            <h2>this is booking:{serviceId} </h2>

        </div>
    );
};

export default Booking;