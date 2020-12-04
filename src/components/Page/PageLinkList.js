import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { fetchLinkListData } from './pageUtils';

import SWLoadbar from '../SWLoadbar';


const PageLinkList = ({ urlArr, url }) => {

    const [state, setState] = useState({
        error: '',
        isFetching: false,
        data: '',
    });

    useEffect(() => {
        const abortController = new AbortController();
        if (urlArr && urlArr.length !== 0) fetchLinkListData(url, setState, abortController);
        return () => abortController.abort();
    }, [url, urlArr]);

    const renderTemplate = () => {
        const { error, isFetching, data } = state;

        if (error) {
            return <div>-- loading error --</div>;
        }

        if (isFetching) {
            return (
                <div className="sw-loadbar-table-wrapper">
                    <SWLoadbar size="50px" />
                </div>
            );
        }

        if (!urlArr || urlArr.length === 0) {
            return "n/a";
        }

        if (data) {
            const linkList = data.map((item, index) => {

                if (urlArr.includes(item.url) || urlArr === item.url) {
                    const path = item.url.replace('https://swapi.dev/api','/categories');

                    return (
                        <Link
                            to={path}
                            className="swapi-table-link"
                            key={index}
                        >
                            {item.name || item.title}
                        </Link>
                    );
                }
                return null;
            });

            return linkList;
        }
    };

    return <>
        {renderTemplate()}
    </>;
};


export default PageLinkList;
