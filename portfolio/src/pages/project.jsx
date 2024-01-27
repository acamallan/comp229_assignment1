/*
Filename: project.jsx
Student name: Anthony Camallan
Student ID: 303171016
Date: 01/27/2024
*/

import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
export default function Project() {
    return ( 
        <div className='content'>
            <h3>Projects</h3>
            <table>
                <tr>
                    <td><b>Coffe Shop</b> - A school project written in C#. I written the whole project.<br/>
                        <img src={img1} width="500px" />
                    </td>
                    <td><b>Hotel Management</b> - Personal Project Written in Java
                        <img src={img2} width="500px" />
                    </td>
                </tr>
                <tr>
                    <td><b>Patient Information</b> - A school team project for Database. My task is to create PL/SQL Prcedures<br/>
                        <img src={img3} width="500px" />
                    </td>
                </tr>
            </table>
            <br/>      
        </div>
    );
}
    