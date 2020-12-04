import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './styles/index.css';
import './styles/header.css';
import './styles/main-nav.css';
import './styles/breadcrumbs.css';
import './styles/customProps.css';

import './styles/576.css';
import './styles/768.css';
import './styles/992.css';
import './styles/1200.css';
import './styles/1400.css';

import App from './components/App';

import { store } from './store';


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

