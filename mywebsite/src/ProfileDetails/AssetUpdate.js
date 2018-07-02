import React from "react";
import { connect } from "react-redux";
import { InputText, Combobox } from "../Form";
const selectData=require("../data/single");
const suggestion=require("../data/suggestion");
class Asset extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const { userDetails } = this.props;
        const _data={
            
            asset_overview:(userDetails.user && userDetails.user.status && userDetails.user.result.length > 0 ) ? userDetails.user.result[0].asset_overview : '',
            house:(userDetails.user && userDetails.user.status && userDetails.user.result.length > 0 ) ? userDetails.user.result[0].house : {},
            cars : (userDetails.user && userDetails.user.status && userDetails.user.result.length > 0 ) ? userDetails.user.result[0].cars : {},
            monthly_income: (userDetails.user && userDetails.user.status && userDetails.user.result.length > 0 ) ? userDetails.user.result[0].monthly_income : '',
            
        };
        const  fields=[
                {key: 'asset_overview', label: 'Tổng quan tài sản', value: _data.asset_overview, data: suggestion.asset_overview, className: 'tw3-text'},
                {key: 'house', label: 'Nhà riêng', value: _data.house, data: selectData.house},
                {key: 'cars', label: 'Xe ô tô con', value: _data.cars, data: selectData.cars},
                {key: 'monthly_income', label: 'Thu nhập hàng tháng', value: _data.monthly_income, data:suggestion.monthly_income ,className: 'tw3-text'},
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
    <label htmlFor="assetOverview">
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
    <label htmlFor="assetHouse">
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
    <label htmlFor="assetCars">
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
    <label htmlFor="assetMonthly">
    {fields[3].label}</label>
    </div>
    <div className="tw3-form__row__input">
    <InputText field={fields[3]} />
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
    const { userDetails } = state;
    return {userDetails};
}
const connected = connect(mapStateToProps)(Asset);
export { connected as Asset }