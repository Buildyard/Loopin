import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import Logo from '../assets/logo1.svg'; 

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navbarStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        transition: 'color 0.3s ease, transform 0.3s ease',
        padding: isScrolled ? '10px 20px' : '20px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: isScrolled ? 'center' : 'space-between',
        width: '100%',
        boxSizing: 'border-box'
    };

    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: isScrolled ? 'auto' : '100%',
        maxWidth: isScrolled ? '800px' : 'none',
        padding: isScrolled ? '12px 24px' : '0',
        borderRadius: isScrolled ? '50px' : '0',
        background: isScrolled 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        // border: isScrolled ? '1px solid rgba(255, 255, 255, 0.2)' : 'none',
        boxShadow: isScrolled 
            ? '0 8px 32px rgba(0, 0, 0, 0.1)' 
            : 'none',
        transition: 'color 0.3s ease, transform 0.3s ease',
        gap: isScrolled ? '30px' : '0'
    };

    const logoStyle = {
        order: isScrolled ? 1 : 1,
        transition: 'color 0.3s ease, transform 0.3s ease',
        transform: isScrolled ? 'translateX(0)' : 'translateX(0)'
    };

    const logoImageStyle = {
        height: '40px',
        width: 'auto',
        filter: 'brightness(0) invert(1)' // Makes the logo white
    };

    const logoTextStyle = {
        color: 'white',
        fontSize: '24px',
        fontWeight: 'bold',
        textDecoration: 'none',
        fontFamily: 'Arial, sans-serif'
    };

    const middleLinksStyle = {
        display: 'flex',
        gap: '30px',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        order: isScrolled ? 2 : 2,
        transition: 'color 0.3s ease, transform 0.3s ease'
    };

    const rightSectionStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        order: isScrolled ? 3 : 3,
        transition: 'color 0.3s ease, transform 0.3s ease'
    };

    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        fontSize: '16px',
        fontWeight: '500',
        transition: 'all 0.3s ease',
        fontFamily: 'Arial, sans-serif',
        position: 'relative',
        cursor: 'pointer'
    };


    const buttonStyle = {
        backgroundColor: 'white',
        color: '#333',
        borderRadius: '25px',
        padding: '10px 20px',
        textTransform: 'none',
        fontWeight: '600',
        fontSize: '14px',
        transition: 'all 0.3s ease',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'Arial, sans-serif',
        ':hover': {
            backgroundColor: '#f0f0f0',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
        }
    };

    return (
        <nav style={navbarStyle}>
            <div style={containerStyle}>
                {/* Logo Section */}
                <div style={logoStyle}>
                    <a href="/" style={logoTextStyle}>
                        <img src={Logo} alt="Loopin Logo" style={logoImageStyle} />
                    </a>
                </div>

                {/* Middle Navigation Links */}
                <ul style={middleLinksStyle}>
                    <li>
                        <a href="#offerings" style={linkStyle}>
                            Solutions
                        </a>
                    </li>
                    <li>
                        <a href="#important" style={linkStyle}>
                            Platform
                        </a>
                    </li>
                    <li>
                        <a href="#reviews" style={linkStyle}>
                            Testimonials
                        </a>
                    </li>
                </ul>

                {/* Right Section */}
                <div style={rightSectionStyle}>
                    <a href="#login" style={linkStyle}>
                        Login
                    </a>
                    <button style={buttonStyle}>
                        Schedule a call
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;