import React from "react";
import { connect } from "react-redux";

class _TextArea extends React.Component{
    render(){
        return (<div></div>)
    }
}
function mapStateToProps(state){
            return state;
        }
const connected = connect(mapStateToProps)(_TextArea);
export { connected  as _TextArea}