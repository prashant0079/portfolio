import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault();

        emailjs.sendForm('service_qsmyvwi', 'template_pmev0eu', form.current, 'dinORwRkrOz5LcHsH')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully'
                })

            }, (error) => {
                console.log(error.text);
            }
            );
        e.target.reset()






    };


    return (
        <section id='contact'>
            <div className='text_center1'>
                <h5>Get In Touch</h5>
            </div>
            <div className='text_center'>
                <h2>Contact Me</h2>
            </div>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>nonchalantprashant95@gmail.com</h5>
                        <a href='mailto:nonchalantprashant95@gmail.com' target='_blank'>Send a message</a>
                    </article>
                    <article className="contact__option">
                        <FaWhatsapp className='contact__option-icon' />
                        <h4>WhatsApp</h4>
                        <a href='https://api.whatsapp.com/send?phone=919953116938' target='_blank'>Send a message</a>
                    </article>
                </div>
                {/*End Of Contact Options*/}
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your Full Name' required />
                    <input type='email' name='email' placeholder='Enter Your Email' required />
                    <textarea name='message' rows='7' placeholder='Your Message' required />
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact