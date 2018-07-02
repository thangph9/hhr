import React from "react";
import { Link } from "react-router-dom";
import { userActions }  from "../actions";
import { connect } from "react-redux";

import DatePicker from "react-datepicker";
import moment from "moment";
import Select from 'react-select';


//import 'react-select/dist/react-select.css';
import 'react-datepicker/dist/react-datepicker.css';
const state=require("../data/state");
class RegisterFormPage extends React.Component{
    
    constructor(props){
        
        super(props)
        this.state={
            user:{
                mobile: '',
                fullname: '',
                password: '',
                selectRegion: '',
                selectGender: ''
            },
            formErrors:{
                mobile: '',
                fullname: '',
                password: ''
            },
            mobileValid: false,
            formValid: false,
            fullnameValid: false,
            pwdValid: false,
            submitted: false,
        }
        this.handleChangeRegion=this.handleChangeRegion.bind(this);
        this.handleChangeGender=this.handleChangeGender.bind(this);
        this.handleChangeDate=this.handleChangeDate.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChangeDate(date) {
        const { user }=this.state;
        this.setState({
          user:{ ...user,dob: date } 
        });
    }
    handleChangeRegion(selectRegion){
        const { user }=this.state
        this.setState({ user: { ...user,selectRegion}})
    }
    handleChangeGender(selectGender){
        const { user }=this.state;
        this.setState({ user: { ...user,selectGender }})
    }
    handleChange(e){
        const {name,value} =e.target;
        const { user } = this.state;
        
        this.setState({
            user: {
                ...user,
                [name]: value
            }},
            () => { this.validateField(name,value) });
    }
    handleSubmit(e){
        e.preventDefault();
        this.setState({submitted: true});
        const { dispatch }=this.props;
        const { user } =this.state;
        if(user.fullname && user.mobile && user.selectGender && user.selectRegion && user.password && user.dob ){
            dispatch(userActions.register(user));
        }
        
    }
    validateField(name,value){
        let fieldValidationErrors=this.state.formErrors;
        let mobileValid=this.state.mobileValid;
        let fullnameValid=this.state.fullnameValid;
        let pwdValid=this.state.pwdValid;
        
        switch(name){
             case 'mobile':
                let reg = /^\d+$/;
                mobileValid=value.match(reg);
                fieldValidationErrors.mobile= mobileValid  ? '': 'Số điện thoại không hợp lệ';
                
                break;
            case 'fullname':
                
                fullnameValid = value.length >=3 ;
                fieldValidationErrors.fullname= fullnameValid ? '': 'Họ tên quá ngắn';
                break;
            case 'password':
                pwdValid=value.length >=6;
                fieldValidationErrors.password= pwdValid ? '': 'Mật khẩu trên 6 ký tự';
                break;
            default:
                break;   
        }
        this.setState({
            formErrors: fieldValidationErrors,
            mobileValid: mobileValid,
            fullnameValid: fullnameValid,
            pwdValid: pwdValid
        }, 
        ()=> {this.validateForm() })
         
    }
    validateForm(){
        this.setState({ formValid: this.state.mobileValid });
    }
    componentDidMount(){
        
    }
    render(){
        const { registering ,message } =this.props;
        const {   user, submitted, formErrors, formValid }=this.state;
        return (
            <div className="registration_form_area" style={{'zIndex': "99 "}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="registration_form_s">
                                <h4>Đăng ký thành viên</h4>
                                {message && 
                                            <div><p className="text-danger">{message}</p></div>
                                }
                                <form name="formRegister" onSubmit={this.handleSubmit}>
                                    
                                    <div className="form-group">
                                        {!user.mobile && submitted && 
                                            <div><p className="text-danger">Yêu cầu nhập số điện thoại</p></div>
                                        }
                                        {formErrors.mobile  && 
                                            <div><p className="text-danger">{formErrors.mobile}</p></div>
                                        }
                                        <input type="text" className="form-control"  placeholder="Số điện thoại" name="mobile" value={user.mobile} onChange={this.handleChange} />
                                    </div>
                                    
                                    <div className="form-group">
                                        {!user.fullname && submitted && 
                                            <div><p className="text-danger">Yêu cầu nhập họ và tên</p></div>
                                        }
                                        {formErrors.fullname &&
                                            <div><p className="text-danger">{formErrors.fullname}</p></div>
                                        }
                                        <input type="text" className="form-control" placeholder="Họ và Tên" value={user.fullname} name="fullname" onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        {!user.dob && submitted && 
                                            <div><p className="text-danger">Chưa chọn ngày sinh</p></div>
                                        }
            
                                        <DatePicker
                                                openToDate={moment("1993-09-28")}
                                                selected={user.dob}
                                                onChange={this.handleChangeDate}
                                                dateFormat="DD/MM/YYYY"
                                                placeholderText="Ngày sinh"
                                                peekNextMonth
                                                showMonthDropdown
                                                showYearDropdown
                                                dropdownMode="select"
                                        />
                                    </div>
                                    <div className="form-group">
                                        {!user.selectRegion && submitted && 
                                            <div><p className="text-danger">Chưa chọn tỉnh/thành phố</p></div>
                                        }
                                        <Select 
                                            name="region" value={ user.selectRegion } onChange={this.handleChangeRegion}
                                            options = {state} placeholder="Tỉnh/Thành phố"
                                        />
                                    </div>
                                    
                                    
                                    <div className="form-group">
                                        {!user.password && submitted && 
                                            <div><p className="text-danger">Yêu cầu mật khẩu</p></div>
                                        }
                                    {formErrors.password && 
                                            <div><p className="text-danger">{formErrors.password}</p></div>
                                        }
                                        <input type="password" className="form-control"  placeholder="Mật khẩu" name="password" value={user.password} onChange={ this.handleChange }/>
                                    </div>
                                    <div className="form-group">
                                        <div className="row">
                                                {!user.selectGender && submitted && 
                                                    <div className="col-md-12"><p className="text-danger">Chọn giới tính</p></div>
                                                    }
                                                <div className="col-md-6">
                                                    
                                                    <div className="btn-group">
                                                        <Select name="gender" value={ user.selectGender }  onChange={this.handleChangeGender}
                                                        options = {[{value:'1',label: 'Nam'},
                                                        {value:'2',label: 'Nữ'},
                                                        {value:'3',label: 'Khác'}
                                                        ]} placeholder="Giới tính"     
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6"></div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" value="LogIn" className="btn btn-primary">Đăng Ký</button>
                                        {registering &&
                                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                        }
                                    </div>
                                        
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form_man">
                                <img className="img-responsive" src="/img/people-finding-love-dating-using-dating-web-sites-app-smartphones-computers-infographic-illustration-cartoon-84476438.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}
function mapStateToProps(state){
    const { registering } =state.registration;
    const {  message } = state.alert;
    return {
        message,
        registering
    };
}
const connectedRegisterFormPage = connect(mapStateToProps)(RegisterFormPage);
export {connectedRegisterFormPage as RegisterFormPage};
