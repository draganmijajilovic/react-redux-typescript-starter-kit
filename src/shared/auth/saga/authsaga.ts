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
        // TODO catch error
        // yield put(actionTypes.fetchLoginAsync.failure(error));
    }
}

function* registerRequest(action: any): Generator {
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
        if (response) {
            yield put(getAllHotelsSuccess(response));
        }
    } catch (error) {
        yield put(registerError());
    }
}

function* getHotelDetailRequest(action: any): Generator {
    try {
        const response: any = yield api.getHotelDetails(action?.payload);
        if (response) {
            yield put(getHotelDetailSuccess(response));
        }
    } catch (error) {
        yield put(registerError());
    }
}

function* addNewHotelRequest(action: any): Generator {
    try {
        const response: any = yield api.addHotel(action?.payload);
        if (response) {
            return response;
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

function* addNewHotel() {
    yield takeLatest(actionTypes.ADD_NEW_HOTEL, addNewHotelRequest);
}
export default function* authsaga() {
    yield all([fork(register), fork(login), fork(getAllHotels), fork(getHotelDetail), fork(addNewHotel)]);
}
