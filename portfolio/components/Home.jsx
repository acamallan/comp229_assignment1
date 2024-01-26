/*
Filename: Home.jsx
Student name: Anthony Camallan
Student ID: 303171016
Date: 01/27/2024
*/

import { Link } from 'react-router-dom';
export default function Home() {
 return (
    <div className='content'>
        <div style={{width: "50%"}}>
        <h3>Hi! Welcome to my presonal website.</h3>
        <p>My name is Anthony, Ton or Tonio is fine.</p>
        <p>
         I am a software developer with more than ten years of experience. Recognized as a practical and effective developer, experienced in leading cross-functional teams in a time-pressured setting to complete projects on schedule and within budget.
        </p>
        <p>Know more about me. Click <Link to="/about"><u>here</u></Link></p>
        </div>
    </div>
    )
}
    