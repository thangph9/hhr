import React from "react";
import { connect } from "react-redux";
import { InputText,Combobox } from "../Form";
const selectData=require("../data/single");
const suggestion=require("../data/suggestion");

class FamilyFriend extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        
        const { userDetails } = this.props;
        const _data={
            home_town   : (userDetails.user && userDetails.user.status && userDetails.user.result.length > 0) ? userDetails.user.result[0].home_town : '',
            religion    : (userDetails.user && userDetails.user.status && userDetails.user.result.length > 0) ? userDetails.user.result[0].religion : {},
            home_town_return: (userDetails.user && userDetails.user.status && userDetails.user.result.length > 0) ? userDetails.user.result[0].home_town_return : '',
            live_with   : (userDetails.user && userDetails.user.status && userDetails.user.result.length > 0) ? userDetails.user.result[0].live_with : {},
            friends     : (userDetails.user && userDetails.user.status && userDetails.user.result.length > 0) ? userDetails.user.result[0].friends : {},
            pets        : (userDetails.user && userDetails.user.status && userDetails.user.result.length > 0) ? userDetails.user.result[0].pets : {},
            
        };
        const fields= [
                {key: 'home_town' , value: _data.home_town, label: 'Quê quán', data: suggestion.home_town, className:'tw3-text'},
                {key: 'religion' , value: _data.religion, label: 'Tôn giáo', data: selectData.religion, className:''},
                {key: 'home_town_return' , value: _data.home_town_return, label: 'Số lần về quê', data: [], className:'tw3-text'},
                {key: 'live_with' , value: _data.live_with, label: 'Sống cùng ai', data: selectData.live_with, className:'tw3-text'},
                {key: 'friends' , value: _data.friends, label: 'Bạn bè', data: selectData.friends },
                {key: 'pets' , value: _data.pets, label: 'Thú cưng', data: selectData.pets },
            ]
        return(
           <div className="tw3-profile__body__box">
<h5 className="tw3-h5 text--bold mb--default">HỌC TẬP CÔNG VIỆC</h5>

<form method="post" className="jsAutoSaver" action="/profile">
<div className="tw3-profileDetailsForms">
<div className="tw3-row">
<div className="tw3-col-12">
<div className="tw3-row">
<div className="tw3-col-12">
    <div className="tw3-row mb--default">
    <div className="tw3-col-12">
    <div className="tw3-form__row__label">
    <label htmlFor="FFHome">
    {fields[0].label}</label>
    </div>
    <div className="tw3-form__row__input">
    <InputText field={fields[0]} />
    </div>
    </div>
    </div>
       
    <div className="tw3-row mb--default">
    <div className="tw3-col-12">
    <div className="tw3-form__row__label">
    <label htmlFor="FFReligion">
    {fields[1].label}</label>
    </div>
    <div className="tw3-form__row__input">
    <Combobox field={fields[1]} />
    </div>
    </div>
    </div>
    
    <div className="tw3-row mb--default">
    <div className="tw3-col-12">
    <div className="tw3-form__row__label">
    <label htmlFor="FFCount">
    {fields[2].label}</label>
    </div>
    <div className="tw3-form__row__input">
    <InputText field={fields[2]} />
    </div>
    </div>
    </div>
          
    
    <div className="tw3-row mb--default">
    <div className="tw3-col-12">
    <div className="tw3-form__row__label">
    <label htmlFor="FFLive_with">
    {fields[3].label}</label>
    </div>
    <div className="tw3-form__row__input">
    <Combobox field={fields[3]} />
    </div>
    </div>
    </div>  
            
    <div className="tw3-row mb--default">
    <div className="tw3-col-12">
    <div className="tw3-form__row__label">
    <label htmlFor="FFfriends">
    {fields[4].label}</label>
    </div>
    <div className="tw3-form__row__input">
    <Combobox field={fields[4]} />
    </div>
    </div>
    </div>  
            
    <div className="tw3-row mb--default">
    <div className="tw3-col-12">
    <div className="tw3-form__row__label">
    <label htmlFor="FFPets">
    {fields[5].label}</label>
    </div>
    <div className="tw3-form__row__input">
    <Combobox field={fields[5]} />
    </div>
    </div>
    </div>    
</div>
</div>
</div>
            
</div>
</div>
</form>
</div>
        );
    }
}
function mapStateToProps(state){
    const {userDetails} = state;
    return {userDetails};
}
const connected = connect(mapStateToProps)(FamilyFriend);
export { connected as FamilyFriend }