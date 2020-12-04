import React from 'react';

import MainNav from './MainNav';


const Header = () => {
    return <>
        <header className="main-header grid-container">
            <h1 className="main-title">STAR WARS</h1>

            <MainNav />
        </header>
    </>
};

export default Header;
