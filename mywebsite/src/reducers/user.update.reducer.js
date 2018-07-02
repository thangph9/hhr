import { userConstants } from "../constants";

export function userUpdate(state = {} ,action){
   switch(action.type){
        case userConstants.UPDATE_USER_REQUEST:
           return {
               updating: true
           };
        case userConstants.UPDATE_USER_SUCCESS:
           return {
               user:action.user
           };
        case userConstants.UPDATE_USER_FAILURE:
           return {
               error: action.error
           };
       default: 
           return state;
        
   }
}