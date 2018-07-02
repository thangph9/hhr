import { userConstants } from "../constants";
export function userDetails(state={},action){
    switch(action.type){
        case userConstants.GETMEMBER_DETAIL_REQUEST:
            return {
                loading: true
            }
        case userConstants.GETMEMBER_DETAIL_SUCCESS:
            return {
                user: action.user
            }
        case userConstants.GETMEMBER_DETAIL_FAILURE:
            return {
                error: action.error
            }
        default :
            return state;
            
    }
}