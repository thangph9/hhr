import { userConstants } from "../constants";
export function memberDetail(state={},action){
    switch(action.type){
        case userConstants.GET_IMAGE_MEMBER_REQUEST:
            return {
                
            }
        case userConstants.GET_IMAGE_MEMBER_SUCCESS:
            return {
                
            }
        case userConstants.GET_IMAGE_MEMBER_FAILURE:
            return {
                
            }   
        case userConstants.GETMEMBERS_REQUEST:
           return {
               loading:true
           };
        case userConstants.GETMEMBERS_SUCCESS:
           return{
              item:action.user 
           };
        case userConstants.GETMEMBERS_FAILURE:
           return {
              error:action.error 
           };
        
        default:
            return state;
    }
}