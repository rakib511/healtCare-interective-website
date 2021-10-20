import React, { useEffect, useState } from 'react';
import Service from './Service';
import'./Services.css'

const Services = () => {
    const [services,setSetvices] = useState([]);
    useEffect( ()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setSetvices(data))
    },[])
    return (
        <div>
            <h2>Our Services</h2><hr />
            <div className="services-container row mx-5 my-5">
            {
                services.map( service => <Service
                key={service.id}
                service={service}
                ></Service> )
            }

        </div>
        </div>
    );
};

export default Services;