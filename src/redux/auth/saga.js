import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { adminRoot } from '../../constants/defaultValues';
import { setCurrentUser, setAllRoles } from '../../helpers/utils';
import jwtDecode from 'jwt-decode';
import { endpoints } from '../../constants/endpoints';
import { signInWithUsernameAndPassword } from '../../services'

import {
    LOGIN_USER,
    LOGOUT_USER,
    FORGOT_PASSWORD,
    RESET_PASSWORD
} from '../actions';

import {
    loginUserSuccess,
    loginUserError,
    forgotPasswordSuccess,
    forgotPasswordError,
    resetPasswordSuccess,
    resetPasswordError,
} from './actions';

export function* watchLoginUser() {
    yield takeEvery(LOGIN_USER, loginWithUsernamePassword);
}

const loginWithUsernamePasswordAsync = async (username, password) => {
    try {
        const user = await signInWithUsernameAndPassword(username, password);
        return user;
    } catch (error) {
        console.log(error)
    }
}

function* loginWithUsernamePassword({payload}) {
    console.log(payload);
    const { username, password } = payload.user;
    const { history } = payload;
    try{
        const loginUser = yield call(loginWithUsernamePasswordAsync, username, password);
        if(loginUser.status === 200){
            console.log('vayo hai ta');
            // const decodedToken = jwtDecode(loginUser.data.accessToken);

        }
    } catch(error) {
        console.log(error)
    }
}

export default function* rootSaga() {
    yield all([
        fork(watchLoginUser),
    ])
}