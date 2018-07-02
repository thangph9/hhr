import { userConstants,imageConstants,pageConstants } from "../constants";

export function users(state = {} ,action){
   switch(action.type){
       
              
        case userConstants.GET_USER_REQUEST:
           return {
               loading: true
           };
        case userConstants.GET_USER_SUCCESS:
           return {
               item:action.users
           };
        case userConstants.GET_USER_FAILURE:
           return {
               error: action.error
           };   
              
        case userConstants.GETREGISTER_MEMBER_REQUEST:
           return {
               loading: true
           };
        case userConstants.GETREGISTER_MEMBER_SUCCESS:
           return {
               items:action.users
           };
        case userConstants.GETREGISTER_MEMBER_FAILURE:
           return {
               error: action.error
           };
        case userConstants.UPDATE_USER_SUCCESS:
           return {
               ...state,
           };
           
        case userConstants.DELETE_REQUEST:
           return{
               ...state,
               items: state.items.map(user=>
                    user.id === action.id
                    ? {...user, deleting: true} :
                    user
               ) 
           };
        case imageConstants.UPLOAD_IMAGES_BY_USER_SUCCESS:
            //const update=action.image;
            if(action.image.status && action.image.result.type=='previewThumbnail'){
                 state.item.user[0].preview_thumbnail=action.image.result.image_id;
            }
           
            return {
                item:{ ...state.item }
            }
        case pageConstants.UPDATE_PREVIEW_THUMBNAIL:
            //const update=action.image;
            state.item.user[0].preview_thumbnail=action.image;
            return {
                item:{ ...state.item }
            }
        case userConstants.DELETE_SUCCESS:
           return{
              items: state.items.filter(user => user.id !==action.id) 
           };
        case userConstants.DELETE_FAILURE:
           return{
               ...state,
               items: state.item.map(user=> {
                    if(user.id === action.id ){
                        const { deleting, ...userCopy} = user;
                        return { ...userCopy, deleteError: action.error };
                    }
                    return user;
                })
                
           };
        case userConstants.SEARCH_REQUEST:
            return {
                searching:true,
            };
        case userConstants.SEARCH_SUCCESS:
            return {
                items:action.users 
            };
        case userConstants.SEARCH_FAILURE:
            return {
              error:action.error 
            };
        case userConstants.USER_FORGETPASSWORD_REQUEST:
            return {
                searching:true,
            };
        case userConstants.USER_FORGETPASSWORD_SUCCESS:
            return {
                phone:action.phone 
            };
         case userConstants.USER_FORGETPASSWORD_FAILURE:
            return {
              error:action.error 
            };
       default: 
           return state;
        
   }
}