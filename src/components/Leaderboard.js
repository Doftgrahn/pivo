import React from 'react';
import '../styles/leaderboard.scss';

const Leaderboard = ({ leaderboard }) => {
    console.log(leaderboard);
    const showleader = leaderboard
        .sort((a, b) => b.beer - a.beer)
        .map((user, i) => (
            <li key={user.id}>
                <img src={user.photo} alt={user.user} />
                {user.user} öl {user.beer}
            </li>
        ));

    return (
        <main className='leaderboard'>
            <h1>LeaderBoard</h1>
            <ul>{showleader}</ul>
        </main>
    );
};

export default Leaderboard;
