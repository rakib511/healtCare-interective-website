import React from 'react';
import './Categoris.css'
import lab1 from '../../images/lab1.jpg'
import lab2 from '../../images/lab3.jpg'
import lab3 from '../../images/lab3.jpg'

const Categoris = () => {
    return (
        
        <div className=" categoris">
            <h1>Outstanding departments</h1>
            <div className="row my-5">      
                    <div className="col-md-4 col-sm-12">
                        <div className="d-flex justify-content-center align-items-center">
                        <div className="mt-5 ms-5">
                            <h3>Lab Test Department</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, facilis nemo voluptatem illum sunt nesciunt. Quae quo laboriosam iusto adipisci.</p>
                        </div>
                        </div>
                    </div>
                
                <div className="col-md-8 col-sm-12">
                    <img className="w-50" src={lab1} alt="" />
                </div>
            </div>

            
            <div className="row my-5"> 
                <div className="col-md-8 col-sm-12">
                    <img className="w-50" src={lab2} alt="" />
                </div>     
                <div className="col-md-4 col-sm-12">
                    <div className="d-flex justify-content-center align-items-center">
                    <div className="mt-5 ms-5">
                        <h3>Lab Test Department</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, facilis nemo voluptatem illum sunt nesciunt. Quae quo laboriosam iusto adipisci.</p>
                    </div>
                    </div>
                </div>
            </div>


            <div className="row my-5">      
                    <div className="col-md-4 col-sm-12 ">
                        <div className="d-flex justify-content-center align-items-center">
                        <div className="mt-5 ms-5">
                            <h3>Lab Test Department</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, facilis nemo voluptatem illum sunt nesciunt. Quae quo laboriosam iusto adipisci.</p>
                        </div>
                        </div>
                    </div>
                
                <div className="col-md-8 col-sm-12">
                    <img className="w-50" src={lab3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Categoris;