import { alertConstants } from "../constants";
const initialState={
    alerts:[]
}
export function alert(state=initialState,action){
    switch (action.type){
        case alertConstants.SUCCESS:
            return {
                type: 'alert-success',
                message:action.message
            };
        case alertConstants.ERROR:
            return {
                type: 'alert-error',
                message:action.message
            };
        case alertConstants.OPEN_TOP:
            return {
                ...state,
                alerts:
                state.alerts.concat(action.obj)
            };
        case alertConstants.CLOSE_TOP:
            return {};
        case alertConstants.OPEN_BOTTOM:
            return {
                ...state,
                alerts:
                state.alerts.concat(action.obj)
            };
        case alertConstants.CLOSE_BOTTOM:
            return {};
            
        default:
            return state;
    }
}