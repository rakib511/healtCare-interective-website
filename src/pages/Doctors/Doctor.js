import React from 'react';
import { Link } from 'react-router-dom';

const Doctor = ({doctor}) => {
    const {name,img,desc,id,job} = doctor;
    return (
        <div>
            <div className='my-5 mb-5'>
            <div className="row row-cols-1 g-4">
                <div className="col">
                    <div className="card py-5 shadow-lg p-3 mb-5 bg-body rounded mx-5">
                        <img src={img} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h2 className="card-title">{name}</h2>
                            <h5>{job}</h5>
                            <p className="card-text">${desc}</p>
                        </div>
                    <Link to={`/booking/${id}`}><button className='btn btn-success'>Contact :{name}</button></Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Doctor;