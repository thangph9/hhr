import { imageConstants } from "../constants";

export function imageMember(state={},action){
    
    switch(action.type){
        case imageConstants.GET_IMAGE_MEMBER_REQUEST:
            return {
                loading:true
            }
        case imageConstants.GET_IMAGE_MEMBER_SUCCESS:
            
            return {
                image:action.images
            }
        case imageConstants.GET_IMAGE_MEMBER_FAILURE:
            return {
                error: action.error
            }    
        default:
            return state;
    }
}