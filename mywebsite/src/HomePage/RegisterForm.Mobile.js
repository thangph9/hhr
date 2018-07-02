import React from "react";
import {connect} from "react-redux";
import {pageActions, userActions} from "../actions";
const MESSAGE=require('../data/formValid').registerMobile;
class RegisterFormMobile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
            login: true,
            register: false,
            className: 'jsHomepage homepageLogin',
            
            phone:'',
            password: '',
            
            phoneIsExist: false,
            phoneIsValid: {status: true,message: ''},
            passwordIsValid: { status: true,message: ''}
        }
        this.handleHomePageSwitch=this.handleHomePageSwitch.bind(this);
        this.onChange=this.onChange.bind(this);
        this.handleValidPhone=this.handleValidPhone.bind(this);
        this.checkphone=this.checkphone.bind(this);
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
    handleValidPhone(){
        const { phone } = this.state;
        const { dispatch } = this.props;
        if(phone &&  phone.length >= 9 &&  phone.length <=11){
            
            dispatch(userActions.getPhone(phone,(err,e)=>this.checkphone(err,e)));
        }else{
            this.setState({
                phoneIsValid: {status: false, message: MESSAGE.Phone.invalid}
            })
        }
        
    }
    checkphone(err,e){
        //console.log(e)
        if(e.status){
                    this.setState({
                        phoneIsExist: true,
                        phoneIsValid: {status: false,message: MESSAGE.Phone.exist},
                    })
        }else{
            this.setState({
                        phoneIsValid: {status: true,message: ''},
                    })
        }
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
        }else if(phoneIsExist){
            _phone={status: false,message: MESSAGE.Phone.exist};
            isValid=false;
        }
        if(password.length == 0 ){
            _password   ={status: false,message: MESSAGE.Password.require};
            isValid     =false;
        }else if(password.length < 8){
            _password   ={status: false,message: MESSAGE.Password.minlength};
            isValid=false;
        }    
        if(isValid){
            let user={
                phone   : phone,
                password: password
            }
           dispatch(userActions.register(user)); 
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
        const {page, registration, alert,authentication } =this.props;
        var {registering}=registration;
        var {message}=alert;
            //console.log(this.state);
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
                _className='jsHomepage homepageLogin';
                _register=false;    
                break;
            case 'register':
                _register=true;
                _login=false;
                _className= 'jsHomepage homepageRegister';
                break;
            default:
                _register=register;
                _login=login;
                _className=className;
                break;
        }
        }
        
        return(
            <div className="homepageContainer__content__form registerContainer">
      <div className="tw3-pane tw3-pane--left">
         <div className="tw3-pane__content">
            <div className="logo"><img src="https://twoo-a.akamaihd.net/static/682503600911326952191/images/logos/logo-twoo-flat-white@2x.png" height="42" /></div>
            <h1 className="h1--step2">Sắp xong!</h1>
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
         <div className="tw3-pane__content jsRegisterFormContainer">
            <div className="mb--default text--center">
               <div className="jsLoginOptions">
               </div>
            </div>
            <div className="divider hor full white mb--default">
               <span>Hoặc đăng ký bằng số điện thoại</span>
            </div>
            <form action="/?login=0" method="post" onSubmit={this.handleSubmit}>
               <div className="tw3-form--stacked">
                { message &&
                    <div className="tw3-form__row jsFormRow tw3-form__row--error">
                        <div className="tw3-form__row__error">
                                {message}
                        </div>
                    </div>
                }
                  <div className={(this.state.phoneIsValid.status) ? "tw3-form__row jsFormRow" : "tw3-form__row jsFormRow tw3-form__row--error" }>
                     <div className="tw3-form__row__label">
                        <label>
                        <span>Số điện thoại</span>
                        </label>
                     </div>
                     <div className="tw3-form__row__input">
                        <input type="text" name="phone" className="tw3-text jsInputEmail" placeholder="ví dụ 0963123456" onChange={this.onChange} value={this.state.phone} onBlur={this.handleValidPhone} />
                     </div>
                    { !this.state.phoneIsValid.status &&
                        <div className="tw3-form__row__error">
                        <span className="error--label jsErrorLabel" >
                            {this.state.phoneIsValid.message}
                        </span>
                     </div>
                    }
                     
                        
                  </div>
                  <div className={(this.state.passwordIsValid.status) ? "tw3-form__row jsFormRow" : "tw3-form__row jsFormRow tw3-form__row--error" }>
                     <div className="tw3-form__row__label">
                        <label>
                        <span>Mật khẩu</span>
                        </label>
                     </div>
                     <div className="tw3-form__row__input">
                        <input type="password" name="password" onChange={this.onChange} value={this.state.password}  className="tw3-text jsInputPassword" placeholder="Tối thiểu 8 ký tự" />
                     </div>
                     {!this.state.passwordIsValid.status &&
                        <div className="tw3-form__row__error">
                            <span className="error--label jsErrorLabel" >
                            {this.state.passwordIsValid.message}
                            </span>
                         </div>
                     }
                     
                  </div>
                  <div className="tw3-form__row">
                     <div className="tw3-form__row__input">
                        <input type="submit" className="tw3-button tw3-button--green tw3-button--full tw3-button--xlarge tw3-button--rounded" value="Đăng ký" />
                     </div>
                  </div>
                  <div className="tw3-form__row form__extraOptions text--center">
                     <small className="text--subtle">
                     <span>Khi nhấn 'Tiếp tục...', hoặc 'Đăng ký', bạn đồng ý với <a href="/about/terms" className="link--reset text--bold">Điều khoản & Điều kiện</a> và <a href="/about/privacy" className="link--reset text--bold">Chính sách Riêng tư</a> của chúng tôi, bao gồm <a href="/about/cookie" className="link--reset text--bold">việc sử dụng Cookie</a> và đồng ý nhận email thông báo. Bạn có thể hủy email bất kỳ lúc nào.</span>
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
    const {authentication , registration ,alert,page} = state;
    return {authentication , registration ,alert,page};
}
const connected = connect(mapStateToProps)(RegisterFormMobile);
export { connected as RegisterFormMobile};