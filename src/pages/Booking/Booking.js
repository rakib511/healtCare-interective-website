// import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
   
    const {serviceId} = useParams();
    // const [information,setInformation] = useState([]);
    // const [singleInformation,setsingleInformation] = useState({});
    

     
    // useEffect( ()=>{
    //     fetch('/services.json')
    //     .then(res => res.json())
    //     .then(data => setInformation(data))

    // },[])

      
    // useEffect(()=>{
    //     const foundInformation = information.find(information => information.id === serviceId)
    //     setsingleInformation(foundInformation);
    // },[information])
    
    
   

    return (
        <div>
            <h2>this is booking:{serviceId} </h2>
            

        </div>
    );
};

export default Booking;