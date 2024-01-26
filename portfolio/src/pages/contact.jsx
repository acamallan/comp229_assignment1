/*
Filename: contact.jsx
Student name: Anthony Camallan
Student ID: 303171016
Date: 01/27/2024
*/
export default function Contact() {
    return (
        <>
        <div className='content'>
            <h3>Contact Me</h3>
            First Name:<br/>
            <input type="text" name="firstName"/><br/>
            Last Name:<br/>
            <input type="text"  name="lastName"/><br/>
            Contact Number:<br/>
            <input type="text"  name="contactNumber"/><br/>
            Your Email Address:<br/>
            <input type="text"  name="emailAddress"/><br/>
            Your message:<br/>
            <textarea rows="4" cols="50"  name="message"></textarea><br/>
            <input type="submit" value="Send Message"></input>
        </div>
        </>
    );
}
    