import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { reset } from '../actions/pageActions';
import { upperCaseFirst } from '../utils';

import * as icons from './SWIcons';
import ErrorBoundary from './ErrorBoundary';


const categories = [
    { name: 'films', icon: icons.FilmsIcon },
    { name: 'people', icon: icons.PeopleIcon },
    { name: 'planets', icon: icons.PlanetsIcon },
    { name: 'species', icon: icons.SpeciesIcon },
    { name: 'starships', icon: icons.StarshipsIcon },
    { name: 'vehicles', icon: icons.VehiclesIcon },
];


const LinkList = () => categories.map(category => {

    const { name, icon: Icon } = category;
    const link = "/categories/" + name;

    return <li className="category" key={name}>
        <Link to={link} className="category-link">
            <span className="category-link-icon">
                <Icon />
            </span>

            <span className="category-link-text">
                {upperCaseFirst(name)}
            </span>
        </Link>
    </li>;
});


const CategoryList = ({ resetState }) => {
    useEffect(() => {
        resetState();
    }, [resetState]);

    return <ul className="category-list">
        <ErrorBoundary>
            <LinkList/>
        </ErrorBoundary>
    </ul>;
};


// react-redux
const mapDispatchToProps = dispatch => ({
    resetState: () => dispatch(reset())
});

export default connect(
    null,
    mapDispatchToProps
)(CategoryList);