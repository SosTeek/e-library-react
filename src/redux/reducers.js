import { combineReducers } from "redux";
import authUser from './auth/reducers';

const reducers = combineReducers({
    authUser,
})

export default reducers;