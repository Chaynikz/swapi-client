import React from 'react';

import NoMatch from './NoMatch';

const ErrorComponent = ({ err }) => {
    if (err.message === 'Not Found') {
        return <NoMatch />;
    }

    return <div className="error-block">
        <p>Во время запроса произошла ошибка</p>
        <p>{err.name}</p>
    </div>;
};

export default ErrorComponent;
