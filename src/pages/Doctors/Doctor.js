import React from 'react';
import { Link } from 'react-router-dom';

const Doctor = ({doctor}) => {
    const {name,img,desc,id,job} = doctor;
    return (
        <div className='col-lg-4 col-md-6 col-sm-12'>
            <div>
                <div className="card" style={{"width": "18rem"}}>
                    <img src={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h5>{job}</h5>
                        <p className="card-text">${desc}</p>
                        <Link to={`/booking/${id}`}><button className='btn btn-success'>Contact :{name}</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;