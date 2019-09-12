const initialState = {
    convertedCurrency:[]
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'ADD_VALUE': return {            
            convertedCurrency: [action.payload]
        }
        default:
            return state
    }
}