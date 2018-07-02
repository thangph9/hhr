import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userActions } from "../actions";

class AlertTop extends React.Component{
    
    constructor(props){
        super(props);
    }
    render(){
        //console.log(this.props.alert);
        
        return(<div className="tw3-alertContainer--top jsAlertContainerTop">
        <div className="tw3-alertContainer--top__scroll jsAlertContainerTopScroll">
           
        </div>
    </div>
        )
    }
}
function mapStateToProps(state){
    const { image, authentication, alert} = state;
    return { image, authentication ,alert };
}
const connected=connect(mapStateToProps)(AlertTop);
export {connected as AlertTop};