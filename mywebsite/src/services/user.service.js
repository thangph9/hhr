import { authHeader } from "../store";
export const userService= {
    login,
    logout,
    register,
    getMember,
    getMemberById,
    getMemberActive,
    getRegisterMember,
    getImageByUser,
    getAlbumsByUser,
    getLikeMember,
    getMemberDetails,
    getPhone,
    likeByUser,
    deleteLikeMember,
    addLikeMember,
    uploadImageByUser,
    deleteImageByUser,
    updateImageByUser,
    forgetPassword,
    updateUser,
    search,
    updateDetails,
    delete: _delete
}
const api={
    login           :"/user/authenticate",
    memberActive    :"/user/member/active",
    registerMember  :"/user/register/member",
    registration    :"/user/registration",
    search          :"/api/search",
    add_like_by_user:"/user/match/like",
    uploadImageByUser   :"/user/image/upload",
    updateDetails   : "/api/update/detail",
    deleteImageByUser: '/user/delete/image',
    updateImageByUser: '/user/update/image'
    
}
function login(username,password,return_url){
    const requestOptions={
        method:'POST',
        headers:{ 'Content-Type': 'application/json' },
        body:JSON.stringify({username,password,return_url})
    }
    return fetch(api.login,requestOptions)
        .then(response =>{
            if(!response.ok){
                return Promise.reject(response.statusText);
            }else {
                return response.json();
            }
        })
        .then(data=>{
            if ( data && data.user.token ){
                localStorage.setItem('user',JSON.stringify(data.user));
            } 
            return data;
        });
}
function logout(){
    localStorage.removeItem('user');
}
function getMember(){
    const requestOptions={
        method: 'GET',
    }
    return fetch(api.memberActive,requestOptions).then(handleResponse);
}
function getMemberActive(page,user_id){
    const requestOptions={
        method: 'POST',
        headers: {...authHeader(), 'Content-Type': 'application/json'},
        body: JSON.stringify({page: page,user_id: user_id})
    }
    return fetch(api.memberActive,requestOptions).then(handleResponse);
}
function getRegisterMember(){
    const requestOptions={
        method: 'GET',
    }
    return fetch(api.registerMember,requestOptions).then(handleResponse);
}
function getMemberById(id){
    
    const requestOptions={
        method: 'GET',
        headers: authHeader()
    }
    return fetch('/user/profile/'+id,requestOptions).then(handleResponse);
}
function getImageByUser(id){
    const requestOptions={
        method: 'GET',
        headers: authHeader()
    }
    return fetch('/images/'+id,requestOptions).then(handleResponse);
}
function getAlbumsByUser(id){
    const requestOptions={
        method: 'GET',
        headers: authHeader()
    }
    return fetch('/user/albums/'+id,requestOptions).then(handleResponse);
}
function addLikeMember(user){
    const requestOptions={
        method: 'POST',
        headers: {...authHeader(), 'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    }
    return fetch(api.add_like_by_user,requestOptions).then(handleResponse);
}
function deleteLikeMember(user){
    //console.log(user);
    const requestOptions={
        method: 'DELETE',
        headers: authHeader()
    }
    return fetch("/user/match/like/"+user.id_like+"/"+user.user_id+"/"+user.uuid,requestOptions).then(handleResponse);
}
function getLikeMember(id){
    const requestOptions={
        method: 'GET',
        headers: authHeader()
    }
    return fetch("/user/match/like/"+id,requestOptions).then(handleResponse);
}
function getMemberDetails(id){
    const requestOptions={
        method: 'GET',
        headers: authHeader()
    }
    return fetch("/user/member/details/"+id,requestOptions).then(handleResponse);
}
function likeByUser(id,like_id){
    const requestOptions={
        method: 'GET',
        headers: authHeader()
    }
    return fetch("/user/match/like/f/"+like_id+"/"+id,requestOptions).then(handleResponse);
}
function updateUser(user){
    const requestOptions={
        method: 'PUT',
        headers: {...authHeader(), 'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    }
    return fetch('/user/update',requestOptions).then(handleResponse);
}
function register(user){
    const requestOptions={
        method:'POST',
        headers:{ 'Content-Type' : 'application/json'},
        body:JSON.stringify(user)
    }
    return fetch(api.registration,requestOptions).then(response =>{
         if(!response.ok){
                return Promise.reject(response.statusText);
            }else {
                return response.json();
            }
        })
        .then(data=>{
            if ( data && data.user.token ){
                localStorage.setItem('user',JSON.stringify(data.user));
            } 
            return data;
        });   
}
function uploadImageByUser(image){
    
    var formData = new FormData();
    for (var p in image){
        formData.append(p,image[p]);
    }
    const requestOptions={
        method: 'POST',
        headers: authHeader(),
        body: formData 
    }
    return fetch(api.uploadImageByUser,requestOptions).then(handleResponse);    
}
function updateDetails(user){
    const requestOptions={
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json'}, 
        body: JSON.stringify(user) 
    }
    return fetch(api.updateDetails,requestOptions).then(handleResponse);
}
function deleteImageByUser(image){
    const requestOptions={
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json'}, 
        body: JSON.stringify(image) 
    }
    return fetch(api.deleteImageByUser,requestOptions).then(handleResponse);
}
function updateImageByUser(image){
    const requestOptions={
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json'}, 
        body: JSON.stringify(image) 
    }
    return fetch(api.updateImageByUser,requestOptions).then(handleResponse);
}
function search(condition){
    const requestOptions={
        method:'POST',
        headers:{ 'Content-Type' : 'application/json'},
        body:JSON.stringify(condition)
    }
    return fetch(api.search,requestOptions).then(handleResponse); 
}
function _delete(id){
    const requestOptions={
        method: 'DELETE',
        headers: authHeader(),
    }
    return fetch('/user/'+id,requestOptions).then(handleResponse);
}
function getPhone(phone){
    const requestOptions={
        method: 'GET',
    }
    return fetch("/phone/"+phone,requestOptions).then(handleResponse);
}
function forgetPassword(phone){
    const requestOptions={
        method: 'GET',
    }
    return fetch("/user/forgetpassword/"+phone,requestOptions).then(handleResponse);
}
function handleResponse(response){
    if(!response.ok){
        return Promise.reject(response.statusText);
    }
    return response.json();
    
}
