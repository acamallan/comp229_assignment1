/*
Filename: Layout.jsx
Student name: Anthony Camallan
Student ID: 303171016
Date: 01/27/2024
*/

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/assets/logo.png'
export default function Layout() {
 return (
    <>
    <div className='header'>
        <img src={logo} className='logo'/>
        </div>
        <div className='content'>
        <nav>
        <Link to="/">Home</Link> <Link to="/about">About Me</Link> <Link to="/services">Services</Link> <Link to="/contact">Contact Me</Link>
        </nav>
        <br/><br/>
        <hr/>
    </div>
    </>
);
}