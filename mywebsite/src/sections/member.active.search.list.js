import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { MemberActiveSearchItem } from "./member.active.search.item";
class MemberActiveSearchList extends React.Component{
    componentDidMount(){
        //this.props.dispatch(userAction.All());
    }
    render(){
        
        return (
            <section className="active_members">
                 <div className="row">
                    <MemberActiveSearchItem />
                    <MemberActiveSearchItem />
                    <MemberActiveSearchItem />
                    <MemberActiveSearchItem />
                    <MemberActiveSearchItem />
                    <MemberActiveSearchItem />
                 </div>
            </section>
        )
    }
}
function mapStateToProps(state){
    return state;
}
const connectedMemberActiveSearchList=connect(mapStateToProps)(MemberActiveSearchList);
export { connectedMemberActiveSearchList as MemberActiveSearchList } 