import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userActions } from "../actions";

class AlertBottom extends React.Component{
    
    
    
    render(){
        
        return(
            <div className="jsAlertContainerBottom tw3-alertContainer--bottom">
               
            </div>
        )
    }
}
function mapStateToProps(state){
    const { image, authentication} = state;
    return { image, authentication };
}
const connected=connect(mapStateToProps)(AlertBottom);
export {connected as AlertBottom};