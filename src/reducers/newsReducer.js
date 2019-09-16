const initialState = {
    news: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'ADD_NEWS': return {
            news: [action.payload]
        }
        default:
            return state;
    }
}