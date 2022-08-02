import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone, faUserNurse, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Zoom } from 'react-reveal';
import './TeamCart.css'

const TeamCart = ({ team }) => {
    const { gender, picture, name, email, phone, location } = team;
    return (
        <div className='col-lg-4'>
            <Zoom>
                <div className="shadow-lg p-4 rounded">
                    <img src={ picture?.large } className='img-fluid d-block mx-auto rounded-pill' alt='logo' ></img>
                    <div className="title text-center mt-3 mb-2">
                        <h6 className='text-primary'>{ `${name?.title} ${name?.first} ${name?.last}` }</h6>
                        <p>{ location?.country }</p>
                    </div>
                    <div className="disc">
                        <p><FontAwesomeIcon icon={ faEnvelope } className='me-2'></FontAwesomeIcon>{ email }</p>
                        <p className='mt-2 mb-2'><FontAwesomeIcon icon={ faPhone } className='me-2'></FontAwesomeIcon>{ phone }</p>
                        <p> {
                            gender === 'male' ? <span className='text-secondary'><FontAwesomeIcon icon={ faUserTie } className='me-2'></FontAwesomeIcon>{ gender }</span> : <span className='text-secondary'><FontAwesomeIcon icon={ faUserNurse } className='me-2'></FontAwesomeIcon>{ gender }</span>
                        }</p>
                    </div>
                </div>
            </Zoom>
        </div>
    );
};

export default TeamCart;