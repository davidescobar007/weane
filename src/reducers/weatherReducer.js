const initialState={
    weather:[]
}

export default function(state = initialState, action){
    switch(action.type){
        //ADD_lOCATION  is the action to be done
        case 'ADD_WEATHER': return {
            weather:[ action.payload ]
        }
        default:
            return state;
    }
}