import React from "react";
import { connect } from "react-redux";
class Image extends React.Component{
    
    
    render(){
        return (
            <div></div>
        )
    }
}
function mapStateToProps(state){
    return state;
}
const connectedImage=connect(mapStateToProps)(Image);
export { connectedImage  as Image};