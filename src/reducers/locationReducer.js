const initialState = {
    location:["Bogota"]
}

export default function(state = initialState, action){
    switch(action.type){
        //ADD_lOCATION  is the action to be done
        case 'ADD_LOCATION': return {
           
            location:[ action.payload ]
        }
        default:
            return state;
    }
}