export const getFlag = (params) => {
    if (params.page) {
        return 'page';
    }
    return 'pageList';
}