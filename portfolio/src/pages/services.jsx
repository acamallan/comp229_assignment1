/*
Filename: services.jsx
Student name: Anthony Camallan
Student ID: 303171016
Date: 01/27/2024
*/

import coldfusion from '../assets/cf.png';
import oracle from '../assets/oracle.png';
import api from '../assets/api.png';
import reactjs from '../assets/reactjs.png';
export default function Services() {
    return (
        <>
        <div className='content'>
            <h3>My Services:</h3> 
            <table>
                <tr>
                    <td align='center'>Colfusion</td>
                    <td align='center'>Oracle SQL</td>
                    <td align='center'>API</td>
                    <td align='center'>ReactJS</td>
                </tr>
                <tr>
                    <td align='center'><img src={coldfusion} width="100px" /></td>
                    <td align='center'><img src={oracle} width="100px" /></td>
                    <td align='center'><img src={api} width="100px" /></td>
                    <td align='center'><img src={reactjs} width="100px" /></td>
                </tr>
            </table>
        </div>
        </>
    );
}
    