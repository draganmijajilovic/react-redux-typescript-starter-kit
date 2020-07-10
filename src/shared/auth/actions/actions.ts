import { createAsyncAction, ActionType } from 'typesafe-actions';
import { UserAuthInfo } from '../types/userAuthInfo';

/*
 *  THE FOLLOWING CODES DENOTES TO DO ASYNC ACTIONS
 */
const actionTypes = {
    REGISTER_REQUEST: '@AUTH/REGISTER_REQUEST',
    REGISTER_SUCCESS: '@AUTH/REGISTER_SUCCESS',
    REGISTER_ERROR: '@AUTH/REGISTER_ERROR',
    LOGIN_REQUEST: '@AUTH/LOGIN_SUCCESS',
    LOGIN_SUCCESS: '@AUTH/LOGIN_REQUEST',
    LOGIN_ERROR: '@AUTH/LOGIN_ERROR',
};
export default actionTypes;

// export const fetchLoginAsync = createAsyncAction(
//     '@AUTH/LOGIN_REQUEST',
//     '@AUTH/LOGIN_SUCCESS',
//     '@AUTH/LOGIN_FAILURE',
//     '@AUTH/LOGIN_CANCEL',
// )<undefined, UserAuthInfo, Error, string>();
// types.LoginDetails

export const fetchLogoutAsync = createAsyncAction(
    '@AUTH/LOGOUT_REQUEST',
    '@AUTH/LOGOUT_SUCCESS',
    '@AUTH/LOGOUT_FAILURE',
    '@AUTH/LOGOUT_CANCEL',
)<undefined, boolean, Error, string>();

export const fetchRegisterAsync = createAsyncAction(
    '@AUTH/REGISTER_REQUEST',
    '@AUTH/REGISTER_SUCCESS',
    '@AUTH/REGISTER_FAILURE',
    '@AUTH/REGISTER_CANCEL',
)<undefined, UserAuthInfo, Error, string>();

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

// export type authActionTypes = ActionType<typeof fetchLoginAsync | typeof fetchLogoutAsync | typeof fetchRegisterAsync>;
