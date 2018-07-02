import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";

class RegisterForm extends React.Component{
    componentDidMount(){
        //this.props.dispatch(userAction.All());
    }
    render(){
        
        return (
             <div className="registration_form_area">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="registration_form_s">
                                <h4>Registration</h4>
                                <form>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="reg_email2" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="reg_first2" placeholder="Full Name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="reg_user2" placeholder="Username" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" id="reg_pass2" placeholder="Password" />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                                    <span data-bind="label">Gender</span>&nbsp;<span className="arrow_carrot-down"><i className="fa fa-sort-asc" aria-hidden="true"></i><i className="fa fa-sort-desc" aria-hidden="true"></i></span>
                                                    </button>
                                                    <ul className="dropdown-menu" role="menu">
                                                        <li><a href="#href">Male</a></li>
                                                        <li><a href="#href">Female</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <div className="datepicker">
                                                    <input type='text' className="form-control datetimepicker4" placeholder="Birthday" />
                                                    <span className="add-on"><i className="fa fa-calendar" aria-hidden="true"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="reg_chose form-group">
                                        <button type="submit" value="LogIn" className="btn form-control login_btn">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form_man">
                                <img src="img/registration-man.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return state;
}
const connectedRegisterForm=connect(mapStateToProps)(RegisterForm);
export { connectedRegisterForm as RegisterForm } 