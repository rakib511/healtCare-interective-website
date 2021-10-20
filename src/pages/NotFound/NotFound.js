import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import logo from '../../images/404.png'

const NotFound = () => {
    return (
        <div>
            <img className='w-50' src={logo} alt="" /><br />
            <Link to='/'><button>Go Back</button></Link>
        </div>
    );
};

export default NotFound;