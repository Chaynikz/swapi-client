import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import CategoryList from './CategoryList';
import PageList from './PageList';
import Page from './Page';
import NoMatch from './NoMatch';
import ErrorBoundary from './ErrorBoundary';
import Breadcrumbs from './Breadcrumbs';


const App = () => {
    return <>
        <Header/>

        <ErrorBoundary>
            <Breadcrumbs/>
        </ErrorBoundary>

        <main className="content-wrapper">

            <ErrorBoundary>
                <Switch>
                    <Route exact path="/" component={Home} />

                    <Route exact path="/categories" component={CategoryList} />

                    <Route exact path="/categories/:category" component={PageList} />

                    <Route exact path="/categories/:category/:page" component={Page} />

                    <Route component={NoMatch} />
                </Switch>
            </ErrorBoundary>

        </main>

        <Footer/>
    </>;
};

export default App;
