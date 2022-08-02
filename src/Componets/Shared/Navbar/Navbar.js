import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../Firebase/FirebaseConfig';
import './Navbar.css'
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth);
        swal("Logout Success!", "Logout is Successfully Done!", "success");
        navigate('/');
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container">
                    <Link className="navbar-brand text-light " to="/home">Team Master</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item ms-5">
                                <NavLink className="nav-link  text-light" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item ms-5">
                                <NavLink className="nav-link text-light" to="/about">About Us</NavLink>
                            </li>
                            <li className="nav-item ms-5">
                                {
                                    user ? <span className="nav-link text-light">{ user?.displayName }</span> : ''
                                }
                            </li>
                            <li className="nav-item ms-5">
                                {
                                    user ? <span className='nav-link text-light' style={ { cursor: 'pointer' } } onClick={ handleLogout }>Logout</span> : <NavLink className="nav-link text-light" to="/services">signUP</NavLink>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;