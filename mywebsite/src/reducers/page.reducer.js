import pageConstants from "../constants";

export function page(state={},action){
    
    switch(action.type){
        case 'SWITCH_VIEW':
            return{
                view: action.view   
            }
        default:
            return state;
    }
    
}