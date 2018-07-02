import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { RegisterMemberItem } from "./register.member.item";
import { userActions } from "../actions";
class RegisterMemberList extends React.Component{
    componentDidMount(){
        this.props.dispatch(userActions.getMemberRegister());
    }
    render(){
        
        return (
             <div className="row">
                <RegisterMemberItem />
                <RegisterMemberItem />
                <RegisterMemberItem />
                <RegisterMemberItem />
                <RegisterMemberItem />
                <RegisterMemberItem />
             </div>
        )
    }
}
function mapStateToProps(state){
    return state;
}
const connectedRegisterMemberList=connect(mapStateToProps)(RegisterMemberList);
export { connectedRegisterMemberList as RegisterMemberList } 