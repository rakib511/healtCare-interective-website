import React from 'react';
import { Link } from 'react-router-dom';


const Service = ({service}) => {
    const {name,img,description,id} = service;
    return (
        <div className='col-lg-4 col-md-6 col-sm-12'>
            <div>
                <div className="card my-2" style={{"width": "18rem"}}>
                    <img src={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">${description}</p>
                        <Link to={`/booking/${id}`}><button className='btn btn-success'>Info {name}</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;