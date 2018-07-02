import React from "react";
import { connect } from "react-redux";
import { Contributors,Combobox,InputText } from "../Form";
const selectData=require("../data/single");
const suggestion=require("../data/suggestion");

class Figure extends React.Component{
    constructor(props){
        super(props);
        
    }
    handleSelectHeight(e){
        
    }
    render(){
        const { userDetails } = this.props;
        const _data={
            height      :  (userDetails.user && userDetails.user.status && userDetails.user.result.length > 0) ? userDetails.user.result[0].height : '',
            appearance  : (userDetails.user && userDetails.user.status && userDetails.user.result.length > 0) ? userDetails.user.result[0].appearance : {},
            glasses     : (userDetails.user && userDetails.user.status && userDetails.user.result.length > 0) ? userDetails.user.result[0].glasses : {},
            tattoo      : (userDetails.user && userDetails.user.status && userDetails.user.result.length > 0) ? userDetails.user.result[0].tattoo : {},
            plastic_surgery : (userDetails.user && userDetails.user.status && userDetails.user.result.length > 0) ? userDetails.user.result[0].plastic_surgery : {},
            clothing    : (userDetails.user && userDetails.user.status && userDetails.user.result.length > 0) ? userDetails.user.result[0].clothing : {},
            best_part   : (userDetails.user && userDetails.user.status && userDetails.user.result.length > 0) ? userDetails.user.result[0].best_part : {},
        }
        
        const fields=[
                {key: 'height', value: _data.height, label: 'Chiều cao', data: suggestion.heigth  ,className: 'tw3-text'
                },
                {key: 'appearance', value: _data.appearance, label: 'Nhìn tổng thể', data: selectData.appearance },
                {key: 'glasses', value: _data.glasses, label: 'Cận thị', data: selectData.glasses },
                {key: 'tattoo', value: _data.tattoo, label: 'Xăm hình', data: selectData.tattoo },
                {key: 'plastic_surgery', value: _data.plastic_surgery, label: 'Phẫu Thuật thẩm mỹ', data: selectData.plastic_surgery },
                {key: 'clothing', value: _data.clothing, label: 'Thời trang', data: selectData.clothing },
                {key: 'best_part', value: _data.best_part, label: 'Tự hào nhất cơ thể', data: selectData.best_part },
                
            ]
        
        return(
            
<div className="tw3-profile__body__box">
<h5 className="tw3-h5 text--bold mb--default">DÁNG VẺ</h5>
<form method="post" className="jsAutoSaver" action="/profile">
<div className="tw3-profileDetailsForms">
    <div className="tw3-row">
        <div className="tw3-col-12">
            <div className="tw3-row mb--default">
                <div className="tw3-col-12">
                <div className="tw3-form__row__label">
                    <label htmlFor="ethnicity">{fields[0].label}</label>
                </div>
                    <InputText field={fields[0]} />
                </div>
            </div>
            <div className="tw3-row mb--default">
                <div className="tw3-col-12">
                <div className="tw3-form__row__label">
                <label htmlFor="silhouette">
                {fields[1].label}
                </label>
                </div>
                    <Combobox field={fields[1]} />
                </div>
            </div>
            
            <div className="tw3-row mb--default">
                <div className="tw3-col-12">
                <div className="tw3-form__row__label">
                <label htmlFor="silhouette">
                {fields[2].label}
                </label>
                </div>
                    <Combobox field={fields[2]} />
                </div>
            </div>
            
            <div className="tw3-row mb--default">
                <div className="tw3-col-12">
                <div className="tw3-form__row__label">
                <label htmlFor="silhouette">
                {fields[3].label}
                </label>
                </div>
                    <Combobox field={fields[3]} />
                </div>
            </div>
            <div className="tw3-row mb--default">
                <div className="tw3-col-12">
                <div className="tw3-form__row__label">
                <label htmlFor="silhouette">
                {fields[4].label}
                </label>
                </div>
                    <Combobox field={fields[4]} />
                </div>
            </div>
            <div className="tw3-row mb--default">
                <div className="tw3-col-12">
                <div className="tw3-form__row__label">
                <label htmlFor="silhouette">
                {fields[5].label}
                </label>
                </div>
                    <Combobox field={fields[5]} />
                </div>
            </div>
            <div className="tw3-row mb--default">
                <div className="tw3-col-12">
                <div className="tw3-form__row__label">
                <label htmlFor="silhouette">
            {fields[6].label}
                </label>
                </div>
                    <Combobox field={fields[6]} />
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
    const { userDetails} =state;
    return {userDetails};
}
const connected = connect(mapStateToProps)(Figure);
export { connected as Figure }