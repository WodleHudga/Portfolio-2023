import Logotitle from '../../assets/images/logo-s.png';
import {Link} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import './index.scss';
import AnimatedLetters from "../AnimatedLetters";
import '../../componenets/AnimatedLetters/index.scss';
import Logo from "./Logo";
import Loader from "react-loaders";




const Home = () =>{
    const [letterClass,setLetterClass] = useState('text-animate');
    const nameArray= ['a','i','e','s','h']
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r'];

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        // Clear the timeout when the component unmounts
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
    <div className="container home-page">
        <div className="text-zone">
            <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I'</span>
                <span className={`${letterClass} _14`}>m</span>


                <img src={Logotitle} alt="developer" />
            <AnimatedLetters letterClass={letterClass}
                             strArray={nameArray}
                             idx={15}
            />
                <br/>
                <AnimatedLetters letterClass={letterClass}
                                 strArray={jobArray}
                                 idx={22}
                />

            </h1>
            <h2>Frontend Developer</h2>
            <Link to='/contact' className='flat-button'>Contact Me</Link>

            <Logo />


        </div>


    </div>
            <Loader type="square-spin" />
        </>
);

}

export default  Home;