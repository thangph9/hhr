import React from "react";
import { connect} from "react-redux";
class Text extends React.Component{
    render(){
        return(
            <div></div>
        )
    }
}
function mapStateToProps(state){
    return state;
}
const connected=connect(mapStateToProps)(Text);
export {connected as Text};