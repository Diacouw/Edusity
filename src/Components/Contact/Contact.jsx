import React from 'react'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrpw from '../../assets/white-arrow.png'
import './Contact.css'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "c134e41a-138c-4838-b600-84fd1d752461");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };


    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>send us a message <img src={msg_icon} alt="" /></h3>
                <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                <ul>
                    <li> <img src={mail_icon} alt="" /> Diacouw@gmail.com</li>
                    <li> <img src={phone_icon} alt="" /> +98-935-7696-321</li>
                    <li> <img src={location_icon} alt="" /> Tehran Mantaghe 1 Zaferanie Pelake 22 </li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit} >
                    <label >your name</label>
                    <input type="text" name='name' placeholder='Enter Your Name' required />
                    <label> Phone Number</label>
                    <input type="tel" name='phone' placeholder='09*********' required />
                    <label> write your messages here</label>
                    <textarea name="message" rows='6' placeholder='enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn'>submit now <img src={white_arrpw} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact