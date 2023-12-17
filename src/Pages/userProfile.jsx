import React from 'react';
import './userProfile.css'
import { useUser } from './userContext';

function Profile(){

    const {currentUser} = useUser()

    return(
        <div className='User'>
            <h1 > User Profile </h1>
            {currentUser ? (
        <div>

          <p>Email: {currentUser.email} </p>

        </div>
      ) : (
        <p>Loading user data...</p>
      )}
        </div>
    )
}

export default Profile;