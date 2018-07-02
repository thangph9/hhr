import { userConstants } from "../constants";
export function like(state={},action){
    switch(action.type){
        case userConstants.GET_LIKE_MEMBER_REQUEST:
            return {
                loading: true,
            };
        case userConstants.GET_LIKE_MEMBER_SUCCESS:
            return {
                like: action.user
            }
        case userConstants.GET_LIKE_MEMBER_FAILURE:
            return {
                error: action.error
            }
        case userConstants.ADD_LIKE_MEMBER_REQUEST:
            return{
                adding: true
            }
        case userConstants.ADD_LIKE_MEMBER_SUCCESS:
            
            
            return {
                like: action.user
            }
        case userConstants.ADD_LIKE_MEMBER_FAILURE:
            return {
                error: action.error      
            }
        case userConstants.LIKE_BY_USER_REQUEST:
            return {
                loading: true     
            }
        case userConstants.LIKE_BY_USER_SUCCESS:
            return {
                like: action.user      
            }
        case userConstants.LIKE_BY_USER_FAILURE:
            return {
                error: action.error      
            }
        case userConstants.ADD_LIKE_REQUEST:
            return {
                adding  : true,
                like    : action.user
            }
        case userConstants.ADD_LIKE_SUCCESS:
            return {
                like    : action.user
            }
        case userConstants.ADD_LIKE_SUCCESS:
            return {
                error    : action.error
            }
        case userConstants.DELETE_LIKE_REQUEST:
            return {
                deleting    : true
            }
        case userConstants.DELETE_LIKE_SUCCESS:
            return {} 
        case userConstants.DELETE_LIKE_FAILURE:
            return {
                error    : action.error
            } 
        case userConstants.DELETE_LIKE_MEMBER_SUCCESS:
            return{
                deleting: true
            };
        case userConstants.DELETE_LIKE_MEMBER_SUCCESS:
            return {};
        case userConstants.DELETE_LIKE_MEMBER_FAILURE:
            return {
                error: action.error
            }
        default :
            return state;
    }
}