import React from 'react';
import Navbar from '../../shared/Navbar';
import { useParams } from 'react-router-dom';

const Details = () => {
    const {id}=useParams()
    console.log(id);
    return (
        <div>
            <Navbar/>
            <h1>details {id}</h1>
            
        </div>
    );
};

export default Details;