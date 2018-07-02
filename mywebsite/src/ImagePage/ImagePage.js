import React from "react";
import { Router,Route, Switch } from "react-router-dom";

import { connect } from "react-redux";
import { Modal } from "./Modal";
import { Gallery } from "./Gallery";
class ImagePage extends React.Component{
    
    previousLocation    =this.props.location;

    componentWillUpdate(nextProps){
        const { location } = this.props;
        if(nextProps.history.action !=="POP" && 
           (!location.state || !location.state.modal)    
          ){
            this.previousLocation = this.props.location;
        }
    }
    
    render(){
        const { location }  = this.props;
        const { isModal }   =!!(
        location.state && 
        location.state.modal &&
        this.previousLocation !=location
        ) 
        const {user_id }= this.props;
        
        return (
            <div>
                
            </div>
        )
    }
}
function mapStateToProps(state){
    return state;
}
const connectedImageModal=connect(mapStateToProps)(ImagePage);
export {connectedImageModal as ImagePage}; 