import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import TeamData from './TeamData';

const HomeUI = () => {
    return (
        <div>
            <Navbar />
            <TeamData />
            <Footer />
        </div>
    );
};

export default HomeUI;