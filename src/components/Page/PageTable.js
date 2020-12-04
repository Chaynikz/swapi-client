import React from 'react';

import PageTableTr from './PageTableTr';


const PageTable = ({ data }) => {

    const items = Object.keys(data);

    const trList = items.map(item => (
        <PageTableTr
            item={item}
            data={data[item]}
            key={item}
        />
    ));

    return <table className="swapi-table">
        <tbody>
            {trList}
        </tbody>
    </table>
};

export default PageTable;
