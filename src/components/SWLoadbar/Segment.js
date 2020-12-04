import React from 'react';

const Segment = ({
    viewbox, // размер viewBox SVG-блока
    direction=-1, // 1 (против часовой) -1 (по часовой)
    color, // цвет сегмента
    height, // высота сегмента (stroke-width)
    dash, // ширина сегмента (stroke-dasharray)
    offset, // смещение (0 - 100)
    duration, // длительность одного оборота

}) => {
    const segmentSize = `0 0 ${viewbox} ${viewbox}`;
    const animate = +direction * 100 + +offset;
    const strokeDasharray = `${dash} ${100 - +dash}`;

    const circleStyles = {
        "--duration": duration,
        "--animate": animate,
        "stroke": color,
        "strokeWidth": height,
        "strokeDasharray": strokeDasharray,
        "strokeDashoffset": offset,
    };

    return <>
        <svg viewBox={segmentSize} className="sw-loadbar-segment-wrapper">
            <circle
                className="sw-loadbar-segment"
                style={circleStyles}
            >
            </circle>
        </svg>
    </>;
}

export default Segment;

/*
Пример

<Segment
    viewbox="66"
    direction="-1"
    color="rgba(175, 153, 206, .2)"
    height="20"
    dash="30"
    offset="25"
    duration="1s"
/>
*/