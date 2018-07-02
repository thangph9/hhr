import { userConstants } from "../constants";
export function memberActive(state={},action){
    switch(action.type){
        case userConstants.GETMEMBER_ACTIVE_REQUEST:
           return {
               loading: true
           };
        case userConstants.GETMEMBER_ACTIVE_SUCCESS:
           return {
               items:action.users
           };
        case userConstants.GETMEMBER_ACTIVE_FAILURE:
           return{
              error: action.error 
           };
        case userConstants.ADD_LIKE_MEMBER_SUCCESS:
            
            if(state.items && state.items.users && action.user && action.user.status)
            {
                let users   =state.items.users;
                let newarr  =users.filter((user,i) =>
                   state.items.users[i] = (action.user.result[0].user_id == user.user_id) ? action.user.result[0] : user);
                
                //state.items.users.push(action.user.result);
                //console.log(action.user);
                
            }
            return {
                ...state
            }
        case userConstants.DELETE_LIKE_MEMBER_SUCCESS:
            if(state.items && state.items.users && action.user && action.user.status)
            {
                let users   =state.items.users;
                let newarr  =users.filter((user,i) =>{
                        if(action.user.result[0].like_id == user.user_id){
                           state.items.users[i].liked   =false;
                           state.items.users[i].id_like =null;   
                            //console.log(state.items.users[i]);
                        }
                   // return state.items.users[i];    
                });
                   
                
                //state.items.users.push(action.user.result);
                //console.log(state);
                
            }
            return{
                ...state
            }
        default:
            return state;
    }
}