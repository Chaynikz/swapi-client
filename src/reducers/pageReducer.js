const initialState = {
    data: '',
    isFetching: false,
    error: '',
};


export function pageReducer(state = initialState, action) {
    switch (action.type) {
        case 'PAGE_REQUEST':
            return {
                data: '',
                isFetching: true,
                error: ''
            }

        case 'PAGE_REQUEST_FAIL':
            return {
                data: '',
                isFetching: false,
                error: action.error,
            }

        case "PAGELIST_REQUEST_SUCCESS":
            return {
                error: '',
                isFetching: false,
                data: {
                    pageList: action.payload,
                    page: '',
                }
            }

        case "PAGE_REQUEST_SUCCESS":
            return {
                error: '',
                isFetching: false,
                data: {
                    pageList: '',
                    page: action.payload,
                }
            }

        case "RESET":
            return initialState;

        default:
            return state;
    }
};
