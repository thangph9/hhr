import {imageConstants } from "../constants";
export function imageUpload(state={},action){
    switch(action.type){
        case imageConstants.UPLOAD_IMAGES_BY_USER_REQUEST:
            return {
                adding: true,
                image : action.image
            };
        case imageConstants.UPLOAD_IMAGES_BY_USER_FAILURE:
            return {
                image : action.image,
                error : action.error, 
            }
        case imageConstants.UPLOAD_IMAGES_BY_USER_SUCCESS:
            
            return {
                image : action.image,
            } 
        case imageConstants.UPDATE_IMAGES_BY_USER_REQUEST:
            return {
                updating : true,
            } 
        case imageConstants.UPDATE_IMAGES_BY_USER_SUCCESS:
            return {
                image : action.image,
            } 
        case imageConstants.UPDATE_IMAGES_BY_USER_FAILURE:
            return {
                error: action.error
            } 
        case imageConstants.DELETE_IMAGES_BY_USER_REQUEST:
            return {
                updating : true,
            } 
        case imageConstants.DELETE_IMAGES_BY_USER_SUCCESS:
            return {
                image : action.image,
            } 
        case imageConstants.DELETE_IMAGES_BY_USER_FAILURE:
             return {
                error: action.error
            } 
        
        default:
            return state;
    }
}