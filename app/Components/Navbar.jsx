"use client";
import React, { useState } from "react";
import Link from 'next/link';

import { PiHamburgerLight } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import '../globals.css'
import '../styles/Navbar.css'
function Navbar() {
    const [isOpen, setIsOpen] = useState(true);
    const toggleOpen = () => {
        setIsOpen(!isOpen);
      };
    const changeTheme = (theme) => {
        // Define themes as objects with CSS properties
        const themes = {
            light: { '--primary-color': 'var(--white)', '--secondary-color': 'var(--black)' },
            dark: { '--primary-color': 'var(--black)', '--secondary-color': 'var(--white)'},
            goat: { '--primary-color': 'var(--beige)', '--secondary-color': 'var(--green)' },
            liberty: { '--primary-color': 'var(--blue)', '--secondary-color': 'var(--orange)' },
            candy: { '--primary-color': '#ff4785', '--secondary-color': '#fddde6' }
        };
        // Apply the selected theme
        const selectedTheme = themes[theme];
        Object.keys(selectedTheme).forEach(key => {
            document.documentElement.style.setProperty(key, selectedTheme[key]);
        });
    };
    return (
        
    <nav className="Navbar" onClick={toggleOpen} >
     
     
     {isOpen ? ( 
        <PiHamburgerLight className="Navbar-icon" onClick={toggleOpen} />
        
        ) : (
        <> 
            <RxCross1  className="Navbar-icon"  onClick={toggleOpen}/> 
            
            <div className="Navbar-links-container">
                <a href="#home" className="Navbar-link" onClick={toggleOpen}>HOME</a>
                <a href="#projects" className="Navbar-link"  onClick={toggleOpen}>PROJECTS</a>
                <a href="#experience" className="Navbar-link"  onClick={toggleOpen}>EXPERIENCE</a>
                <a href="#contact" className="Navbar-link" onClick={toggleOpen}>CONTACT</a>
                <div className="Navbar-themes">
                    <button className="Navbar-theme" onClick={() => changeTheme('light')}>🤍</button>
                    <button className="Navbar-theme" onClick={() => changeTheme('dark')}>🖤</button>
                    <button className="Navbar-theme" onClick={() => changeTheme('goat')}>🐐</button>
                    <button className="Navbar-theme" onClick={() => changeTheme('liberty')}>🗽</button>
                    <button className="Navbar-theme" onClick={() => changeTheme('candy')}>🍭</button>
                </div>
                <div className="Navbar-banner">
                    <div className="Navbar-banner-divider"></div>
                    <div className="Navbar-banner-text">WELCOME TO MY PORTFOLIO</div>
                    <div className="Navbar-banner-divider"></div>
                </div>
                <div className="Navbar-socials">
                    <a href="https://www.linkedin.com/in/adel-boussenane-28545317a/" className="Navbar-social">LINKEDIN</a>
                    <a href="https://github.com/aboussenane" className="Navbar-social">GITHUB</a>
                    
                </div>  
                <a href="mailto:aboussenane@gmail.com?subject=Interest%20in%20Your%20Portfolio&body=Hi%20Adel%2C%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20am%20interested%20in%20discussing%20potential%20collaboration%20opportunities.%20Please%20let%20me%20know%20a%20convenient%20time%20to%20talk.%0D%0A%0D%0AThank%20you%2C%0D%0A%5BYour%20Name%5D" target="_blank" rel="noopener noreferrer" className="Navbar-social">EMAIL</a>
            </div>
        </>
        )}
     
     
        
    </nav>
    
  );
}

export default Navbar;