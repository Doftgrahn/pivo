import React from 'react';
import '../styles/dashboard.scss';
import addbeer from '../logic/addbeer';

import Pivo from './piv.jpg';

const Dashboard = ({ user, leaderboard }) => {
    const showleader = leaderboard
        .sort((a, b) => b.beer - a.beer)
        .map(user => (
            <li key={user.id}>
                <img src={user.photo} alt={user.user} />
                <span>{user.beer}</span>
            </li>
        ));

    return (
        <main className='dashboard'>
            <section>
                <button onClick={() => addbeer(user, leaderboard)}>
                    <img src={Pivo} alt='pivo' />
                </button>
                <h1>Pivo</h1>
                <ol>{showleader}</ol>
            </section>
        </main>
    );
};

export default Dashboard;
