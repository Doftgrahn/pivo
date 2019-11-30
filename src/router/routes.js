import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../components/Dashboard';
import Leaderboard from '../components/Leaderboard';
import General from '../components/General';

const Routing = ({ user, leaderboard }) => {
    return (
        <Switch>
            <Route
                path='/'
                exact={true}
                render={props => (
                    <Dashboard
                        {...props}
                        user={user}
                        leaderboard={leaderboard}
                    />
                )}
            />
            <Route
                path='/leaderboard'
                render={props => (
                    <Leaderboard
                        {...props}
                        user={user}
                        leaderboard={leaderboard}
                    />
                )}
            />
            <Route
                path='/general'
                render={props => (
                    <General {...props} user={user} leaderboard={leaderboard} />
                )}
            />
        </Switch>
    );
};

export default Routing;
