export const upperCaseFirst = str => {
    if (typeof str !== 'string') return null;
    // if (!str || typeof str !== 'string') return null;
    return str[0].toUpperCase() + str.slice(1);
}