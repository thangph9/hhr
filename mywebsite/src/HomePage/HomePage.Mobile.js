import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { LoginFormMobile,RegisterFormMobile } from "./index";
import { pageActions,userActions } from "../actions";
class HomePageMobile extends React.Component{
    
    render(){
    return (
    <div className="tw3-homepage--abstract tw3-homepage--abstract--mobile">
       <RegisterFormMobile />
       <LoginFormMobile />
    </div>

            )
        }
}
function mapStateToProps(state){
    const {page} = state;
    return {page};
}
const connectedHomePage=connect(mapStateToProps)(HomePageMobile);
export { connectedHomePage as HomePageMobile } 