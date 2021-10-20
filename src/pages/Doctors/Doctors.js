import React, { useEffect, useState } from 'react';
import Doctor from './Doctor';
import './Doctors.css'

const Doctors = () => {
     const [doctors,setDoctors] = useState([]);

     useEffect( ()=>{
         fetch('doctor.json')
         .then(res =>res.json())
         .then(data => setDoctors(data))
     },[])
    return (
        <div>
            <h6>MEEY OUR EXPERIANS DOCTORS</h6>
            <h1>WE ARE EXPART IN OUR FIELD</h1>
            <hr />
            <div className="doctor-container">
           {
               doctors.map(doctor => <Doctor
               key={doctor.id}
               doctor={doctor}
               ></Doctor> )
           }
        </div>
        </div>
        
    );
};

export default Doctors;