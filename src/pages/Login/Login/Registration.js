import React from 'react';

const Registration = () => {
    return (
        <div>
            <form>
                <h3>Please Registar</h3>
                <label htmlFor='email'>Email:</label>
                <input type="text" name="text" /><br />

                <label htmlFor='password'> Password</label>
                <input type="password" name="password" id="" /><br /><br />
                <input type="submit" value="registar" />
            </form>
            <button className="btn btn-success">Google sign In</button>
        </div>
    );
};

export default Registration;