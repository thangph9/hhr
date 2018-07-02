import React from "react";
import { connect } from "react-redux";
import {FamilyFriend, Favourites, Figure, Personality, Asset, WorkEducation, Basic} from "./index";
import {pageActions,userActions} from "../actions";
class EditDetail extends React.Component{
    constructor(props){
        super(props);
        this.handleSwitchView=this.handleSwitchView.bind(this);
    }
    handleSwitchView(){
        const {dispatch,authentication } = this.props;
        dispatch(pageActions.switchView('details'));
        dispatch(userActions.getMemberDetails(authentication.user.user_id));
        
    }
    render(){
        return(
            <div className="jsView">
                <div className="tw3-profile__header">
                <a href="javascript://" className="jsSwitchView" onClick={this.handleSwitchView}><i className="tw3-iconArrowLeft tw3-iconMedium mr--compact el--vam"></i></a>
                Hồ sơ chi tiết
                </div>
                <Basic />
                <hr className="tw3-hr mb--default" />
                <Figure />
                <hr className="tw3-hr mb--default" />
                <Favourites />
                <hr className="tw3-hr mb--default" />
                <Personality />
                <hr className="tw3-hr mb--default" />
                <WorkEducation />
                <hr className="tw3-hr mb--default" />
                <Asset />
                <hr className="tw3-hr mb--default" />
                <FamilyFriend />
            </div>
        )
    }
}
function mapStateToProps(state){
    return state;
}
const connected=connect(mapStateToProps)(EditDetail);
export { connected as EditDetail}