import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const notify = () => toast.success("Submitted Successfully");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", import.meta.env.VITE_Access_key);
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            notify();
          } 
        
      
      };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="Theme Pattern" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="Mail Icon" /> <p>jaharuddin269@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="Call Icon" /> <p>+918808761375</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="Location Icon" /> <p>Gorakhpur, Uttar Pradesh</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' required />
                    <label htmlFor="email">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' required />
                    <label htmlFor="message">Write your message here</label>
                    <textarea name="message" rows='8' placeholder='Enter your message' required></textarea>
                    <button className="contact-submit" type='submit'>Submit now</button>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
}

export default Contact;
