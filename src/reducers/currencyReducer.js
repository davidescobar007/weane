const initialState = {
    country: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'ADD_COUNTRY': return {
            country: [action.payload]
        }
        case 'ADD_VALUE': return {
            convertedCurrency: [action.payload]
        }
        default:
            return state
    }
}