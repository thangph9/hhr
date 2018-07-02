import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { RegisterFormPage } from "./RegisterFormPage";
import { BannerV1 } from "../sections";
class RegisterPage extends React.Component{
    componentDidMount(){
        //this.props.dispatch(userAction.All());
    }
    render(){
        
        return (
            <div>
                <BannerV1 />
                <RegisterFormPage />
            </div>
        );
    }
}
function mapStateToProps(state){
    return state;
}
const connectedRegisterPage=connect(mapStateToProps)(RegisterPage);
export { connectedRegisterPage as RegisterPage } 