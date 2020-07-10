import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import actionTypes, { registerSuccess, registerError, loginSuccess, getAllHotelsSuccess } from '../actions/actions';
import * as api from '../api/authapi';

function* loginRequest(action: any): Generator {
    try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const response: any = yield api.login(action);
        console.log('login response', response);
        if (response) {
            yield put(loginSuccess(response));
        }
    } catch (error) {
        console.log(error);
        // TODO catch error
        // yield put(actionTypes.fetchLoginAsync.failure(error));
    }
}

function* registerRequest(action: any): Generator {
    console.log('action', action);
    try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const response: any = yield api.register(action);
        if (response) {
            yield put(registerSuccess(response));
        }
    } catch (error) {
        yield put(registerError());
    }
}

function* getHotelsRequest(): Generator {
    try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const response: any = yield api.getHotels();
        console.log(response);
        if (response) {
            yield put(getAllHotelsSuccess(response));
        }
    } catch (error) {
        yield put(registerError());
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
    yield takeLatest(actionTypes.REGISTER_REQUEST, registerRequest);
}
function* login() {
    yield takeLatest(actionTypes.LOGIN_REQUEST, loginRequest);
}
function* getAllHotels() {
    yield takeLatest(actionTypes.GET_ALL_HOTElS, getHotelsRequest);
}
export default function* authsaga() {
    yield all([fork(register), fork(login), fork(getAllHotels)]);
}
