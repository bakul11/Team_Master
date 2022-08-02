import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Slide } from 'react-reveal';
import logo1 from '../.././images/register.webp'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import swal from 'sweetalert';
import { useNavigate, Link } from 'react-router-dom'
import Social from '../Social/Social';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import auth from '../Firebase/FirebaseConfig';






const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [matchPass, setMatchPass] = useState('');
    const [showPass, setShowPass] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const [updateProfile, updating, error2] = useUpdateProfile(auth);




    const onSubmit = async (data) => {
        console.log(data);
        if (data.password !== data.confirmPassword) {
            setMatchPass("Password Doesn't Match..");
            return;
        }
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });

    }


    //    ===========================Redirect User===========================
    const navigate = useNavigate();

    if (user) {
        swal("Register Success!", "Your Register is Successfully Done!", "success");
        navigate('/home');
    }

    //    ===========================Redirect User===========================

    //Password Show Hide 
    const handlePasswordShowHide = () => {
        setShowPass(showPass ? false : true)
    }

    return (
        <div className='container' style={ { marginTop: '30px' } }>
            <div className="logo">
                <h5 className='text-center fw-bold text-primary fs-4 mb-5'>Team Master</h5>
            </div>
            <div className="row gy-3">
                <div className="col-lg-5 col-md-6 col-sm-12">
                    <Slide right>
                        <img src={ logo1 } alt="logo" className='img-fluid'></img>
                    </Slide>
                </div>
                <div className="col-lg-5 offset-lg-2 col-md-6 col-sm-12">
                    <Slide left>
                        <div className="register shadow-lg p-5">
                            <h3 className='text-center mb-3'>SignUp Now</h3>

                            {/* Form Start */ }
                            <form onSubmit={ handleSubmit(onSubmit) }>
                                <div className="row gy-2">
                                    <div className="col-lg-12">
                                        <input { ...register("name", { required: true }) } type='text' placeholder='Full Name' className='form-control' />
                                        { errors.name && <span className='text-danger'>Name is required</span> }
                                    </div>
                                    <div className="col-lg-12">
                                        <input { ...register("email", { required: true }) } type='email' placeholder='Email address' className='form-control' />
                                        { errors.email && <span className='text-danger'>Email is required</span> }
                                    </div>
                                    <div className="col-lg-12">
                                        <div className='position-relative'>
                                            <input { ...register("password", { required: true }) } type={ showPass ? 'text' : 'password' } placeholder='Create new Password' className='form-control' />
                                            <div className="font-sec position-absolute top-50 end-0 translate-middle-y">
                                                <FontAwesomeIcon icon={ faEye } style={ { cursor: 'pointer' } } className='me-3' onClick={ handlePasswordShowHide }></FontAwesomeIcon>
                                            </div>
                                        </div>
                                        { errors.password && <span className='text-danger'>Password is required</span> }
                                    </div>
                                    <div className="col-lg-12">
                                        <div className='position-relative'>
                                            <input { ...register("confirmPassword", { required: true }) } type={ showPass ? 'text' : 'password' } placeholder='Confirm Password' className='form-control' />
                                            <div className="font-sec position-absolute top-50 end-0 translate-middle-y">
                                                <FontAwesomeIcon icon={ faEye } style={ { cursor: 'pointer' } } className='me-3' onClick={ handlePasswordShowHide }></FontAwesomeIcon>
                                            </div>
                                        </div>
                                        { errors.confirmPassword && <span className='text-danger'>Confirm is required</span> }
                                    </div>

                                    <div className="col-lg-12">
                                        <input type="submit" className='btn btn-danger w-100 rounded-pill' value='Sign UP' />
                                    </div>
                                </div>
                            </form>
                            {/* Google Sign  */ }
                            <Social></Social>
                            {/* Form End */ }
                            {/* All Error Show List  */ }
                            <p className='text-danger mt-2 mb-2'>{ matchPass }</p>
                            <p className='text-danger'>{ error?.message?.includes('network-request') ? <span>Please Check your Internet</span> : '' }</p>
                            <p className='text-danger'>{ error?.message?.includes('email-already') ? <span>You already use this Email</span> : '' }</p>
                            <p className='text-secondary text-center'>Already have an account? <Link to='/login'>Login Now</Link></p>
                        </div>

                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default Register;