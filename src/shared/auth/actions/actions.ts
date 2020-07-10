const actionTypes = {
    REGISTER_REQUEST: '@AUTH/REGISTER_REQUEST',
    REGISTER_SUCCESS: '@AUTH/REGISTER_SUCCESS',
    REGISTER_ERROR: '@AUTH/REGISTER_ERROR',
    LOGIN_REQUEST: '@AUTH/LOGIN_SUCCESS',
    LOGIN_SUCCESS: '@AUTH/LOGIN_REQUEST',
    LOGIN_ERROR: '@AUTH/LOGIN_ERROR',
    GET_ALL_HOTElS: '@HOTELS/GET_ALL_HOTELS',
    GET_ALL_HOTElS_SUCCESS: '@HOTELS/GET_ALL_HOTELS_SUCCESS',
    GET_HOTEL_DETAIL_REQUEST: '@HOTELS/GET_HOTEL_DETAIL_REQUEST',
    GET_HOTEL_DETAIL_SUCCESS: '@HOTELS/GET_HOTEL_DETAIL_SUCCESS',
    ADD_NEW_HOTEL: '@HOTELS/ADD_NEW_HOTEL',
};
export default actionTypes;

export function register(data: any) {
    return {
        type: actionTypes.REGISTER_REQUEST,
        payload: data,
    };
}
export function registerSuccess(data: any) {
    return {
        type: actionTypes.REGISTER_SUCCESS,
        payload: data,
    };
}
export function registerError() {
    return {
        type: actionTypes.REGISTER_ERROR,
    };
}
export function login(data: any) {
    return {
        type: actionTypes.LOGIN_REQUEST,
        payload: data,
    };
}

export function loginSuccess(data: any) {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        payload: data,
    };
}

export function loginError() {
    return {
        type: actionTypes.LOGIN_ERROR,
    };
}

export function getAllHotels() {
    return {
        type: actionTypes.GET_ALL_HOTElS,
    };
}
export function getAllHotelsSuccess(data: any) {
    return {
        type: actionTypes.GET_ALL_HOTElS_SUCCESS,
        payload: data,
    };
}
export function getHotelDetail(data: any) {
    return {
        type: actionTypes.GET_HOTEL_DETAIL_REQUEST,
        payload: data,
    };
}
export function getHotelDetailSuccess(data: any) {
    return {
        type: actionTypes.GET_HOTEL_DETAIL_SUCCESS,
        payload: data,
    };
}

export function addNewHotel(data: any) {
    return {
        type: actionTypes.ADD_NEW_HOTEL,
        payload: data,
    };
}
// export type authActionTypes = ActionType<typeof fetchLoginAsync | typeof fetchLogoutAsync | typeof fetchRegisterAsync>;
