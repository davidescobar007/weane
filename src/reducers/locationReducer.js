const initialState = {
    location:["Hey Berlin, I love you, you are beautiful", 5],
    city:["Berlin"]
}

export default function(state = initialState, action){
    switch(action.type){
        //ADD_lOCATION  is the action to be done
        case 'ADD_LOCATION': return {
            ...state,
            location:[...state.location, action.payload]
        }
        default:
            return state;
    }
}