import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";

class LoginPopup extends React.Component{
    componentDidMount(){
        //this.props.dispatch(userAction.All());
    }
    render(){
        
        return (
             <div className="login_form_inner zoom-anim-dialog mfp-hide" id="small-dialog">
               <h4>User Login</h4>
               <form method= "POST">
                   <input type="text" placeholder="Username" />
                   <input type="password" placeholder="Password" />
                   <div className="login_btn_area">
                       <button type="submit" value="LogIn" className="btn form-control login_btn">LogIn</button>
                       <div className="login_social">
                           <h5>Login With</h5>
                           <ul>
                               <li><a><i className="fa fa-facebook"></i></a></li>
                               <li><a><i className="fa fa-google-plus"></i></a></li>
                           </ul>
                       </div>
                   </div>
               </form>
               <img className="mfp-close" src="img/close-btn.png" alt="" />
            </div>
        )
    }
}
function mapStateToProps(state){
    return state;
}
const connectedLoginPopup=connect(mapStateToProps)(LoginPopup);
export { connectedLoginPopup as LoginPopup } 