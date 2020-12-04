import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import config from '../../config';
import { fetchData } from '../../actions/pageActions';
import { getFlag } from '../../utils';

import SWLoadbar from '../SWLoadbar';
import PageTable from './PageTable';
import ErrorComponent from '../ErrorComponent';


const Page = ({ pageData, getPage }) => {
    const params = useParams();
    const url = `${config.rootUrl}/${params.category}/${params.page}`;
    const flag = getFlag(params);

    useEffect(() => {
        const abortController = new AbortController();
        getPage(url, flag, abortController);
        return () => abortController.abort();
    }, [getPage, url, flag]);

    const { data, error, isFetching } = pageData;

    const renderTemplate = () => {
        if (error) {
            return (
                <div className="test-error-block">
                    <ErrorComponent err={error} />
                </div>
            );
        }

        if (isFetching) {
            return (
                <div className="sw-loadbar-wrapper">
                    <SWLoadbar />
                </div>
            );
        }

        if (data.page) {
            return (
                <div>
                    <h3>{data.page.title || data.page.name}</h3>
                    <PageTable data={data.page} />
                </div>
            );
        }
    };

    return <>
        {renderTemplate()}
    </>;
};



// react-redux
const mapStateToProps = store => ({
    pageData: store.page,
})

const mapDispatchToProps = dispatch => ({
    getPage: (url, flag, abortController) => dispatch(fetchData(url, flag, abortController)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Page);
