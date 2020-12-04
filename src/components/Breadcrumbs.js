import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, useLocation } from 'react-router-dom';


const getTitle = (data, path) => {
    if (data.page) {
        const title = data.page.title || data.page.name;
        return title;
    }
    return path.split('/').slice(-1)
};


const Breadcrumb = ({ path, isLast, pageData }) => {
    const { data, isFetching } = pageData;
    const item = path.split('/').slice(-1);

    if (isFetching && isLast === true) {
        return <p className="breadcrumbs-item breadcrumbs-notlink"> ... </p>;
    }

    if (!isFetching && isLast === true) {
        const title = getTitle(data, path);
        return <p className="breadcrumbs-item breadcrumbs-notlink">{title}</p>;
    }

    return (
        <Link to={path} className="breadcrumbs-item breadcrumbs-link">
            {item}
        </Link>
    );
}


const HomeLink = ({ isLink }) => {
    if (isLink) {
        return <Route path="/">
            <Link to="/" className="breadcrumbs-item breadcrumbs-link">
                <i className="material-icons">home</i>
            </Link>
        </Route>;
    }
    return <p className="breadcrumbs-item breadcrumbs-notlink">
        <i className="material-icons">home</i>
    </p>;
}


const Breadcrumbs = ({ pageData }) => {
    const { pathname } = useLocation();
    const temp = pathname.split('/').splice(1);

    const pathArr = temp.reduce((acc, item) => {
        if (item === '') return acc;
        return [...acc, `${acc.slice(-1)}/${item}`];
    }, []);

    const linkList = pathArr.map((item, index, arr) => {
        const last = (index === arr.length-1);
        return <Route path={item} key={item}>
            <Breadcrumb path={item} isLast={last} pageData={pageData}/>
        </Route>
    });

    return (
        <div className="breadcrumbs-container">
            <HomeLink isLink={pathArr.length}/>
            {linkList}
        </div>
    );
}


/* react-redux */
const mapStateToProps = store => ({
    pageData: store.page,
});

export default connect(
    mapStateToProps
)(Breadcrumbs);
