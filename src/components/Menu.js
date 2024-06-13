// import { Nav, NavItem, NavLink } from "react-bootstrap";
// import React from 'react'
// import background from '../images/sai photo.jpeg'
// import './Menu.css'

// function Menu() {
//     return (
//         <div className="Menu">
//             <img className="saiImage" src={background}></img>
//             <br></br>
//             <br></br>
//             <a href="" className="NameT">Sai Kumar Reddy Vuyyuru</a>
//             <br></br>
//             <div className="NavBar">
//                 <div className="MenuList">
//                     <a href="/" className="Home">Home</a>
//                     <a href="/" className="About">About</a>
//                     <a href="/" className="Resume">Resume</a>
//                     <a href="/" className="Projects">Projects</a>
//                     <a href="/" className="Contact">Contact</a>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Menu


import React from 'react';
import background from '../images/sai photo.jpeg';
import './Menu.css';
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

function Menu() {
    return (
        <div className="Menu">
            <img className="saiImage" src={background} alt="Sai Kumar Reddy Vuyyuru"></img>
            <a href="" className="NameT">Sai Kumar Reddy Vuyyuru</a>
            <div className="NavBar">
                <div className="MenuList">
                    <Link to="header-app" spy={true} smooth={true} className="Header">Home</Link>
                    <Link to="about" spy={true} smooth={true} className="About">About</Link>
                    <Link to="resume" spy={true} smooth={true}  className="Resume">Resume</Link>
                    <Link to="projects" spy={true} smooth={true}  className="Projects">Projects</Link>
                    <Link to="contact" spy={true} smooth={true}  className="Contact">Contact</Link>
                </div>
            </div>
            <div className='social-media-banner'>
                <a href="https://www.linkedin.com/in/saikumarreddyvuyyuru/" className='social-icon'><FaLinkedin/></a>
                <a href="https://github.com/vuyyurusaikumarreddy" className='social-icon'><FaGithub/></a>
                <a href="https://www.instagram.com/saikumarreddyvuyyuru?igsh=d2lmMXp2eXpsODQ1" className='social-icon'><FaInstagram/></a>
                <a href="https://www.facebook.com/saikumar.reddy.391082" className='social-icon'><FaFacebook/></a>
            </div>
        </div>
    );
}

export default Menu;
