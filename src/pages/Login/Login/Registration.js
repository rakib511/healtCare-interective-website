import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Registration = () => {
    const {handleEmailSignIn, handleEmailChange} = useAuth();
    return (
        <div className='row my-5 mx-5'>
            <h3 className='text-dark'>Please registar</h3>
            <form onSubmit={handleEmailSignIn}>
                <div className="row my-2">
                    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                    <input onChange={handleEmailChange} type="email" className="form-control" id="inputEmail3"/>
                    </div>
                </div>
                <div className="row my-2">
                    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword3"/>
                    </div>
                </div>
                
                <div className="row my-2">
                    <div className="col-sm-10 offset-sm-2">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                        <label className="form-check-label" for="gridCheck1">
                        Example checkbox
                        </label>
                    </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
                </form><br /><br /><br />
            <p>allready have an account?<Link to='/login'>login</Link></p>
        </div>
    );
};

export default Registration;