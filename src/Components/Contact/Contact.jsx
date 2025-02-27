import React from 'react'
import './Contact.css'
import theme1 from '../../assets/—Pngtree—infinity logo and symbol template_3626130.png'
import  mail from '../../assets/gmail.png'
import location from '../../assets/gps.png'
import call from '../../assets/telephone.png'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "fe6348e1-d356-4537-a346-75732d424439");

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
      alert(res.message);
    }
  };




  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme1} alt=""/>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
            doloremque ut, commodi numquam labore hic impedit atque velit aspernatur
            nesciunt!</p>
            <div className="contact-details">
                <div className="contact-detail">
                <img src={mail} alt="" /> <p>alfaravi17@gmail.com</p>

                </div>
                <div className="contact-detail">
                    <img src={call} alt="" /> <p>01719-269328</p>
                    
                </div>
                <div className="contact-detail"> 
                    <img src={location} alt="" /> <p>Dhaka, Bangladesh</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name="email"/>
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
            <button type='submit' className='contact-submit'>Submit now</button>
        </form>
      </div>

    </div>
  )
}

export default Contact
