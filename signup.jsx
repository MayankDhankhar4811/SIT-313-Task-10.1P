import React, { useState } from 'react';
import './EmailBanner.css';

function EmailBanner() {
    const [email, setEmail] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setTimeout(() => {
                    setEmail('');
                }, 5000);
            } else {
                console.error('Error sending email');
            }
        } catch (error) {
            console.error('Error sending email:', error);
        }
    }

    return (
        <div className="emailbox-form">
            <h3>SIGN UP FOR OUR DAILY INSIDER</h3>
            <input
                type="email"
                className="input"
                name="email"
                placeholder="Enter Your Email"
                required="required"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button className="emailbutton" onClick={handleFormSubmit}>SUBSCRIBE</button>
        </div>
    );
}

export default EmailBanner;
