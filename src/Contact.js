import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <p>Email: info@maheebeauty.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 Beauty St, Glamour City</p>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <label>
                    Message:
                    <textarea name="message"></textarea>
                </label>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Contact;
