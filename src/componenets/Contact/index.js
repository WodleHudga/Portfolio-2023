import React, {useEffect, useRef, useState} from 'react';
import './index.scss';
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import emailjs from '@emailjs/browser';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

function Contact() {
    const [letterClass,setLetterClass] = useState('text-animate');
    const refForm = useRef();



    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        // Clear the timeout when the component unmounts
        return () => clearTimeout(timeoutId);
    }, []);

    const sendEmail =(e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_11x04rk',
            'template_hlnngs9',
           refForm.current,
            'r9tXK87_3pEEQP8C4'


            ).then(
            () => {
                alert('Message successfully send!')
                window.location.reload(false);

            },
            () =>{
                alert('Failed to send the Message, Please try again')

            }
        )

    }
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                        strArray={['C','o','n','t','a','c','t',' ','M','e']}
                        idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in freelance opportunities - especially on ambitious
                        or large projects. However, if you have any other requests or
                        questions, don't hesitate to contact me using below form either.
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name='from_name' placeholder="Name" required />
                                </li>
                                <li className="half">
                                    <input type="email" name='from_name' placeholder="Email" required />
                                </li>
                                <li >
                                    <input type="text" name='from_name' placeholder="Subject" required />
                                </li>
                                <li >
                                    <textarea placeholder='message' name='message' required>

                                    </textarea>
                                </li>
                                <li >
                                    <input className='flat-button' type="submit" name='submit' placeholder="Submit" value='SEND' required />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Saiesh Kamble
                    <br />
                    Belgavi,
                    <br />
                    Shahapur Belgavi, Karnataka
                    <br />
                    India
                    <br />
                    <span>freelancersaiesh@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[15.8497, 74.4977]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[15.8497, 74.4977]}>
                            <Popup>Saiesh lives here, come over for a cup of coffee :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>

            <Loader type="square-spin"  active/>
        </>

    );
}

export default Contact;