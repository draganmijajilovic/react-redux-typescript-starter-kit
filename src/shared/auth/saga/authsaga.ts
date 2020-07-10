import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import actionTypes from '../actions/actions';
import * as api from '../api/authapi';

// function* loginRequest(action: ReturnType<typeof actionTypes.fetchLoginAsync.request>): Generator {
//     try {
//         // eslint-disable-next-line @typescript-eslint/no-explicit-any
//         console.log('HELLO ');
//         const response: any = yield call(api.login);
//         console.log('HELLO ', response);
//         if (response) yield put(actionTypes.fetchLoginAsync.success(response.data));
//     } catch (error) {
//         console.log(error);
//         yield put(actionTypes.fetchLoginAsync.failure(error));
//     }
// }

function* registerRequest(action: any): Generator {
    console.log('action', action);
    try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        console.log('HELLO ');
        const response: any = yield api.register(action);
        console.log('HELLO ', response);
        // if (response) yield put(actionTypes.REGISTER_SUCCESS(response));
    } catch (error) {
        console.log(error);
        // yield put(actionTypes.fetchRegisterAsync.failure(error));
    }
}

// function* logoutRequest() {
//     try {
//         yield call(api.logout);
//         yield put(actionTypes.fetchLogoutAsync.success(true));
//     } catch (e) {
//         yield put(actionTypes.fetchLogoutAsync.failure(e));
//     }
// }

// function* login() {
//     console.log('login');
//     yield takeLatest(actionTypes.fetchLoginAsync.request, loginRequest);
// }

function* register() {
    console.log('register');
    yield takeLatest(actionTypes.REGISTER_REQUEST, registerRequest);
}
// function* logout() {
//     yield takeLatest(actionTypes.fetchLogoutAsync.request, logoutRequest);
// }

export default function* authsaga() {
    yield all([fork(register)]);
}
