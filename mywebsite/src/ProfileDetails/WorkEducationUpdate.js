import React from "react";
import { connect } from "react-redux";
import { Combobox, InputText } from "../Form";
const selectData=require('../data/single');
class WorkEducation extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        const {userDetails} = this.props;
        const _data={
            jobs: (userDetails.user && userDetails.user.status && userDetails.user.result.length > 0 ) ? userDetails.user.result[0].jobs : {},
            graduation: (userDetails.user && userDetails.user.status && userDetails.user.result.length > 0 ) ? userDetails.user.result[0].graduation : {},
            majors: (userDetails.user && userDetails.user.status && userDetails.user.result.length > 0 ) ? userDetails.user.result[0].majors : '',
        };
        const fields=[
                {key: 'jobs', value:_data.jobs , label: 'Công việc', data:selectData.jobs},
                {key: 'graduation', value:_data.graduation , label: 'Tốt nghiệp', data:selectData.graduation},
                {key: 'majors',label: 'Ngành học', value: _data.majors, className: 'tw3-text',data: []  },
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
    <label htmlFor="workJobs">
    {fields[0].label}</label>
    </div>
    <div className="tw3-form__row__input">
    <Combobox field={fields[0]} />
    </div>
    </div>
    </div>
       
    <div className="tw3-row mb--default">
    <div className="tw3-col-12">
    <div className="tw3-form__row__label">
    <label htmlFor="workGraduation">
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
    <label htmlFor="workMajors">
    {fields[2].label}</label>
    </div>
    <div className="tw3-form__row__input">
    <InputText field={fields[2]} />
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
    return { userDetails };
}
const connected = connect(mapStateToProps)(WorkEducation);
export { connected as WorkEducation }