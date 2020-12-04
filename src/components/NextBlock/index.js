import React from 'react';

import NextButton from './NextButton';


const NextBlock = ({ prev, next, fn }) => {

    if (prev || next) return (
        <div className="prev-next">
            <NextButton url={prev} fetchData={fn}>
                Previous
            </NextButton>

            <span className="prev-next-dots"> ... </span>

            <NextButton url={next} fetchData={fn}>
                Next
            </NextButton>
        </div>
    )
    return null;
}

export default NextBlock;
