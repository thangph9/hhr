import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
class MemberActiveSearchItem extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        //this.props.dispatch(userAction.All());
    }
    render(){
        
        return (
             <div className="col-md-2">
                        <div className="active_mem_item">
                            <ul className="nav navbar-nav">
                                <li className="dropdown tool_hover">
                                <a href="#linklinklinklink" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><img className="img-circle" src="img/members/active-mem/active-mem-1.png" alt="" /></a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <div className="head_area">
                                                <h4>Lara Davis</h4>
                                                <h4>53% Match</h4>
                                            </div>
                                            <div className="media">
                                                <div className="media-left">
                                                    <img src="img/photo/people-p/people-drop-3.png" alt="" />
                                                </div>
                                                <div className="media-body">
                                                    <h6>29 years old <br /> From Derby <br /> Single</h6>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <h4>Maria Doe</h4>
                            <h5>22 years old</h5>
                        </div>
                    </div>
        )
    }
}
function mapStateToProps(state){
    return state;
}
const connectedMemberActiveSearchItem=connect(mapStateToProps)(MemberActiveSearchItem);
export { connectedMemberActiveSearchItem as MemberActiveSearchItem } 