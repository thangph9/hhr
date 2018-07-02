import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { MemberActiveItem } from "./member.active.item";
import { userActions } from "../actions";
class MemberActiveList extends React.Component{
    componentDidMount(){
       
    }
    render(){
        
        return (
             <div className="row">
                <MemberActiveItem />
                <MemberActiveItem />
                <MemberActiveItem />
                <MemberActiveItem />
                <MemberActiveItem />
                <MemberActiveItem />
                <MemberActiveItem />
             </div>
        )
    }
}
function mapStateToProps(state){
    return state;
}
const connectedMemberActiveList=connect(mapStateToProps)(MemberActiveList);
export { connectedMemberActiveList as MemberActiveList } 