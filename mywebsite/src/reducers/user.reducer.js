import { userConstants } from "../constants";

export function user(state = {} ,action){
    switch(action.type){
         case userConstants.GETMEMBERS_REQUEST:
           return {
               loading:true
           };
        default:
            return state;
    }
}