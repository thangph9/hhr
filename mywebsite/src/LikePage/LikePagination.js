import React from "react";
import {connect } from "react-redux";

class LikePagination extends React.Component{
    render(){
        return(
            <div></div>
        )
    }
}
function mapStateToProps(state){
    return state;
}
const connected = connect(mapStateToProps)(LikePagination);
export { connected as LikePagination };