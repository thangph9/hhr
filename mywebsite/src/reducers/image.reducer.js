import { imageConstants } from "../constants";

export function image (state={},action){
    switch (action.type){
        
        case imageConstants.IMAGES_BY_USER_REQUEST:
                return {
                  loading: true  
                };
        case imageConstants.IMAGES_BY_USER_SUCCESS:
                return {
                    image: action.images
                };
        case imageConstants.IMAGES_BY_USER_FAILURE:
                return {
                    error: action.error
                };
        case imageConstants.UPLOAD_IMAGES_BY_USER_SUCCESS:
           //action.image.status
            //console.log(state);
            //console.log(action.image.result);
            const rs=action.image.result;
            //const oldState=state.image;
            const newResult=(action.image.status) ? state.image.images.concat(rs) : state.image;
            state.image.images=newResult;
            return{
                image: {...state.image}
            };
        case imageConstants.DELETE_IMAGES_BY_USER_SUCCESS:
            //console.log(action.image);
            let index=state.image.images.findIndex(x =>x.image_id==action.image.result.image_id);
            let del= (state.image.images.length > 0) ? state.image.images.splice(index,1) : '';
            console.log(state.image);
            return {
                image: {...state.image}
            }
        case imageConstants.UPDATE_IMAGES_BY_USER_SUCCESS:
            let idx=state.image.images.findIndex(x =>x.image_id==action.image.result.image_id);
            state.image.images[idx]=action.image.result;
            return {
                image: {...state.image}
            }
        case imageConstants.IMAGES_BY_ALBUM_USER_REQUEST:
            return {
                loading: true
            };
        case imageConstants.IMAGES_BY_ALBUM_USER_SUCCESS:
            return{
                images: action.images
            }
        case imageConstants.IMAGES_BY_ALBUM_USER_FAILURE:
            return {
                error: action.error
            };
        
        case imageConstants.ALBUM_BY_USER_REQUEST:
            return{
                loading: true
            }
        case imageConstants.ALBUM_BY_USER_SUCCESS:
            return{
                albums: action.album  
            };
        case imageConstants.ALBUM_BY_USER_FAILURE:
            return {
                error: action.error
            };
        default: return state;
    }
}