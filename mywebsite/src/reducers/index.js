import { combineReducers } from "redux";
import { authentication } from "./authentication.reducer";
import { registration } from "./registration.reducer";
import { users } from "./users.reducer";
import { alert } from "./alert.reducer";
import { image } from "./image.reducer";
import { modal } from "./modal.reducer";
import { memberActive } from "./member.active.reducer";
import { imageUpload } from "./image.upload.reducer";
import { like } from "./like.reducer";
import { loadingBarReducer } from 'react-redux-loading-bar'
import { userDetails } from "./user.details.reducer";
import { page } from "./page.reducer";
import { userUpdate } from "./user.update.reducer";
import { user} from "./user.reducer";
import { imageMember } from "./image.member.reducer";
import { memberDetail } from "./member.reducer";
const rootReducer=combineReducers({
    authentication,
    registration,
    users,
    alert,
    image,
    modal,
    memberActive,
    imageUpload,
    like,
    userDetails,
    loadingBar: loadingBarReducer,
    page : page,
    userUpdate,
    user,
    imageMember,
    memberDetail
});
export default rootReducer;