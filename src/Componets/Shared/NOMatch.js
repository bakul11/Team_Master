import React from 'react';
import logo from '../../images/404.jpg'
import { Link } from 'react-router-dom';

const NOMatch = () => {
    return (
        <div className='container mt-5 mb-5'>
            <img src={ logo } alt='404 logo' className='img-fluid d-block mx-auto'></img>
            <h6 className='text-center mt-3 fs-5'>We can't find this page.please go to <Link to='/home' className='text-primary fw-bold'>HomePages</Link></h6>
        </div>
    );
};

export default NOMatch;