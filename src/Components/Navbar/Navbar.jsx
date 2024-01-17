// import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='nav-bar'>
            <h1>My Shopping Center</h1>
            <div className='nav-bar_link'>
                <Link to="/">Home</Link>
                <Link to="/">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/sign-up">Sign Up</Link>
            </div>
        </div>
    );
};

export default Navbar;