import React, { useState } from 'react';
import './DonationPage.css'; 

function DonationPage() {
  const [amount, setAmount] = useState('');

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

      // Redirect to Stripe Checkout
      window.location.href = session.url;
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="donation-container">
      <h1>What is the amount of your Donation?</h1>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)} // Update state on change
        placeholder="Enter amount"
      />
      <button onClick={handleSubmit}>Donate</button> {/* Attach handleSubmit */}
    </div>
  );
}

export default DonationPage;
