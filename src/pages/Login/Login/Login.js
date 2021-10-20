import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div className="my-5">
            <h3>Please Log in</h3>
            <form>
                name: <input type="text" placeholder="your name"/><br /><br />
                pass: <input type="password" placeholder="your password" /><br /><br />
                <p>New user?<a href="/registration">Restration</a></p>
            </form>
            <button onClick={signInUsingGoogle} className="btn btn-success">Google sign In</button>
        </div>
    );
};

export default Login;