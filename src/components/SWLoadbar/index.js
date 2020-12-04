import React from 'react';
import './sw-loadbar-style.css';

import Segment from './Segment';


const SWLoadbar = ({ size }) => {

    return (

        <div className="sw-loadbar-container" style={{ "--size": size }}>

            <Segment
                viewbox="52"
                height="20"
                dash="25"
                offset="25"
                duration="2.5s"
            />

            <Segment
                viewbox="64"
                height="15"
                dash="20"
                offset="20"
                duration="1.5s"
            />

            <Segment
                viewbox="52"
                height="15"
                dash="20"
                offset="-15"
                duration="1.8s"
                direction="-1"
            />

            <Segment
                viewbox="62"
                height="20"
                dash="25"
                offset="-50"
                duration="2.3s"
                direction="1"
            />

        </div>

    ); // end return
};

export default SWLoadbar;
