import React, { useEffect, useState } from 'react';
import TeamCart from './TeamCart';
import Loading from './Loadig'

const TeamData = () => {
    const [team, setTeam] = useState([]);
    const [loader, setLoader] = useState(true);



    useEffect(() => {
        fetch('https://randomuser.me/api/?results=198')
            .then(res => res.json())
            .then(data => {
                setTeam(data.results);
                setLoader(false);
            })
            .catch(err => {
                setLoader(true);
            })
    }, [])

    return (
        <div className="container mt-5 mb-5">
            <div className="row gy-5">
                {
                    team.map(team => <TeamCart team={ team }></TeamCart>)
                }

                {
                    loader ? <>
                        <Loading />
                        <Loading />
                        <Loading />
                        <Loading />
                        <Loading />
                        <Loading />
                        <Loading />
                        <Loading />
                        <Loading />
                        <Loading />
                        <Loading />
                        <Loading />
                    </> : ''
                }
            </div>
        </div>
    );
};

export default TeamData;