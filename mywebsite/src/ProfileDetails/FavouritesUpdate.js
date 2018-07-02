import React from "react";
import { connect } from "react-redux";
import { InputText,Combobox, Contributors } from "../Form";
const CONTRIBUTORS = require('../data/contributors');
const selectData=require('../data/single');
class Favourites extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        const {userDetails} = this.props;
        const _data={
            smoking : (userDetails.user && userDetails.user.status && userDetails.user.result.length > 0) ? userDetails.user.result[0].smoking : {},
            sport   : (userDetails.user && userDetails.user.status && userDetails.user.result.length > 0) ? userDetails.user.result[0].sport : {},
            travel  : (userDetails.user && userDetails.user.status && userDetails.user.result.length > 0) ? userDetails.user.result[0].travel : {},
        }
       const fields=[
                {key: 'food',label: 'Mon An', value: 'Ca kho' , className: 'tw3-text'  },
                {key: 'smoking',label: 'Hút thuốc', value: _data.smoking , data:selectData.smoking  },
                {key: 'sport',label: 'Thể thao', value: _data.sport , data:selectData.sport  },
                {key: 'travel',label: 'Du lịch', value: _data.travel , data:selectData.travel  },
            ]
        
        return(
<div className="tw3-profile__body__box">
<h5 className="tw3-h5 text--bold mb--default">DANH SÁCH YÊU THÍCH</h5>

<form method="post" className="jsAutoSaver" action="/profile">
<div className="tw3-profileDetailsForms">
<div className="tw3-row">
<div className="tw3-col-12">
<div className="tw3-row">
<div className="tw3-col-12">
    <div className="tw3-row mb--default">
    <div className="tw3-col-12">
    <div className="tw3-form__row__label">
    <label htmlFor="favSmoking">
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
    <label htmlFor="favSport">
    {fields[2].label}</label>
    </div>
    <div className="tw3-form__row__input">
    <Combobox field={fields[2]} />
    </div>
    </div>
    </div>
    <div className="tw3-row mb--default">
    <div className="tw3-col-12">
    <div className="tw3-form__row__label">
    <label htmlFor="favTravel">
    {fields[3].label}</label>
    </div>
    <div className="tw3-form__row__input">
    <Combobox field={fields[3]} />
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
    return { userDetails };
}
const connected = connect(mapStateToProps)(Favourites);
export { connected as Favourites }