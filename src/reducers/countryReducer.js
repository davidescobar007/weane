const initialState = {
    country: ["cop"]    
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'ADD_COUNTRY': return {
            country: [action.payload],            
        }
        default:
            return state
    }
}