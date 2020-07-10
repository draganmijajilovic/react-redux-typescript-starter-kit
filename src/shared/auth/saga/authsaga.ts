import { call, put, takeLatest, all, fork } from 'redux-saga/effects';
import actionTypes, {
    registerSuccess,
    registerError,
    loginSuccess,
    getAllHotelsSuccess,
    getHotelDetailSuccess,
} from '../actions/actions';
import * as api from '../api/authapi';

function* loginRequest(action: any): Generator {
    try {
        const response: any = yield api.login(action);
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
        const response: any = yield api.getHotels();
        console.log(response);
        if (response) {
            yield put(getAllHotelsSuccess(response));
        }
    } catch (error) {
        yield put(registerError());
    }
}

function* getHotelDetailRequest(action: any): Generator {
    console.log('hotel details', action);
    try {
        const response: any = yield api.getHotelDetails(action?.payload);
        if (response) {
            yield put(getHotelDetailSuccess(response));
        }
    } catch (error) {
        yield put(registerError());
    }
}

function* register() {
    yield takeLatest(actionTypes.REGISTER_REQUEST, registerRequest);
}
function* login() {
    yield takeLatest(actionTypes.LOGIN_REQUEST, loginRequest);
}
function* getAllHotels() {
    yield takeLatest(actionTypes.GET_ALL_HOTElS, getHotelsRequest);
}
function* getHotelDetail() {
    yield takeLatest(actionTypes.GET_HOTEL_DETAIL_REQUEST, getHotelDetailRequest);
}
export default function* authsaga() {
    yield all([fork(register), fork(login), fork(getAllHotels), fork(getHotelDetail)]);
}
