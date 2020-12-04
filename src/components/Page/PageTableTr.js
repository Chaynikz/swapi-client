import React from 'react';
import { getTextFromString, getUrl } from './pageUtils';
import ErrorBoundary from '../ErrorBoundary';
import PageLinkList from './PageLinkList';


const PageTableTr = ({ item, data }) => {

    switch (item) {
        case "name":
        case "title":
        case "url":
        case "created":
        case "edited":
            return null;

        case "homeworld":
        case "characters":
        case "pilots":
        case "residents":
        case "films":
        case "people":
        case "starships":
        case "planets":
        case "vehicles":
        case "species":
            const url = getUrl(item);

            return (
                <tr>
                    <td>{getTextFromString(item)}</td>
                    <td>
                        <ErrorBoundary>
                            <PageLinkList urlArr={data} url={url}/>
                        </ErrorBoundary>
                    </td>
                </tr>
            );

        default:
            return (
                <tr>
                    <td>{getTextFromString(item)}</td>
                    <td>{data}</td>
                </tr>
            );
    }
}

export default PageTableTr;
