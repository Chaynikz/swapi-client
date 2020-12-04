import config from '../../config';


/* getTextFromString */

const ucFirst = str => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

export const getTextFromString = str => {
    return ucFirst(str).replace(/_/g, " ");
}


/* fetchLinkListData */

const getNewUrl = next => {
    const newUrl = config.herokuUrl + next;
    return newUrl;
}

export const fetchLinkListData = (url, setState, abortController) => {

    setState({
        error: null,
        isFetching: true,
        data: null,
    })

    const iter = (url, acc) => {
        fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            signal: abortController.signal,
        })
        .then(res => {
            if (res.status !== 200) {
                throw new Error(res.statusText);
            }
            return Promise.resolve(res);
        })
        .then(res => res.json())
        .then(data => {
            if (!data.next) {
                setState({
                    error: null,
                    isFetching: false,
                    data: acc.concat(data.results),
                });
            } else {
                const newUrl = getNewUrl(data.next);
                iter(newUrl, acc.concat(data.results));
            }
        })
        .catch(err => {
            if (!err.name === 'AbortError') {
                setState({
                    error: err,
                    isFetching: false,
                    data: null,
                })
            }
        });
    }

    return iter(url, []);
}


/* getUrl */

const collectionSet = {
    films: ["films"],
    people: ["people", "characters", "residents", "pilots"],
    planets: ["planets", "homeworld"],
    species: ["species"],
    starships: ["starships"],
    vehicles: ["vehicles"],
};

export const getUrl = str => {

    const url = Object.keys(collectionSet).filter(item => {
        return collectionSet[item].includes(str) && item;
    });

    return `${config.rootUrl}/${url}/`;
}
