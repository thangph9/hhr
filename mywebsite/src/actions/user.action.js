import { userConstants,imageConstants } from "../constants";
import { alertActions } from "./";
import { history } from "../store";
import { userService } from "../services";
export const userActions={
    login,
    logout,
    register,
    getMemberById,
    getMemberActive,
    getMemberRegister,
    getImageByUser,
    getImageByMember,
    getLikeMember,
    getUserById,
    getPhone,
    addLikeMember,
    addLikeByUser,
    forgetPassword,
    likeByUser,
    getMemberDetails,
    uploadImageByUser,
    updateUser,
    updateImageByUser,
    deleteImageByUser,
    search,
    updateDetails,
    deleteLikeByUser,
    deleteLikeMember,
    delete: _delete
}
function login(username,password,return_url){
    
    return dispatch=> {
        dispatch(request({username}));
        userService.login(username,password,return_url)
            .then( 
            
                user => {
                    dispatch(alertActions.clear());
                    dispatch(success(user));
                    if(user.status){
                        //history.push("/");
                    }else{
                        dispatch(alertActions.error(user.message));
                    }
                },
                error=>{
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            )
        
    }
    function request(user){ return {type : userConstants.LOGIN_REQUEST, user } }
    function success(user){ return {type : userConstants.LOGIN_SUCCESS, user } }
    function failure(error){ return {type : userConstants.LOGIN_FAILURE, error } }
    
}
function logout(){
    userService.logout()
    //history.push("/");
    return { type : userConstants.LOGOUT }
}
function register(user){
    return dispatch => {
        dispatch(request(user));
        userService.register(user)
            .then(
                user=>{
                    dispatch(alertActions.clear());
                    dispatch(success(user));
                    if(user.status){
                        history.push('/search');
                    }else{
                        dispatch(alertActions.error(user.message));
                    }
                },
                error=>{
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
                
        );
    }
    function request(user) { return {type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return {type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return {type: userConstants.REGISTER_FAILURE, error } }
}
function getMemberById(id){
    return dispatch=>{
        dispatch(request(id));
        userService.getMemberById(id)
            .then(
                users   => {
                    dispatch(success(users)) 
                },
                error   => dispatch(failure(error))
                
        )
    }
    function request(id){ return {type:userConstants.GETMEMBERS_REQUEST,id}}
    function success(user) { return { type: userConstants.GETMEMBERS_SUCCESS,user}}
    function failure(error) { return {type: userConstants.GETMEMBERS_FAILURE }}
}
function getMemberDetails(id){
    return dispatch=>{
        dispatch(request(id));
        userService.getMemberDetails(id)
            .then(
                user    => dispatch(success(user)),
                error   => dispatch(failure(error))
        )
    }
    function request(id) { return {type: userConstants.GETMEMBER_DETAIL_REQUEST,id}};
    function success(user){ return { type: userConstants.GETMEMBER_DETAIL_SUCCESS,user}};
    function failure(error){ return { type: userConstants.GETMEMBER_DETAIL_FAILURE,error}}; 
    
}

function getMemberRegister(){
    return dispatch=>{
        dispatch(request());
        userService.getRegisterMember()
            .then(
                users   => {
                        dispatch(success(users.users))
                },
                error   => dispatch(failure(error)),
        )
    }
    function request() { return { type: userConstants.GETREGISTER_MEMBER_REQUEST }}
    function success(users) { return { type: userConstants.GETREGISTER_MEMBER_SUCCESS,users}}
    function failure(error) { return { type: userConstants.GETREGISTER_MEMBER_FAILURE,error}}
}
function getMemberActive(page,user_id){
    return dispatch=>{
        dispatch(request(page));
        userService.getMemberActive(page,user_id)
            .then(
                users   =>  dispatch(success(users)),
                error   =>  dispatch(failure(error))
        )
    }
    function request(page){return {type: userConstants.GETMEMBER_ACTIVE_REQUEST,page}}
    function success(users){ return {type: userConstants.GETMEMBER_ACTIVE_SUCCESS, users}}
    function failure(error) { return { type: userConstants.GETMEMBER_ACTIVE_FAILURE,error}}
}
function getImageByUser(id){
    return dispatch=>{
        dispatch(request(id));
        userService.getImageByUser(id)
            .then(
                users=>{
                    dispatch(success(users))
                },
                error=> dispatch(failure(error))
            )
    }
    function request(id) { return {type: imageConstants.IMAGES_BY_USER_REQUEST,id}}
    function success(images) { return { type: imageConstants.IMAGES_BY_USER_SUCCESS, images }}
    function failure(error) { return { type: imageConstants.IMAGES_BY_USER_FAILURE,error}}
}
function getImageByMember(id){
    return dispatch=>{
        dispatch(request(id));
        userService.getImageByUser(id)
            .then(
                users=>{
                
                    dispatch(success(users))
                },
                error=> dispatch(failure(error))
            )
    }
    function request(id) { return {type: imageConstants.GET_IMAGE_MEMBER_REQUEST,id}}
    function success(images) { return { type: imageConstants.GET_IMAGE_MEMBER_SUCCESS, images }}
    function failure(error) { return { type: imageConstants.GET_IMAGE_MEMBER_FAILURE,error}}
}
function getUserById(id){
    return dispatch=>{
        dispatch(request(id));
        userService.getMemberById(id)
            .then(
                users=>{
                    dispatch(success(users))
                },
                error=> dispatch(failure(error))
            )
    }
    function request(id) { return {type: userConstants.GET_USER_REQUEST,id}}
    function success(users) { return { type: userConstants.GET_USER_SUCCESS, users }}
    function failure(error) { return { type: userConstants.GET_USER_FAILURE,error}}
}

function forgetPassword(phone){
    return dispatch=>{
        dispatch(request(phone));
        userService.forgetPassword(phone)
            .then(
                users=>{
                    dispatch(success(users))
                },
                error=> dispatch(failure(error))
            )
    }
    function request(phone) { return {type: userConstants.USER_FORGETPASSWORD_REQUEST,phone}}
    function success(phone) { return { type: userConstants.USER_FORGETPASSWORD_SUCCESS, phone }}
    function failure(error) { return { type: userConstants.USER_FORGETPASSWORD_FAILURE,error}}
}
function uploadImageByUser(image){
    return dispatch=> {
        dispatch(request(image));
        userService.uploadImageByUser(image).then(
            users=> dispatch(success(users)),
            error=> dispatch(failure(image,error))
        )
    }
    function request(image) { return {type: imageConstants.UPLOAD_IMAGES_BY_USER_REQUEST,image}}
    function success(image) { return {type: imageConstants.UPLOAD_IMAGES_BY_USER_SUCCESS,image}}
    function failure(image,error) { return {type: imageConstants.UPLOAD_IMAGES_BY_USER_FAILURE,image,error}}
}
function getLikeMember(){
    return dispatch=>{
        dispatch(request());
        userService.getLikeMember()
            .then(
                users=>{
                    dispatch(success(users))
                },
                error => dispatch(failure(error))
        )
    }
    function request() { return { type : userConstants.GET_LIKE_MEMBER_REQUEST }}
    function success(users) { return {type: userConstants.GET_LIKE_MEMBER_SUCCESS,users}}
    function failure(error) { return {type: userConstants.GET_LIKE_MEMBER_FAILURE,error}}
}
function addLikeMember(user){
    return dispatch=>{
        dispatch(request(user));
        userService.addLikeMember(user)
            .then(
                like=> dispatch(success(like)),
                error=> dispatch(failure(error)) 
        )
    }
    function request(user) { return { type: userConstants.ADD_LIKE_MEMBER_REQUEST,user }}
    function success(user) { return { type: userConstants.ADD_LIKE_MEMBER_SUCCESS,user}}
    function failure(error) { return { type: userConstants.ADD_LIKE_MEMBER_FAILURE,error}}
}
function addLikeByUser(user){
    return dispatch=>{
        dispatch(request(user));
        userService.addLikeMember(user)
            .then(
                like    => dispatch(success(like)),
                error   => dispatch(failure(error))
        )
    }
    function request(user){ return { type: userConstants.ADD_LIKE_REQUEST,user}};
    function success(user){ return { type: userConstants.ADD_LIKE_SUCCESS,user}};
    function failure(user){ return { type: userConstants.ADD_LIKE_FAILURE,user}};
}
function deleteLikeByUser(user){
    return dispatch=>{
        dispatch(request(user));
        userService.deleteLikeMember(user)
            .then(
                like    => dispatch(success(like)),
                error   => dispatch(failure(error))
        )
    }
    function request(user){ return { type: userConstants.DELETE_LIKE_REQUEST,user}};
    function success(user){ return { type: userConstants.DELETE_LIKE_SUCCESS,user}};
    function failure(user){ return { type: userConstants.DELETE_LIKE_FAILURE,user}};
}
function likeByUser(id,like_id){
    return dispatch=>{
        dispatch(request());
        userService.likeByUser(id,like_id)
            .then(
            like    => dispatch(success(like)),
            error   => dispatch(failure(error)) 
        )
    }
    function request(){ return { type: userConstants.LIKE_BY_USER_REQUEST}};
    function success(user) { return { type: userConstants.LIKE_BY_USER_SUCCESS,user}}
    function failure(error){ return { type: userConstants.LIKE_BY_USER_SUCCESS,error}}
}
function updateUser(user){
    return dispatch=> {
        dispatch(request(user));
        userService.updateUser(user).then(
            users=> dispatch(success(users)),
            error=> dispatch(failure(error))   
        )
    }
    function request(user) { return { type: userConstants.UPDATE_USER_REQUEST,user}}
    function success(user) { return { type: userConstants.UPDATE_USER_SUCCESS,user}}
    function failure(error){ return { type: userConstants.UPDATE_USER_FAILURE,error}}
}
function updateDetails(user){
     return dispatch=> {
        dispatch(request(user));
        userService.updateDetails(user).then(
            users=> dispatch(success(users)),
            error=> dispatch(failure(error))   
        )
    }
    function request(user) { return { type: userConstants.UPDATE_DATAIL_REQUEST,user}}
    function success(user) { return { type: userConstants.UPDATE_DATAIL_SUCCESS,user}}
    function failure(error){ return { type: userConstants.UPDATE_DATAIL_FAILURE,error}}
}
function deleteLikeMember(user){
    return dispatch => {
        dispatch(request(user));
        userService.deleteLikeMember(user)
            .then(
                like=> dispatch(success(like)),
                error=> dispatch(failure(error))
        )
    }
    function request(user) { return { type: userConstants.DELETE_LIKE_MEMBER_REQUEST,user}}
    function success(user) { return { type: userConstants.DELETE_LIKE_MEMBER_SUCCESS, user }}
    function failure(error) { return { type: userConstants.DELETE_LIKE_MEMBER_FAILURE,error}}
}
function search(condition){
    return dispatch=>{
        dispatch(request(condition));
        userService.search(condition)
            .then(
                users=>dispatch(success(users)),
                error=> dispatch(failure(error))
            )
    }
    function request() { return {type: userConstants.SEARCH_REQUEST }}
    function success(user) { return {type: userConstants.SEARCH_SUCCESS,user}}
    function failure(error) { return {type: userConstants.SEARCH_FAILURE,error}}
}
function updateImageByUser(image){
    return dispatch =>{
        dispatch(request(image));
        userService.updateImageByUser(image)
            .then(
                users => {
                    dispatch(success(users));
                    if(users.status){
                        dispatch(alertActions.openTop({className: 'test',content: 'Xin chao'}));
                    }
                },
                error => dispatch(failure(error)),
            )
        
    }
    function request(image) { return { type: imageConstants.UPDATE_IMAGES_BY_USER_REQUEST,image }}
    function success(image) { return { type: imageConstants.UPDATE_IMAGES_BY_USER_SUCCESS,image }}
    function failure(error) { return { type: imageConstants.UPDATE_IMAGES_BY_USER_FAILURE,error }}
}
function getPhone(phone,callback){
    return dispatch =>{
        userService.getPhone(phone)
            .then(
                registration => {
                  callback(null,registration)
                },
                error =>{
                  callback(error,null)
                } ,
            )
        
    }
}
function deleteImageByUser(image){
    return dispatch=>{
        dispatch(request(image));
        userService.deleteImageByUser(image)
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error)),
            )
    }
    function request(image) { return { type: imageConstants.DELETE_IMAGES_BY_USER_REQUEST,image }}
    function success(image) { return { type: imageConstants.DELETE_IMAGES_BY_USER_SUCCESS,image }}
    function failure(error) { return { type: imageConstants.DELETE_IMAGES_BY_USER_FAILURE,error }}
}
function _delete(id){
    return dispatch =>{
        dispatch(request(id));
        userService.delete(id)
            .then(
            user=>{
                dispatch(success(id));
            },
            error=>{
                dispatch(failure(id, error));
            }
        )
    }
    function request(id) {return {type: userConstants.DELETE_REQUEST, id }}
    function success(id) {return {type: userConstants.DELETE_SUCCESS, id }}
    function failure(id, error) { return {type: userConstants.DELETE_FAILURE,id ,error}}
}