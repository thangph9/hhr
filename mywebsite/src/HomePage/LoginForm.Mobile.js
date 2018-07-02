import React from "react";
import {connect} from "react-redux";
import {pageActions, userActions} from "../actions";
const MESSAGE=require('../data/formValid').loginMobile;
class LoginFormMobile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
            login: true,
            register: false,
            className: 'jsHomepage homepageLogin',
            
            phone:'',
            password: '',
            
            phoneIsValid: {status: true,message: ''},
            passwordIsValid: { status: true,message: ''},
            
            submitted: false,
        }
        this.handleHomePageSwitch=this.handleHomePageSwitch.bind(this);
        this.onChange=this.onChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleHomePageSwitch(view){
        
        const { dispatch } = this.props;
        dispatch(pageActions.switchView(view));
        
    }
    onChange(e){
        const { name,value}=e.target;
        this.setState({
           [name]: value 
        });
        
    }
    
    handleSubmit(e){
        e.preventDefault();
        
        const { dispatch } = this.props;
        const {phone,password,phoneIsExist} = this.state;
        let _phone={status: true,message: ''},_password={status: true,message: ''};
        let isValid=true;
        
        if(phone.length == 0){
            _phone={status: false,message: MESSAGE.Phone.require}
            isValid=false;
        }
        if(password.length == 0 ){
            _password   ={status: false,message: MESSAGE.Password.require};
            isValid     =false;
        }   
        if(isValid){
           dispatch(userActions.login(phone,password,'')); 
        }else{
            this.setState({
                phoneIsValid    : _phone,
                passwordIsValid : _password
            })
        }
    }
    componentDidMount(){
        //this.props.dispatch(userAction.All());
    }
    render(){
        
        const {register,login,className} = this.state;
        const {page, authentication , alert} = this.props;
        const { loggedIn }  = authentication;
        const { message }   = alert;
        if(authentication.loggedIn){
            //return (<Redirect to="/" />)
        }
        var _register=register;
        var _login=login;
        var _className=className;
        //var view='login';
        if(page.view){
            switch(page.view){
            case 'login':
                _login=true;
                _register=false;    
                break;
            case 'register':
                _register=true;
                _login=false;
                break;
            default:
                _register=register;
                _login=login;
                break;
        }
        }
        return(
            <div className="homepageContainer__content__form homepageContainer__content__form--intro loginContainer jsLoginContainer">
      <div className="tw3-pane tw3-pane--left">
         <div className="tw3-pane__content">
            <div className="homepageContainer__content__logo">
               <div id="facebookLoadingRegister" className="homepageContainer__content__logo__loader">
                  <div className="mb--default">
                     <img src="https://twoo-a.akamaihd.net/static/682503600911326952191/images/logos/logo-twoo-flat-white@2x.png" height="42" />
                  </div>
                  <h4 className="newFontSize fcor">Vui lòng chờ chúng tôi tạo tài khoản cho bạn...</h4>
                  <div className="tw3-box--loading"></div>
               </div>
               <div id="facebookLoadingLogin" className="homepageContainer__content__logo__loader">
                  <div className="mb--default">
                     <img src="https://twoo-a.akamaihd.net/static/682503600911326952191/images/logos/logo-twoo-flat-white@2x.png" height="42" />
                  </div>
                  <h4 className="newFontSize fcor">Đợi chút! Bạn đang đăng nhập...</h4>
                  <div className="tw3-box--loading"></div>
               </div>
            </div>
            <div className="logo">
               <img src="https://twoo-a.akamaihd.net/static/682503600911326952191/images/logos/logo-twoo-flat-white@2x.png" height="42" />
            </div>
            <h1 className="h1--step1 fw500">
               Chat với bạn <strong>mới</strong> khắp thế giới.
            </h1>
            <div className="tw3-homepage--abstract--mobile__tabs tw3-tabsHolder">
               <a href="javascript:;" className={(_register) ? "tw3-tab jsHomepageSwitch selected" : "tw3-tab jsHomepageSwitch"} onClick={()=>{this.handleHomePageSwitch('register')}}>ĐĂNG KÝ</a>
               <a href="javascript:;" className={(_login) ? "tw3-tab jsHomepageSwitch selected" : "tw3-tab jsHomepageSwitch"} onClick={()=>{this.handleHomePageSwitch('login')}}>ĐĂNG NHẬP</a>
            </div>
         </div>
      </div>
      <div className="tw3-pane tw3-pane--right">
         <div className="tw3-pane__content">
            <div className="mb--default text--center">
               <div className="jsLoginOptions">

               </div>
            </div>
            <div className="divider hor full white mb--default">
               <span>Hay đăng nhập với số điện thoại</span>
            </div>
            <form action="/?login=0" method="post"  onSubmit={this.handleSubmit}>
               <div className="tw3-form--stacked">
               { message &&
                    <div className="tw3-form__row jsFormRow tw3-form__row--error">
                        <div className="tw3-form__row__error">
                                {message}
                        </div>
                    </div>
               }
                   <div className={(this.state.phoneIsValid.status) ? "tw3-form__row jsFormRow" : "tw3-form__row jsFormRow tw3-form__row--error" }>
                     <div className="tw3-form__row__input">
                        <input type="text" name="phone" placeholder="Số điện thoại" className="tw3-text jsLoginInputEmail" value={this.state.phone} onChange={this.onChange} />
                     </div>
                    { !this.state.phoneIsValid.status &&
                        <div className="tw3-form__row__error">
                            <span id="error-default" className="error--label">
                            {this.state.phoneIsValid.message}
                            </span>
                        </div>
                    }
                  </div>
                  <div className={(this.state.passwordIsValid.status) ? "tw3-form__row jsFormRow" : "tw3-form__row jsFormRow tw3-form__row--error" }>
                     <div className="tw3-form__row__input">
                        <input type="password" name="password" placeholder="Mật khẩu" className="tw3-text jsLoginInputPassword" value={this.state.password} onChange={this.onChange} />
                     </div>
                    { !this.state.passwordIsValid.status &&    
                     <div className="tw3-form__row__error">
                        <span id="error-default" className="error--label">
                        {this.state.passwordIsValid.message}
                        </span>
                     </div>
                    }
                  </div>
                  <div className="tw3-form__row">
                     <input type="submit" className="tw3-button tw3-button--green tw3-button--full tw3-button--xlarge tw3-button--rounded" value="ĐĂNG NHẬP" />
                  </div>
                  <div className="tw3-form__row">
                     <div className="form__extraOptions text--center">
                        <a href="/login?view=forgot" className="tw3-button--link" >Quên mật khẩu?</a>
                     </div>
                  </div>
                  <div className="tw3-form__row form__extraOptions text--center">
                     <small className="text--subtle">
                     <span>Khi nhấn 'Tiếp tục...', hoặc 'Đăng nhập', bạn đồng ý với <a href="/about/terms" className="link--reset text--bold">Điều khoản & Điều kiện</a> và <a href="/about/privacy" className="link--reset text--bold">Chính sách Riêng tư</a> của chúng tôi, bao gồm <a href="/about/cookie" className="link--reset text--bold">việc sử dụng Cookie</a> và đồng ý nhận email thông báo. Bạn có thể hủy email bất kỳ lúc nào.</span>
                     <span> </span>
                     <span>Chúng tôi không bao giờ đăng lên Facebook.</span>
                     </small>
                  </div>
               </div>
            </form>
         </div>
      </div>
   </div>
        )
    }
}
function mapStateToProps(state){
    const {authentication  ,alert,page} =state;
    return {authentication  ,alert,page};
}
const connected = connect(mapStateToProps)(LoginFormMobile);
export { connected as LoginFormMobile};