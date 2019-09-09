import { createStore } from 'redux';
import reducer from './reducers/indexReducer';

//const initialState = [];


//we add a reducer, the initialState and redux devTools, the line below you can find it at: https://github.com/zalmoxisus/redux-devtools-extension
export const store = createStore(
    reducer,
    //initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;