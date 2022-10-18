import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './SignUp.css';

const SignUp = () => {
    const [error, setError] = useState(null);

    const { createUser } = useContext(AuthContext);


    const handleFormSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password !== confirm) {
            setError('Your Password did not match');
            return;
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();

            })
            .catch(error => console.log(error));
    }
    return (
        <div>
            <div className='form-container'>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className='form-control'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder='Email' required />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder='Password' required />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="confirm">Confirm Password</label>
                        <input type="password" name="confirm" placeholder='Password' required />
                    </div>
                    <input className='btn-submit' type="submit" value="Sign Up" />
                </form>
                <p>Already have an account? <Link className='link' to="/login">Login</Link></p>
                <p className='text-error'>{error}</p>
            </div>
        </div>
    );
};

export default SignUp;