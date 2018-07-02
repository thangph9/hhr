import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userActions } from "../actions";
class ProfileBanner extends React.Component{
    
    componentDidMount(){
        
    }
    render(){
        const { users } = this.props;
        var user=(users.item && users.item.user ) ? users.item.user[0] : [] ;
        var age=new Date().getFullYear() - user.dob_year;
        var address=(user.addresses !=null && user.addresses.home) ? user.addresses.home : '';
        return (
             <section className="banner_area profile_banner">
                <div className="profiles_inners">
                    <div className="container">
                        <div className="profile_content">
                            <div className="user_img">
                                <img className="img-circle" src="/img/members/single_members.png" alt="" />
                            </div>
                            <div className="user_name">
                                <h3>{user.fullname}</h3>
                                <h4>{age} Tuổi</h4>
                                <ul>
                                    <li><a href="#link">{ address }</a></li>
                                    <li className="dropdown extara">
                                        <a href="#link" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">80% Match</a>
                                        <ul className="dropdown-menu">
                                           <li>Match</li>
                                            <li>
                                                <div className="circle1">
                                                    <strong></strong>
                                                </div>
                                                <h4>Match</h4>
                                            </li>
                                            <li>
                                                <div className="circle2">
                                                    <strong></strong>
                                                </div>
                                                <h4>Enemy</h4>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="right_side_content">
                                 <ul className="nav navbar-nav">
                                    <li className="dropdown">
                                      <a href="#link" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="fa fa-ellipsis-h"></i></a>
                                      <ul className="dropdown-menu">
                                        <li><a href="#link">Action</a></li>
                                        <li><a href="#link">Another action</a></li>
                                        <li><a href="#link">Another action</a></li>
                                        <li><a href="#link">Another action</a></li>
                                      </ul>
                                    </li>
                                  </ul>
                                <button type="submit" value="LogIn" className="btn form-control login_btn">Add Friend <img src="/img/user.png" alt="" /></button>
                                <button type="submit" value="LogIn" className="btn form-control login_btn">Chat Now <img src="/img/comment.png" alt="" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
function mapStateToProps(state){
    const { users} =state;
    return { users };
}
const connectedProfileBanner=connect(mapStateToProps)(ProfileBanner);
export { connectedProfileBanner as ProfileBanner } 