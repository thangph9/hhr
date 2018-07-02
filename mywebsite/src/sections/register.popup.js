import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
class RegisterPopup extends React.Component{
    componentDidMount(){
        //this.props.dispatch(userAction.All());
    }
    render(){
        return (
            <div className="register_form_inner zoom-anim-dialog mfp-hide" id="register_form">
            <div className="row">
                <div className="col-md-6">
                    <div className="registration_man">
                        <img src="img/Registration_man.png" alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="registration_form_s">
                        <h4>Registration</h4>
                        <form>
                            <div className="form-group">
                                <input type="email" className="form-control" id="reg_email" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="reg_first" placeholder="Full Name" />
                            </div> 
                            <div className="form-group">
                                <input type="text" className="form-control" id="reg_user" placeholder="Username" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="reg_pass" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                        <span data-bind="label">Gender</span>&nbsp;<span className="arrow_carrot-down"><i className="fa fa-sort-asc" aria-hidden="true"></i><i className="fa fa-sort-desc" aria-hidden="true"></i></span>
                                    </button>
                                    <ul className="dropdown-menu" role="menu">
                                        <li><a >Male</a></li>
                                        <li><a >Female</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="datepicker">
                                    <input type='text' className="form-control datetimepicker4" placeholder="Birthday" />
                                    <span className="add-on"><i className="fa fa-calendar" aria-hidden="true"></i></span>
                                </div>
                            </div>
                            <div className="reg_chose form-group">
                                <div className="reg_check_box">
                                    <input type="radio" id="s-option" name="selector" />
                                    <label htmlFor="s-option">I m Not Robot</label>
                                    <div className="check"><div className="inside"></div></div>
                                </div>
                                <button type="submit" value="LogIn" className="btn form-control login_btn">Register</button>
                            </div>
                        </form>
                        <img className="mfp-close" src="img/close-btn.png" alt="" />
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
const connectedRegisterPopup=connect(mapStateToProps)(RegisterPopup);
export { connectedRegisterPopup as RegisterPopup } 