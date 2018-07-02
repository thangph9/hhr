import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { LoginPopup } from "../sections";
import { LoginForm } from "./LoginForm"
class LoginPage extends React.Component{
    
    constructor(props){
        super(props);
    }
    render(){
        
        return (    
         <div> 
            <LoginForm query={this.props.location.search} />
         </div>
        )
    }
}
function mapStateToProps(state){
    return { state };
}
const connectedLoginPage=connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage } 