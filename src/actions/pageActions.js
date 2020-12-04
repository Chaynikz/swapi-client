import {
    PAGE_REQUEST,
    PAGELIST_REQUEST_SUCCESS,
    PAGE_REQUEST_SUCCESS,
    PAGE_REQUEST_FAIL,
    RESET
} from './constants';



export const fetchData = (url, flag, abortController) => {

    return dispatch => {
        dispatch(pageRequest);

        return fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            signal: abortController.signal,
        })
        .then(response => {
            if (!response.ok) {
                // throw new Error(response.statusText);
                return Promise.reject(new Error(response.statusText));
            }
            return Promise.resolve(response);
        })
        .then(response => response.json())
        .then(data => {
            dispatch(requestSuccess(data, flag));
        })
        .catch(err => {
            if (err.name !== 'AbortError') {
                dispatch(pageRequestFail(err));
            }
        });
    } // end return dispatch
};



export const reset = () => {
    return dispatch => {
        dispatch({
            type: RESET,
        });
    };
};


const pageRequest = {
    type: PAGE_REQUEST,
};


const requestSuccess = (data, flag) => {

    if (flag === "pageList") {
        return {
            type: PAGELIST_REQUEST_SUCCESS,
            payload: data,
        }
    }

    if (flag === "page") {
        return {
            type: PAGE_REQUEST_SUCCESS,
            payload: data,
        }
    }
}


const pageRequestFail = err => {
    return {
        type: PAGE_REQUEST_FAIL,
        error: err,
    }
};
