import React from 'react';

const Footer = () => {
    const date = new Date();
    const getDate = date.getFullYear();
    return (
        <div className='bg-dark p-4'>
            <div className="container">
                <div className="logo text-center">
                    <h5 className='text-light'>Team Master</h5>
                </div>
                <div className="copyright text-center mt-2 mb-2">
                    <hr className='text-secondary' />
                    <p>Copyright { getDate } Team Master | all Rights Reversed</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;