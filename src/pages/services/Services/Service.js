import React from 'react';
import { Link } from 'react-router-dom';


const Service = ({service}) => {
    const {name,img,description,id} = service;
    return (
        <div>
            <div className='my-5 mb-5' id='breakfast'>
            <div className="row row-cols-1 g-4">
                <div className="col">
                    <div className="card py-5 shadow-lg p-3 mb-5 bg-body rounded">
                        <img src={img} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">${description}</p>
                        </div>
                    <Link to={`/booking/${id}`}><button className='btn btn-success'>Info {name}</button></Link>
                    </div>
                </div>
            </div>
        </div>

        </div>
    );
};

export default Service;