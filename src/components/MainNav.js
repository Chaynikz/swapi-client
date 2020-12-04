import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MainNav = () => {

    const [navState, setNavState] = useState({
        isActive: false,
        className: 'main-nav',
    });

    const handleButton = () => {
        navState.isActive ?
        setNavState({
            isActive: false,
            className: 'main-nav',
        }) :
        setNavState({
            isActive: true,
            className: 'main-nav main-nav-active',
        })
    };

    const handleLinkClik = () => {
        setNavState({
            isActive: false,
            className: 'main-nav',
        });
    };

    return <React.Fragment>
        <nav className={navState.className}>
            <ul className="main-nav-ul-1">

                <li>
                    <Link to="/" className="main-nav-link" onClick={handleLinkClik}>Home</Link>
                </li>

                <li>
                    <Link to="/categories" className="main-nav-link categories-link" onClick={handleLinkClik}>Categories</Link>

                    <ul className="main-nav-ul-2">
                        <li>
                            <Link to="/categories/films" className="main-nav-link" onClick={handleLinkClik}>Films</Link>
                        </li>
                        <li>
                            <Link to="/categories/people" className="main-nav-link" onClick={handleLinkClik}>People</Link>
                        </li>
                        <li>
                            <Link to="/categories/planets" className="main-nav-link" onClick={handleLinkClik}>Planets</Link>
                        </li>
                        <li>
                            <Link to="/categories/species" className="main-nav-link" onClick={handleLinkClik}>Species</Link>
                        </li>
                        <li>
                            <Link to="/categories/starships" className="main-nav-link" onClick={handleLinkClik}>Starships</Link>
                        </li>
                        <li>
                            <Link to="/categories/vehicles" className="main-nav-link" onClick={handleLinkClik}>Vehicles</Link>
                        </li>
                    </ul>
                </li>

                {/* <li>
                    <a href="https://chaynikz.ru/" className="main-nav-link" onClick={handleLinkClik} target="_blank" rel="noopener noreferrer">chaynikz.ru</a>
                </li> */}
            </ul>
        </nav>

        <button className="closebtn" onClick={handleButton}>
            { navState.isActive ? <i className="material-icons">close</i> : <i className="material-icons">menu</i> }
        </button>
    </React.Fragment>;
};

export default MainNav;
