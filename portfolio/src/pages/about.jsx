/*
Filename: about.jsx
Student name: Anthony Camallan
Student ID: 303171016
Date: 01/27/2024
*/
import logo from '../assets/logo.png';
import resume from '../assets/resume.pdf';
export default function About() {
    return (
        <>
        <div className='content'>
            <img src={logo} width="400px"/><br/>
            Hi there, my full name is Anthony Camallan. I grew up in the farm in the Philippines.<br/>
            I know how to raise the animals like chicken, cow and carabao.<br/>
            Farming is very hard job. So, I study and work hard.<br/> 
            Now, I'm a Software Developer with 10 years of experience.<br/>
            My expertise is on the backend using the Coldfusion and Oracle SQL.<br/><br/>
            Click <a href={resume} target='_blank'><u>here</u></a> to view my resume.
        </div>
        </>
    );
}
    