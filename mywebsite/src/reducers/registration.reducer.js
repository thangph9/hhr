import { userConstants } from "../constants";

export function registration(state={},action){
    switch(action.type){
        case userConstants.REGISTER_REQUEST:
            return {
                registering: true
            };
        case userConstants.REGISTER_SUCCESS:
            return {};
        case userConstants.REGISTER_FAILURE:
            return {};
        case userConstants.GET_PHONE_REQUEST:
            return {
                check: true
            };
        case userConstants.GET_PHONE_SUCCESS:
            return {
                phone: action.status
            };
        case userConstants.GET_PHONE_FAILURE:
            return {};
        default:
            return state;
    }
}