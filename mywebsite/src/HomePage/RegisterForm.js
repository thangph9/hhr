import React from "react";
import {connect} from "react-redux";
import {Redirect } from "react-router-dom";
import { _Combobox, _Input } from "../Form";
import Select from "react-select";
import { userActions } from "../actions";
const suggestion= require('../data/suggestion');
const state=require('../data/state');
const registerData=require('../data/register');
const singleData=require('../data/single');

const MESSAGE=require('../data/formValid').registerDesktop;
class RegisterForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            genderValue : {value : '-1' , label: 'Bạn là ...'},
            selectedDay : {value : '-1' , label: 'Ngày'},
            selectedMonth   :{value : '-1' , label: 'Tháng'},
            selectedYear    :{value : '-1' , label: 'Năm'},
            selectedHHRGoal :{value : '-1' , label: 'Chọn'},
            password    :'',
            phone       :'',
            name        :'',
            address     :'',
            
            dobIsValid:{status: true, message: ''},
            nameIsValid:{status: true, message: ''},
            stateIsValid: {status: true, message: ''},
            goalIsValid: {status: true, message: ''},
            phoneIsValid: {status: true, message: ''},
            passwdIsValid: {status: true, message: ''},
            genderIsValid: {status: true, message: ''},
            
            submited: false,
            
        }
        this.onSelectGender=this.onSelectGender.bind(this);
        this.onChange=this.onChange.bind(this);
        this.onSelectDay=this.onSelectDay.bind(this);
        this.onSelectMonth=this.onSelectMonth.bind(this);
        this.onSelectYear=this.onSelectYear.bind(this);
        this.onSelectHHRGoal=this.onSelectHHRGoal.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.onValidPhone=this.onValidPhone.bind(this);
        this.checkphone=this.checkphone.bind(this);
        this.onInputNameBlur=this.onInputNameBlur.bind(this);
        this.onInputAddressBlur=this.onInputAddressBlur.bind(this);
        this.onInputPhoneBlur=this.onInputPhoneBlur.bind(this);
        this.onInputPasswordBlur=this.onInputPasswordBlur.bind(this);
        
        
    }
    onSelectGender(gender){
       // console.log(gender)
        this.setState({
            genderValue: gender,
            genderIsValid:{status: true,message: ''}
        })
    }
    onChange(e){
        const { name,value }= e.target;
        this.setState({
            [name]: value
        });
    }
    onSelectDay(e){
        this.setState({
            selectedDay: e,
            dobIsValid: {status: true,message: ''},
        })
    }
    onSelectMonth(e){
        this.setState({
            selectedMonth: e,
            dobIsValid: {status: true,message: ''},
        })
    }
    onSelectYear(e){
        this.setState({
            selectedYear: e,
            dobIsValid: {status: true,message: ''},
        })
    }
    onSelectHHRGoal(e){
        this.setState({
            selectedHHRGoal: e,
            goalIsValid:{status: true,message: ''}
        })
    }
    onInputNameBlur(){
        const {name } = this.state;
        let _name={status: true, message: ''};
        if(name.length == 0){
            _name={status: false, message: MESSAGE.Name.required}
        }
        this.setState({
            nameIsValid: _name,
           
        })
    }
    onInputAddressBlur(){
         const {address } = this.state;
        
        let _address={status: true, message: ''};
        if(address.length == 0){
            _address={status: false, message: MESSAGE.Address.required}
         
        }
        this.setState({
            stateIsValid: _address,
        })
    }
    onInputPhoneBlur(){
        const {phone } = this.state;
        let _phone={status: true, message: ''};
        if(phone.length ==0){
            _phone={status: false, message: MESSAGE.Phone.required}
        }else if(this.state.phoneIsExist){
            _phone={status: false, message: MESSAGE.Phone.exist}
            
        }
        this.setState({
            phoneIsValid: _phone
        })
    }
    onInputPasswordBlur(){
         const {password } = this.state;
        let _password={status: true, message: ''}
        if(password.length ==0){
            _password={status: false, message: MESSAGE.Password.required}
        }else if(password.length < 8 ){
            _password={status: false, message: MESSAGE.Password.minlength}
        }
        this.setState({
            passwordIsValid: _password
        })
        
    }
    
    
    onValidPhone(e){
        //console.log(this.state.phone);
        const { dispatch, registration } = this.props;
        if(this.state.phone && this.state.phone.length >= 9 &&  this.state.phone.length <=11){
            dispatch(userActions.getPhone(this.state.phone,(err,e)=>this.checkphone(err,e)));
        }else{
            this.setState({
                phoneIsValid: {status: false, message: MESSAGE.Phone.invalid}
            })
        }
        
        //console.log('e');
    }
    checkphone(err,e){
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
        const { dispatch }=this.props;
        let isValid=true;
        //console.log(this.state);
        let valided={status: true, message: ''};
        let dob={status: true, message: ''},
            _name={status: true, message: ''},_address={status: true, message: ''},
            goal={status: true, message: ''},_password={status: true, message: ''},
            _phone={status: true, message: ''},gender={status: true, message: ''};
        const {genderValue,selectedDay,selectedMonth,selectedYear,selectedHHRGoal,password,phone,name,address } =this.state;
        
        if(genderValue.value=='-1'){
            gender={status: false, message: MESSAGE.Gender.required}
            isValid=false;
        }
        if(selectedHHRGoal.value=='-1'){
            goal={status: false, message: MESSAGE.Goal.required}
            isValid=false;
        }
        if(phone.length ==0){
            _phone={status: false, message: MESSAGE.Phone.required}
            isValid=false;
        }else if(this.state.phoneIsExist){
            _phone={status: false, message: MESSAGE.Phone.exist}
            isValid=false;
        }
        if(name.length ==0){
            _name={status: false, message: MESSAGE.Name.required}
            isValid=false;
        }
        if(address.length == 0){
            _address={status: false, message: MESSAGE.Address.required}
            isValid=false;
        }
        if(password.length ==0){
            _password={status: false, message: MESSAGE.Password.required}
            isValid=false;
        }else if(password.length < 8 ){
            _password={status: false, message: MESSAGE.Password.minlength}
            isValid=false;
        }
        if(selectedDay.value=='-1' && selectedMonth.value=='-1' && selectedYear.value=='-1' ){
            dob={status: false, message: MESSAGE.dob.required}
            isValid=false;
        }
        if(selectedDay.value=='-1' || selectedMonth.value=='-1' || selectedYear.value=='-1' ){
            dob={status: false, message: MESSAGE.dob.invalid}
            isValid=false;
        }
        if(!isValid){
            let valid={
                dobIsValid:dob,
                nameIsValid: _name ,
                stateIsValid: _address,
                goalIsValid: goal,
                phoneIsValid: _phone,
                passwdIsValid:_password,
                genderIsValid: gender,
            }
            this.setState({
                ...valid
            });
        }else{
            this.setState({
                submited: true,
            })
            let gender=genderValue.value == "MALE" ? 1 : 2
            let user={
                phone       : phone,
                fullname    : name,
                password    : password,
                dob_day     : selectedDay.value,
                dob_month   : selectedMonth.value,
                dob_year    : selectedYear.value,
                goal        : selectedHHRGoal,
                gender      : gender,
                address     : address
            };
            dispatch(userActions.register(user));
          //console.log("all valid") ;  
        }
    }

    render(){
        const { registration, alert,authentication } =this.props;
        var {registering}=registration;
        var {message}=alert;
        const genderOptions=[
          { value: 'MALE', label: 'Nam' },
          { value: 'FEMALE', label: 'Nữ' }
        ]
        const dobOption={
            day: registerData.dob_day,
            month:registerData.dob_month,
            year: registerData.dob_year.reverse(),
        }
        const address= {key: 'address' , value: '', label: 'ví dụ Hà Nội', data: suggestion.home_town, className:'inputLarge jsAutoCompleter jsInputLocation autoCompleter tw3-text'};
        if(authentication.loggedIn){
            return (<Redirect to="/" />)
        }
        return (
            <div className="homepageContainer__content__form registerContainer">
      <div className="tw3-pane tw3-pane--left">
         <div className="tw3-pane__content">
            <div className="logo"><img src="https://twoo-a.akamaihd.net/static/682503600911326952191/images/logos/logo-twoo-flat-white@2x.png" height="42" /></div>
            <h1 className="h1--step2">Sắp xong!</h1>
            <h1 className="h1--step1 fw500">
               Chat với bạn <strong>mới</strong> khắp thế giới.
            </h1>
            <p className="mb--slack">
               Gặp hàng triệu người từ khắp nơi bất kể bạn ở đâu. Chat vui vẻ, kết bạn và tìm một nửa của mình. Bởi vì cuộc đời chính là những người bạn gặp gỡ.
            </p>
            <div className="mb--tight">
               <div className="jsLoginOptions">
               </div>
            </div>
            <small>(đây là cách đăng ký nhanh, chúng tôi sẽ không bao giờ đăng trên Facebook)</small>
         </div>
      </div>
      <div className="tw3-pane tw3-pane--right">
         <div className="tw3-pane__content jsRegisterFormContainer">
            <div className="divider hor full white mb--default">
               <span>Hoặc đăng ký bằng số điện thoại</span>
            </div>
            <form action="/?login=0" method="post" onSubmit={this.handleSubmit}>
               <div className="tw3-form--stacked">
                  <div className="tw3-row">
                     <div className="tw3-col-6">
                         
                        <div className={(this.state.nameIsValid.status) ? "tw3-form__row jsFormRow" : "tw3-form__row jsFormRow tw3-form__row--error" }>
                           <div className="tw3-form__row__label">
                              <label>
                              <span className="formLarge__item__label">Tên</span>
                              </label>
                           </div>
                           <div className="tw3-form__row__input">
                              <input type="text" name="name" onChange={this.onChange} placeholder="ví dụ Minh" className="tw3-text jsInputFirstName" onBlur={this.onInputNameBlur}/>
                           </div>
                        {!(this.state.nameIsValid.status)  &&     
                           <div className="tw3-form__row__error">
                              <span className="error--label jsErrorLabel">
                              {this.state.nameIsValid.message}
                              </span>
                           </div>
                        }
                        </div>
                     </div>
                     <div className="tw3-col-6">
                        <div className={(this.state.genderIsValid.status) ? "tw3-form__row jsFormRow" : "tw3-form__row jsFormRow tw3-form__row--error" }>
                           <div className="tw3-form__row__label">
                              <label className="">
                              <span className="formLarge__item__label">Giới tính</span>
                              </label>
                           </div>
                           <div className="tw3-form__row__input">
                               <Select options={genderOptions} value={this.state.genderValue} onChange={this.onSelectGender} />
                           </div>
                        {!(this.state.genderIsValid.status)  &&
                           <div className="tw3-form__row__error">
                              <span className="error--label">
                                {this.state.genderIsValid.message}
                              </span>
                           </div>
                        }
                        </div>
                     </div>
                  </div>
                  <div className={(this.state.dobIsValid.status) ? "tw3-form__row jsFormRow" : "tw3-form__row jsFormRow tw3-form__row--error" }>
                     <div className="tw3-form__row__label">
                        <label>
                        <span>Ngày sinh</span>
                        </label>
                     </div>
                     <div className="tw3-form__row__input tw3-form__row__input--birthdayHolder">
                        <div className="tw3-form__row__input--birthday tw3-form__row__input--birthday--day jsSelectDropdownBirthday">
                           <div className="tw3-dropdownHolder jsCustomDropdownSingle tw3-dropdownHolder--nativeOnly jsInputBirthday" >
                               <div className="tw3-dropdownHolder--mobile jsDropdownMobileHolder">
                                    <div className="tw3-dropdown--native jsDropdownNative">
                                       <div className="tw3-dropdownHolder__native__content jsDropdownContent">
                                          <Select options={dobOption.day} onChange={this.onSelectDay} value={this.state.selectedDay} />
                                       </div>
                                    </div>
                                 </div>
                                
                           </div>
                        </div>
                        <div className="tw3-form__row__input--birthday tw3-form__row__input--birthday--month jsSelectDropdownBirthmonth">
                           <div className="tw3-dropdownHolder jsCustomDropdownSingle tw3-dropdownHolder--nativeOnly jsInputBirthmonth" >
                               <div className="tw3-dropdownHolder--mobile jsDropdownMobileHolder">
                                    <div className="tw3-dropdown--native jsDropdownNative">
                                       <div className="tw3-dropdownHolder__native__content jsDropdownContent">
                                          <Select options={dobOption.month} onChange={this.onSelectMonth} value={this.state.selectedMonth} />
                                       </div>
                                    </div>
                                 </div>
                              
                           </div>
                        </div>
                        <div className="tw3-form__row__input--birthday tw3-form__row__input--birthday--year jsSelectDropdownBirthyear">
                           <div className="tw3-dropdownHolder jsCustomDropdownSingle tw3-dropdownHolder--nativeOnly jsInputBirthyear" >
                               <div className="tw3-dropdownHolder--mobile jsDropdownMobileHolder">
                                    <div className="tw3-dropdown--native jsDropdownNative">
                                       <div className="tw3-dropdownHolder__native__content jsDropdownContent">
                                          <Select options={dobOption.year} onChange={this.onSelectYear} value={this.state.selectedYear} />
                                       </div>
                                    </div>
                                 </div>
                                    
                                 
                           </div>
                        </div>
                     </div>
                    { !this.state.dobIsValid.status &&
                        <div className="tw3-form__row__error">
                        <span className="error--label jsErrorLabel">
                        {this.state.dobIsValid.message}
                        </span>
                     </div>
                    }
                     
                  </div>
                  <div className="tw3-row">
                     <div className="tw3-col-6">
                        <div className={(this.state.stateIsValid.status) ? "tw3-form__row jsFormRow" : "tw3-form__row jsFormRow tw3-form__row--error" }>
                           <div className="tw3-form__row__label">
                              <label>
                              <span>Thành phố</span>
                              </label>
                           </div>
                           <div className="tw3-form__row__input">
                             <_Input field={address} onChange={this.onChange} onBlur={this.onInputAddressBlur} />
                           </div>
                        { !this.state.stateIsValid.status &&
                            <div className="tw3-form__row__error">
                              <span className="error--label jsErrorLabel">
                              {this.state.stateIsValid.message}
                              </span>
                           </div>
                        }
                           
                        </div>
                     </div>
                     <div className="tw3-col-6">
                        <div className={(this.state.goalIsValid.status) ? "tw3-form__row jsFormRow" : "tw3-form__row jsFormRow tw3-form__row--error" }>
                           <div className="tw3-form__row__label">
                              <label>
                              <span className="formLarge__item__label">Bạn ở đây để...</span>
                              </label>
                           </div>
                           <div className="tw3-form__row__input">
                              <div className="tw3-dropdownHolder jsCustomDropdownSingle tw3-dropdownHolder--nativeOnly jsInputHerefor">
                                 <div className="tw3-dropdownHolder--mobile jsDropdownMobileHolder">
                                    <div className="tw3-dropdown--native jsDropdownNative">
                                       <div className="tw3-dropdownHolder__native__content jsDropdownContent">
                                          <Select options={singleData.hhr_goal} onChange={this.onSelectHHRGoal}  value={this.state.selectedHHRGoal} />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        {!this.state.goalIsValid.status &&
                            <div className="tw3-form__row__error">
                              <span className="error--label jsErrorLabel" >
                              {this.state.goalIsValid.message}
                              </span>
                           </div>
                        }
                           
                        </div>
                     </div>
                  </div>
                  <div className={(this.state.phoneIsValid.status) ? "tw3-form__row jsFormRow" : "tw3-form__row jsFormRow tw3-form__row--error" }>
                     <div className="tw3-form__row__label">
                        <label>
                        <span>Số điện thoại</span>
                        </label>
                     </div>
                     <div className="tw3-form__row__input">
                        <input type="number" name="phone" value={this.state.phoneValue} className="tw3-text jsInputEmail" onBlur={this.onValidPhone} placeholder="ví dụ 0963123456" onChange={this.onChange} />
                     </div>
                        { !this.state.phoneIsValid.status &&
                         <div className="tw3-form__row__error">
                            <span className="error--label jsErrorLabel">
                            {this.state.phoneIsValid.message}
                            </span>
                         </div>
                        }
                     
                  </div>
                  <div className={(this.state.passwdIsValid.status) ? "tw3-form__row jsFormRow" : "tw3-form__row jsFormRow tw3-form__row--error" }>
                     <div className="tw3-form__row__label">
                        <label>
                        <span>Mật khẩu</span>
                        </label>
                     </div>
                     <div className="tw3-form__row__input">
                        <input type="password" name="password" value={this.state.password} className="tw3-text jsInputPassword" onBlur={this.onInputPasswordBlur} placeholder="Tối thiểu 8 ký tự"  onChange={this.onChange} />
                     </div>
                     { !this.state.passwdIsValid.status &&
                         <div className="tw3-form__row__error">
                            <span className="error--label jsErrorLabel">
                                {this.state.passwdIsValid.message}
                            </span>
                         </div>
                     }
                     
                  </div>
                  <div className="tw3-form__row jsFormRow">
                     <div className="tw3-form__row__input">
                        <input type="submit" className="tw3-button tw3-button--green tw3-button--full tw3-button--xlarge tw3-button--rounded" value="Đăng ký" />
                        {registering &&
                                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                        }    
                     </div>
                  </div>
                  { message &&
                      <div className="tw3-form__row jsFormRow tw3-form__row--error">
                      <div className="tw3-form__row__error">
                            <span className="error--label jsErrorLabel">
                                {message}
                            </span>
                         </div>
                      </div>
                  }
                          
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
    const { registration, alert, authentication } = state;
    return { registration, alert, authentication };
}
const connected = connect(mapStateToProps)(RegisterForm);
export { connected as RegisterForm}