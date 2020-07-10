import actionTypes from '../actions/actions';
import { UserState } from '../types';
import { getType } from 'typesafe-actions';
// import { fetchLoginAsync } from '../actions/actions';

const intialState: UserState = {
    isLoggedIn: false,
    user: {},
    hotels: [],
    hotelDetail: {},
    token: '',
};

const reducer = (state = intialState, action: any): UserState => {
    switch (action.type) {
        case actionTypes.REGISTER_SUCCESS:
            return { ...state, isLoggedIn: true, user: action?.payload?.data };
        case actionTypes.LOGIN_SUCCESS:
            return { ...state, isLoggedIn: true, user: action?.payload?.data };
        case actionTypes.GET_ALL_HOTElS_SUCCESS:
            return { ...state, hotels: action?.payload?.data };
        case actionTypes.GET_HOTEL_DETAIL_SUCCESS:
            return { ...state, hotelDetail: action?.payload?.data };
        case actionTypes.REGISTER_ERROR:
        case actionTypes.LOGIN_ERROR:
            return intialState;
        default:
            return state;
    }
};

/*
 *  CHECK THE FOLLOWING CODE AFTER RELEASING THE DOC FOR V5
 */
// export const reducer = createReducer(intialState).handleAction(
//     fetchLoginAsync.success,
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     (state: any, action: any) => {
//         debugger;
//         return action.payload;
//     },
// );

export default reducer;
