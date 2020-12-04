import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchData, reset } from '../actions/pageActions';
import config from '../config';
import { getFlag } from '../utils';

import SWLoadbar from './SWLoadbar';
import NextBlock from './NextBlock';
import ErrorComponent from './ErrorComponent';
import ErrorBoundary from './ErrorBoundary';


const LinkList = ({ category, resetState, items }) => {
    const linkList = items.map(item => {
        const path = `/categories/${category}/${item.url.match(/\d+/)}`;
        const itemName = item.name || item.title;

        return (
            <Link
                to={path}
                className="content-link page-list-link"
                onClick={resetState}
                key={itemName}
            >
                {itemName}
            </Link>
        );
    });

    return <ul>{linkList}</ul>;
}


const PageList = ({ pageData, getItemList, resetState }) => {
    const params = useParams();
    const url = `${config.rootUrl}/${params.category}/`;
    const flag = getFlag(params);

    useEffect(() => {
        const abortController = new AbortController();
        getItemList(url, flag, abortController);

        return () => abortController.abort();
    }, [getItemList, url, flag]);

    const { data, error, isFetching } = pageData;

    const renderTemplate = () => {
        if (error) {
            return <ErrorComponent err={error}/>;
        }

        if (isFetching) {
            return (
                <div className="sw-loadbar-wrapper">
                    <SWLoadbar />
                </div>
            );
        }

        if (data.pageList) {
            const items = data.pageList.results;

            return <>
                <ErrorBoundary>
                    <LinkList
                        category={params.category}
                        resetState={resetState}
                        items={items}
                    />

                    <NextBlock
                        prev={data.pageList.previous}
                        next={data.pageList.next}
                        fn={getItemList}
                    />
                </ErrorBoundary>
            </>;
        }
    };

    return <>
        {renderTemplate()}
    </>;
};



/* react-redux */
const mapStateToProps = store => ({
    pageData: store.page,
});

const mapDispatchToProps = dispatch => ({
    getItemList: (url, flag, abortController) => dispatch(fetchData(url, flag, abortController)),
    resetState: () => dispatch(reset())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageList);
