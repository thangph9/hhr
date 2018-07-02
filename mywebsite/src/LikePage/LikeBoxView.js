import React from "react";
import {connect } from "react-redux";
import { LikeListView,LikeRightSide } from "./index";
class LikeBoxView extends React.Component{
    render(){
        return(
            <div className="tw3-content">
                <div className="tw3-container">
                    <div className="tw3-row">
                        <LikeListView />
                        <LikeRightSide />
                    </div>
                </div>
                
            </div>
        )
    }
}
function mapStateToProps(state){
    return state;
}
const connected = connect(mapStateToProps)(LikeBoxView);
export { connected as LikeBoxView };