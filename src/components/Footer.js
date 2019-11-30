import React from 'react';

import { NavLink } from 'react-router-dom';
import '../styles/footer.scss';

const Footer = ({ user, logOut }) => {
    return (
        <footer>
            <ul>
                <NavLink to='/' exact activeClassName='active'>
                    DashBoard
                </NavLink>
                <NavLink to='/leaderboard' activeClassName='active'>
                    Leaderboard
                </NavLink>
                <NavLink to='/general' activeClassName='active'>
                    General
                </NavLink>
                <button onClick={logOut}>log out</button>
            </ul>
        </footer>
    );
};

export default Footer;
