export const addCountryInfoAction = country => {
    return {
        type: 'ADD_COUNTRY',
        payload: country,
    }
}
export const convertedValueAction = value => {
    return {
        type: 'ADD_VALUE',
        payload: value
    }
}