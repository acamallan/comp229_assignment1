/*
Filename: MainRouter.jsx
Student name: Anthony Camallan
Student ID: 303171016
Date: 01/27/2024
*/
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import About from './src/pages/about'
import Contact from './src/pages/contact';
import Services from './src/pages/services';
import Project from './src/pages/project';
import Layout from './components/Layout';
const MainRouter = () => {
    return (<div>
        <Layout />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/project" element={<Project />} />
        </Routes>
    </div>
    )
}
export default MainRouter
