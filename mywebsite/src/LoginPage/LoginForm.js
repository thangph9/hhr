import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { userActions } from "../actions";
class LoginForm extends React.Component{
    constructor(props){
        super(props);
        var query=props.query;
        var search = (query != undefined  ) ? query.substring(1) : "/" ;
        var params={};
        try{
            params= JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
        }catch(err){
           
        }
        this.props.dispatch(userActions.logout());
        let return_url= ( params.return_url!=undefined ) ? params.return_url : "/" ;
        this.state={
            username: '',
            password: '',
            return_url: return_url,
            submitted: false,
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(e){
        const {name, value } = e.target;
        this.setState({ [name]: value });
    }
    handleSubmit(e){
        e.preventDefault();
        this.setState({submitted: true});
        const {username, password, return_url} =this.state;
        const { dispatch }= this.props;
        if(username && password){
            dispatch(userActions.login(username,password,return_url));
        }
    }
    componentDidMount(){
        //this.props.dispatch(userAction.All());
    }
    render(){
        
        const { loggingIn, message, user }= this.props;
        const { username, password ,submitted } = this.state;
        return (
             <div className="login_form_inner zoom-anim-dialog" id="small-dialog">
               <h4>Đăng nhập</h4>
               <form name="loginform" onSubmit={this.handleSubmit}>
                    {message && 
                        <div><p className="text-danger"> {message}</p></div>
                        
                    }
                    {user && !user.status && user.message &&
                        <div><p className="text-danger"> {user.message}</p></div>
                    }
                    {!username && submitted &&
                            <div className="help-block"><p className="text-danger"> Yêu cầu nhập số điện thoại </p></div>
                    }
                   <input type="text" name="username" value={username} onChange={this.handleChange} placeholder="Số điện thoại " />
                    {submitted && !password && 
                            <div className="help-block"><p className="text-danger">  Yêu cầu nhập mật khẩu </p></div>
                    }
                   <input type="password" name="password" value={password} onChange={this.handleChange} placeholder="Mật khẩu" />
                    
                   <div className="login_btn_area">
                       <button type="submit" value="Đăng nhập" className="btn form-control login_btn">Đăng nhập</button>
                       <div className="login_social">
                           <h5> </h5>
                           <ul>
                               <li><a><i className="fa fa-facebook"></i></a></li>
                               <li><a><i className="fa fa-google-plus"></i></a></li>
                           </ul>
                       </div>
            
                        {loggingIn &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                        <Link to="/register" className="btn btn-link">Đăng ký</Link>
                        <Link to="/register" className="btn btn-link">Quên mật khẩu?</Link>
                   </div>
               </form>
               <img className="mfp-close" src="img/close-btn.png" alt="" />
            </div>
        )
    }
}
function mapStateToProps(state, ownProps){
    
    const { loggingIn,user } = state.authentication;
    const { message } = state.alert;
    return {
            loggingIn,
            message,
            user // response from server
    };
}
const connectedLoginForm=connect(mapStateToProps)(LoginForm);
export { connectedLoginForm as LoginForm } 