import React from "react";
import { connect } from "react-redux";
import { Contributors, Combobox } from "../Form";

const CONTRIBUTORS = require('../data/contributors');
const SINGLE       = require('../data/single');
const OPTION=SINGLE;
class Personality extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const  { userDetails } =this.props;
        const _data={
            general_personality : (userDetails.user && userDetails.user.status && userDetails.user.result.length > 0) ? userDetails.user.result[0].general_personality : [],
            jealousy            : (userDetails.user && userDetails.user.status && userDetails.user.result.length > 0) ? userDetails.user.result[0].jealousy : {},
        }
       
        const groups=[
                {
                   title: 'TÍNH CÁCH',
                   fields:[
                        { key: 'general_personality', label: 'Tính cách chung',data: CONTRIBUTORS.personality,value: _data.general_personality },
                        { key: 'jealousy', label: 'Hay ghen không',data: OPTION.jealousy ,value: _data.jealousy },
                    ] 
                }
            ]
        const { fields }= groups[0];
        //console.log(fields);
        return(
<div className="tw3-profile__body__box">
<h5 className="tw3-h5 text--bold mb--default">TÍNH CÁCH</h5>
    <div className="tw3-profileDetailsForms">
        <div className="tw3-row">
            <div className="tw3-col-12">
                <div className="tw3-row">
                    <div className="tw3-col-12">
                        <div className="tw3-row mb--default">
                            <div className="tw3-col-12">
                                    <div className="tw3-form__row__label">
                                    <label htmlFor="character">
                                    Tính cách
                                    </label>
                                    </div>
                                    <Contributors field={fields[0]} multi={true} />
                            </div>
                        </div>
                        <div className="tw3-row mb--default">
                            <div className="tw3-col-12">
                                    <div className="tw3-form__row__label">
                                    <label htmlFor="character">
                                    {fields[1].label}
                                    </label>
                                    </div>
                                    <Combobox field={fields[1]}  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        );
    }
}
function mapStateToProps(state){
    const {userDetails} = state;
    return { userDetails };
}
const connected = connect(mapStateToProps)(Personality);
export { connected as Personality }