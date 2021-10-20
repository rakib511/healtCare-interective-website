import React from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirct_uri = location.state?.from || '/home';

    const handleGoogleLogin = () =>{
       signInUsingGoogle()
       .then(result => {
            history.push(redirct_uri)
       })
    }

    return (
        <div className="my-5">
            <h3>Please Log in</h3>
            <form>
                name: <input type="text" placeholder="your name"/><br /><br />
                pass: <input type="password" placeholder="your password" /><br /><br />
                <p>New user?<Link to='/registar'>Create account</Link> </p>
            </form>
            <button onClick={handleGoogleLogin} className="btn btn-success">Google sign In</button>
        </div>
    );
};

export default Login;