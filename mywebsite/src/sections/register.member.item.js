import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class RegisterMemberItem extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        //this.props.dispatch(userAction.All());
    }
    render(){
        const { data } =this.props;
        return (
             <div className="item">
             <Link to ={`/profile/`+data.user_id }  >
                <img className="img-circle" src={ (data.preview_thumbnail!=null  ) ? data.preview_thumbnail   : "/img/members/r_members-1.png"  } alt="" />                
                <h4>{data.fullname}</h4>                
                <h5>{ ( new Date().getFullYear() - data.dob_year ) }</h5>   
            </Link>
            </div>
        )
    }
}
function mapStateToProps(state){
    return state;
}
const connectedRegisterMemberItem=connect(mapStateToProps)(RegisterMemberItem);
export { connectedRegisterMemberItem as RegisterMemberItem } 