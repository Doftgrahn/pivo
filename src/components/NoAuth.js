import React, { useState } from 'react';

const App = ({ logIn }) => {
    return (
        <div className='App'>
            <h1>Welcome to the beer app</h1>
            <p>You are not logged in</p>
            <button onClick={logIn}>Log in</button>
        </div>
    );
};

export default App;
