import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <div className='logo-section'>
                <h1>TrustList</h1>
            </div>
            <div className='menu-section'>
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/reviews'>Reviews</Link>
                <Link className='link' to='/dashboard'>Dashboard</Link>
                <Link className='link' to='/blog'>Blog</Link>
            </div>
        </div>
    );
};

export default Header;