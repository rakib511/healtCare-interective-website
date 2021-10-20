import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Booking.css'

const Booking = () => {
   
    const {serviceId} = useParams();
    const serviceid = parseInt(serviceId);

    const [information,setInformation] = useState([]);
    const [singleInformation,setSingleInformation] = useState({});

    
   
    useEffect( ()=>{
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setInformation(data))
        // console.log(information);
    }, []);

    useEffect(()=>{
        const getInfo = information.find((elemtent) => elemtent.id === serviceid);
        console.log(getInfo);
        setSingleInformation(getInfo);
    },[information])
   

    return (
        <div className="item-center my-5">

            <div className="card" style={{"width": "18rem"}}>
                <img src={singleInformation?.img} class="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4>{singleInformation?.name}</h4>
                    <p className="card-text">{singleInformation?.description}</p>
                </div>
            </div>
 
        </div>
    );
};

export default Booking;