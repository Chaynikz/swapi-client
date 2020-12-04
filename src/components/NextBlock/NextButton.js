import React from 'react';

import config from '../../config';

const NextButton = ({ url, fetchData, children }) => {

    const currentUrl = config.herokuUrl + url;
    const flag = "pageList";

    const handleClik = event => {
        event.preventDefault();

        // сигнал всегда будет false
        // чтоб fetchData не ругался на отсутствие сигнала
        // переработать
        const abortController = new AbortController();
        fetchData(currentUrl, flag, abortController);
    };

    const className = url ? "prev-next-link" : "prev-next-link inactive"

    return (
        <button className={className} onClick={handleClik}>
            {children}
        </button>
    )
}

export default NextButton;


