import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/App.scss';
import Routing from './router/routes';
import NoAuth from './components/NoAuth';
import Footer from './components/Footer';
import { provider, auth } from './utils/fireconfig.js';
import getleaderboard from './logic/getleaderboard';

const App = () => {
    const [user, setUser] = useState(
        null || JSON.parse(localStorage.getItem('user'))
    );
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        let leader = getleaderboard(beer => setLeaderboard(beer));
        return () => leader;
    }, []);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            user
                ? localStorage.setItem('user', JSON.stringify(user))
                : localStorage.removeItem('user');
        });
    });

    const logIn = async () => {
        await auth.signInWithPopup(provider).then(({ user }) => {
            setUser(user);
        });
    };

    const logOut = async () => {
        await auth.signOut();
        setUser(null);
    };

    const ifAuth = () => {
        if (user) {
            return (
                <>
                    <Routing user={user} leaderboard={leaderboard} />
                    <Footer user={user} logOut={logOut} />
                </>
            );
        }
        return <NoAuth logIn={logIn} />;
    };

    return (
        <div className='App'>
            <Router>{ifAuth()}</Router>
        </div>
    );
};

export default App;
