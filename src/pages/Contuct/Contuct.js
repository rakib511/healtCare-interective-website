import React from 'react';
import './Contact.css'

const Contuct = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-5 col-sm-12">
                    <div>
                        <p>Contuct info:</p>
                        <h2>CONNECT WITH US</h2>
                    </div>
                    <div>
                        <p>information:</p>
                        <div>
                            <h6><i class="fas fa-phone-square-alt"></i><span className="ms-3">(+880182233411)</span></h6>
                            <h6>(+8802323421</h6>
                                <h6><i class="fas fa-envelope-square"></i><span className="ms-3">HomeMedical@gmail.com</span></h6>
                        </div>
                        <div className="mt-50px">
                            <h4>Connect With Us:</h4>
                            <div className="font-style">
                        <a href="*"><div className="single-item"><i class="fab fa-facebook"></i></div></a>
                        <a href="*"><div className="single-item"><i class="fab fa-twitter"></i></div></a>
                        <a href="*"><div className="single-item"><i class="fab fa-linkedin"></i></div> </a>            
                    </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-7 col-sm-12">
                    <div className="ms-0">
                        <p>Drop Us A Line:</p>
                        <h2>We’d Love To Hear From You</h2>
                    </div>
                    <hr />
                    <form className="b-2 form">
                        <fieldset>
                           
                           <span>name:</span> <input type="text" placeholder="yor name" className="me-2 w-60" />
                            <span>email:</span> <input type="email" placeholder="yor email" className="me-2 w-40"  /><br /><br />
                            <span>subject:</span><input type="text" className='w-75' /><br /><br />
                            <br />
                            <textarea name="" id="" cols="88" rows="5" className="mb-5"placeholder="details....."></textarea>
                            <button className="btn btn-success">Submit</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contuct;