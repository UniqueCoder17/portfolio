import React from 'react';
import Banner from './Banner';
import Footer from '../Footer/Footer';
import { IoIosMail } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import Contact from './Contact';
import Skills from './Skills';


const Home = () => {
    return (
        <div className='bg-gray-900'>
            <Banner></Banner>
            <Skills/>
            <Contact/>
        </div>
    );
};

export default Home;