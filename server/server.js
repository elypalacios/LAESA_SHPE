const express = require('express');
const stripe = require('stripe')('sk_test_51OMv45D9xJDcllSTDPUIyUDJZlWSCqqJ8kIqplC7kkeWrq9LyllOs5cNnZ5nb4j6ifua5IJmVs7jtzpdmd6aeJFP00FSclb1gQ'); // Replace with your Stripe secret key
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS for your frontend
app.use(express.json()); // For parsing application/json

app.post('/create-checkout-session', async (req, res) => {
    const { membershipType } = req.body;
    const prices = { 'EarlyBirds': 1000, 'Regular': 1500 }; // Prices in cents

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: `Membership - ${membershipType}`,
                    },
                    unit_amount: prices[membershipType],
                },
                quantity: 1,
            }],
            mode: 'payment',
            success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.origin}/cancel`,
        });

        res.json({ url: session.url });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ... existing imports and setup ...

app.post('/create-donation-session', async (req, res) => {
    const { amount } = req.body; // amount should be in cents

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Donation',
                    },
                    unit_amount: amount,
                },
                quantity: 1,
            }],
            mode: 'payment',
            success_url: `${req.headers.origin}/donation-success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.origin}/donation-cancel`,
        });

        res.json({ url: session.url });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
