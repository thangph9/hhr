import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { MemberActiveList } from "./member.active.list";
import { userActions } from "../actions";
class MemberActive extends React.Component{
    componentDidMount(){
        this.props.dispatch(userActions.getMemberActive());
    }
    render(){
        
        return (
            <section className="actives_members">
            <div className="container">
                <div className="welcome_title">
                    <h3>Thành viên</h3>
                    <img src="img/w-title-b.png" alt="" />
                </div>
                <MemberActiveList />
                
            </div>
        </section>
        )
    }
}
function mapStateToProps(state){
    
    return state;
}
const connectedMemberActive=connect(mapStateToProps)(MemberActive);
export { connectedMemberActive as MemberActive } 