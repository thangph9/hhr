import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class MemberActiveItem extends React.Component{
    constructor(props){
        super(props);
        
    }
    componentDidMount(){
        //this.props.dispatch(userAction.All());
    }
    render(){
        const item={
            id:"1234123",
            imgThumb:"/img/members/active-members/a-members-4.png",
            imgPeople:"/img/photo/people-p/people-drop-6.png",
            name:"Lara Davis",
            match:"53% Match",
            old:"29 Tuoi",
            relationship:"Doc than",
            address:"Ha noi"
        };
        
        return (
             <div className="col-sm-2 col-sm-6">
                        <div className="active_mem_item">
                            <ul className="nav navbar-nav">
                                <li className="dropdown tool_hover">
                                <Link to={`/profile/${item.id}`} className="dropdown-toggle" ><img src={item.imgThumb} alt="" /></Link>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <div className="head_area">
                                                <h4>{item.name}</h4>
                                                <h4>{item.match}</h4>
                                            </div>
                                            <div className="media">
                                                <div className="media-left">
                                                    <img src={item.imgPeople} alt="" />
                                                </div>
                                                <div className="media-body">
                                                    <h6>{item.old} <br /> {item.address} <br /> {item.relationship}</h6>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <h4>{item.name}</h4>
                            <h5>{item.old}</h5>
                        </div>
             </div>
        )
    }
}
function mapStateToProps(state){
    return state;
}
const connectedMemberActiveItem=connect(mapStateToProps)(MemberActiveItem);
export { connectedMemberActiveItem as MemberActiveItem } 