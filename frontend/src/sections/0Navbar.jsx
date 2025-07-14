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
        padding: '20px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        boxSizing: 'border-box'
    };

    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: isScrolled ? '800px' : '1200px',
        padding: isScrolled ? '12px 24px' : '0',
        borderRadius: isScrolled ? '50px' : '0',
        background: isScrolled 
            ? 'rgba(255, 255, 255, 0.1)' 
            : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        boxShadow: isScrolled 
            ? '0 8px 32px rgba(0, 0, 0, 0.1)' 
            : 'none',
        transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        height: '60px'
    };

    const logoStyle = {
        position: 'absolute',
        left: '0',
        transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: 1,
        transform: isScrolled ? 'translateX(40px)' : 'translateX(0)'
    };

    const logoImageStyle = {
        height: '40px',
        width: 'auto',
        filter: 'brightness(0) invert(1)'
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
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: 1
    };

    const rightSectionStyle = {
        position: 'absolute',
        right: '0',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: 1,
        transform: isScrolled ? 'translateX(-40px)' : 'translateX(0)'
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
        fontFamily: 'Arial, sans-serif'
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