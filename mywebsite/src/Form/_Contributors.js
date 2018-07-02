import React from "react";
import { connect } from "react-redux";

class _Contributors extends React.Component{
    render(){
        return (<div></div>)
    }
}
function mapStateToProps(state){
            return state;
        }
const connected = connect(mapStateToProps)(_Contributors);
export { connected  as _Contributors}