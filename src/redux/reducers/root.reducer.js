import { combineReducers } from "redux";

import { errorReducer } from './error.reducer';
import { setValuesToSearchReducer } from './setValuesToSearch.reducer';

export default combineReducers({
    errorReducer, setValuesToSearchReducer
});
