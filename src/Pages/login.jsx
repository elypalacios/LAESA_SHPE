import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import '../Pages/login.css';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import '../utils/firebase-config.js';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(''); // State for storing login error messages
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setLoginError(''); // Clear any previous errors
        const auth = getAuth();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("User signed in: ", userCredential.user);
            navigate('/User')
           
        } catch (error) {
            setLoginError(error.message); // Set the error message
            console.error("Error signing in with password and email", error);

        }
    };

    return (
        <div> 
          <div className='loginpage'> 
            <form onSubmit={handleSubmit} className='form-control'>
                LOGIN 
                <input 
                    className='form-control'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ display: 'block', width: '300px', height: '40px', fontSize: '16px' }} 
                />
                <input
                    className='form-control'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ display: 'block', width: '300px', height: '40px', fontSize: '16px' }} 
                />
                <button 
                    className='form-control'
                    style={{ display: 'block', width: '300px', height: '40px' }}
                    type="submit"
                >
                    Login
                </button>
               
              
                <p>
            Don't have an account? <Link to="/SignUp">Sign Up</Link>
            </p>
            {loginError && <div style={{ color: 'red', marginTop: '10px' }}>{loginError}</div>}
            </form>
            
           
          </div>
        </div>
    );
}

export default Login;
