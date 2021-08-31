import { combineReducers } from 'redux';


import loadingReducer from './Loader/loader.reducer';


const rootReducer = combineReducers({

    loading: loadingReducer,

});

export default rootReducer;