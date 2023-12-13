import './membership.css'
// import Button from 'react-bootstrap/Button';




function Membership(){
  const handleCheckout = async (membershipType) => {
    // Replace '/create-checkout-session' with the correct URL of your backend endpoint
    const response = await fetch('http://localhost:3000/create-checkout-session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ membershipType }),
    });

    const session = await response.json();

    // Redirect to the Stripe Checkout page
    if (session.url) {
        window.location.href = session.url;
    } else {
        // Handle error here (e.g., display an error message)
        console.error('Failed to create checkout session');
    }
};
    return(
        <div className="app-container">  
        <div className="membership">
        
        <h1> Memebership </h1>
        <h1> Want to become part of LAESA-SHPE's Familia?</h1>
        <h6> Becoming a member of this organizations open the doors to many opportunities you haven't experince.</h6>

        
        <div className='steps'>
            <ul>Step One</ul>
                <li>Follow us on our social media</li>
            <hr></hr>
            <ul> Step Two</ul>
                <li> Our membership fee goes towards events like General Body Meetings, food , and resources for the club room which our members use. You can add your product to the cart and pay with your credit card.</li>
                <li>Early Birds: $10 (Before GBM 1) 
                    <button onClick={() => handleCheckout('EarlyBirds')}>Checkout</button>
                </li>
                <li>Regular Amount: $15 
                    <button onClick={() => handleCheckout('Regular')}>Checkout</button>
                </li>
                <li> Insert the vemon and other payment method in ormation and pictures</li>
          <hr></hr>
            <ul> Step Three</ul>
            {/* <Button variant="primary" size="lg"> */}
          Click To Fill Out The Form
        {/* </Button>  {' '} */}
          
            <li> Fill out the following form above so we can include you in our mailing list and be updated of any on-going events.</li>
            <hr></hr>
            <ul>Step Four</ul>
            <li> One of our Eboard members is going to reach out to you so can join our slack channel. We are excited to have you guys!</li>
        </div>
        </div>
      </div>
    )
}

export default Membership;