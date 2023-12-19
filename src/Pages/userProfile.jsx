import './userProfile.css'
import { useUser } from './userContext';
import React, { useState } from 'react';
import './DonationPage.css'; 


function Profile() {

    const [amount, setAmount] = useState('');
    const {currentUser} = useUser()
    console.log(currentUser); 

    const handleSubmit = async () => {
      try {
        const response = await fetch('http://localhost:3000/create-donation-session', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ amount: amount * 100 }), // Convert to cents
        });
  
        const session = await response.json();
  
        window.location.href = session.url;
      } catch (error) {
        console.error('Error:', error);
      }}

    return(
      <div>
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

    <div className="donation-container">
      <h1>What is the amount of your donation?</h1>
      <input
        style={{ display: 'block', width: '200px', height: '40px', fontSize: '16px' }} 

        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)} // Update state on change
        placeholder="Enter amount"
      />
      <button 
      style={{ display: 'block', width: '200px', height: '40px' }}
      onClick={handleSubmit}>Donate</button> {/* Attach handleSubmit */}
        
    </div>
        </div>
    )
}

export default Profile;