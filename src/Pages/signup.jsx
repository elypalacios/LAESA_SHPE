import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import '../utils/firebase-config.js';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const auth = getAuth();
    
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("User created: ", userCredential.user);
            navigate('/User');
        } catch (error) {
            console.error("Error creating user with email and password", error);
        }
    };

    
    return (
        <div> 
          <div className='loginpage'> 
            <form onSubmit={handleSubmit} className='form-control'>
                SIGN UP 
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
                    Sign Up
                </button>
               
            </form>
            
           
          </div>
        </div>
    );
}

export default SignUp;
