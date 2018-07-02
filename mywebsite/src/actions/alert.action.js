import { alertConstants } from "../constants";
export const alertActions={
    success,
    error,
    clear,
    openBottom,
    closeBottom,
    openTop,
    closeTop,
}
function success(message){
    return {type: alertConstants.SUCCESS, message};
}
function error(message){
    return { type: alertConstants.ERROR,message};
}
function clear(){
    return { type: alertConstants.CLEAR};
}
function openBottom(obj){
    return { type: alertConstants.OPEN_BOTTOM,obj};
}
function closeBottom(obj){
    return { type: alertConstants.CLOSE_BOTTOM,obj};
}
function openTop(obj){
    return { type: alertConstants.OPEN_TOP,obj};
}
function closeTop(obj){
    return { type: alertConstants.CLOSE_TOP,obj};
}
