import Logotitle from '../../assets/images/logo-s.png';
import {Link} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import './index.scss';
import AnimatedLetters from "../AnimatedLetters";
import '../../componenets/AnimatedLetters/index.scss';




const Home = () =>{
    const [letterClass,setLetterClass] = useState('text-animate');
    const nameArray= ['a','i','e','s','h']
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r'];


return (
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



        </div>

    </div>
);

}

export default  Home;