import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../Firebase/FirebaseConfig';


const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    //    ===========================Redirect User===========================
    const navigate = useNavigate();

    if (user) {
        toast.success('Login is Successfully Done');
        navigate('/home');
    }

    //    ===========================Redirect User===========================

    return (
        <div>
            <div className="div d-flex align-items-center justify-content-center mt-3">
                <div className="div1 bg-dark rounded-pill" style={ { height: '2px', width: '100px' } }></div>
                <div1 className='ms-2 me-2'>OR</div1>
                <div className="div1 bg-dark rounded-pill" style={ { height: '2px', width: '100px' } }></div>
            </div>
            <button className="btn btn-success w-100 mt-2 rounded-pill" onClick={ () => signInWithGoogle() }><FontAwesomeIcon icon={ faGooglePlusG } className='me-2' /> Continue With Google</button>
            <ToastContainer />
        </div>
    );
};

export default Social;