import React from "react";
import { connect } from "react-redux";
class Thumbnail extends React.Component{
    
    render(){
        const { src }=this.props;
        return (  
        <img src={src} className="img-thumbnail"  style={{ width:"170px",height: "170px" ,display: "block", float: "left"}}/>
        )
    }
}
function mapStateToProps(state){
    return state;
}
const connectedThumbnail=connect(mapStateToProps)(Thumbnail)
export { connectedThumbnail as Thumbnail};