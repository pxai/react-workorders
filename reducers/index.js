import { combineReducers } from 'redux';
import workorderReducer from './workorder'

const rootReducer = combineReducers({
    workorder: workorderReducer
});

export default rootReducer;
