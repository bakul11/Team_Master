import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../Firebase/FirebaseConfig';


const RequireAuth = ({ children }) => {
    const location = useLocation();
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return <span className='text-center'>Loading...</span>
    }

    if (!user) {
        return <Navigate to="/login" state={ { from: location } } replace />;
    }

    return children;

};

export default RequireAuth;