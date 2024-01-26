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
    const servicesTitle = ["Coldfusion", "Oracle SQL", "API", "ReactJS"]
    const servicesImages = [coldfusion, oracle, api, reactjs]
    return (
        <>
        <div className='content'>
            <h3>My Services:</h3> 
            <table>
                <tr>
                    {
                        servicesTitle.map((data) => <td align='center'>{data}</td>)
                    }
                </tr>
                <tr>
                    {
                        servicesImages.map((data) => <td align='center'><img src={data} width="100px" /></td>)
                    }
                </tr>
            </table>
        </div>
        </>
    );
}
    