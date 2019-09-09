const initialState = {
    currency: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'ADD_CURRENCY': return {
            currency: [action.payload]
        }
        default:
            return state
    }
}