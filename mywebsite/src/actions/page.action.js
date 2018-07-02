import { userConstants,imageConstants,pageConstants } from "../constants";
import { alertActions } from "./";
import { history } from "../store";
import { userService } from "../services";
export const pageActions={
    switchView,
    updateThumbnail,
    switchLogin,
}
function switchView(view){
    return dispatch=>{
        dispatch(request(view));
    }
    function request(view) {return { type: pageConstants.SWITCH_VIEW,view }};
}
function updateThumbnail(image){
    return dispatch=>{
        dispatch(request(image));
    }
    function request(image) {return { type: pageConstants.UPDATE_PREVIEW_THUMBNAIL,image }};
}
function switchLogin(view){
    return dispatch=>{
        dispatch(request(view));
    }
    function request(view) {return { type: pageConstants.SWITCH_VIEW,view }};
}