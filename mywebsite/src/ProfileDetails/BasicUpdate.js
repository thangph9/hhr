import React from "react";
import { connect} from "react-redux";
import { InputText,Contributors,Combobox } from "../Form";
const suggestion=require("../data/suggestion");
const selectData=require("../data/single");

class Basic extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {users,userDetails} = this.props;
        const fields=[
            {key:'fullname',value:(users.item && users.item.status && users.item.user.length > 0) ? users.item.user[0].fullname : '',label:'Tên',data:[] , className: 'tw3-text'},
            {key:'phone',value:(users.item && users.item.status && users.item.user.length > 0) ? users.item.user[0].phone : '',label:'SDT',data:[] , className: 'tw3-text'},
            
            {key:'hhr_goal',value:(userDetails.user && userDetails.user.status && userDetails.user.result.length > 0) ? userDetails.user.result[0].hhr_goal : {},
             label:'Bạn tham gia HHR để',data:selectData.hhr_goal },
            
            {key:'relationship_status',value:(userDetails.user && userDetails.user.status && userDetails.user.result.length > 0) ? userDetails.user.result[0].relationship_status : {},
             label:'Mối quan hệ hiện tại.',data:selectData.relationship_status },
            
        ]
        return(
            <div className="tw3-profile__body__box">
            <h5 className="tw3-h5 text--bold mb--default">THÔNG TIN TỔNG QUÁT</h5>
            <div className="tw3-field__edit tw3-field__edit--area">
            <p>Hãy cẩn thận khi bạn thay đổi thông tin ngày sinh và giới tính của mình. Bạn chỉ được đổi một lần thôi!</p>
            <div className="tw3-row">
                <div className="tw3-col-12 mb--default">
                    <div className="tw3-row">
                        <div className="tw3-col-12">
                            <div className="tw3-row">
                                <div className="tw3-col-12 mb--default">
                                    <div className="tw3-form__row__label">
                                    <label htmlFor="firstname">{fields[0].label}</label>
                                    </div>
                                    <div className="tw3-form__row__input">
                                    <InputText field={fields[0]} type="user" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tw3-col-12 mb--default">
                    <div className="tw3-row">
                        <div className="tw3-col-12">
                            <div className="tw3-row">
                                <div className="tw3-col-12 mb--default">
                                    <div className="tw3-form__row__label">
                                    <label htmlFor="firstname">{fields[1].label}</label>
                                    </div>
                                    <div className="tw3-form__row__input">
                                    <InputText field={fields[1]} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tw3-col-12 mb--default">
                    <div className="tw3-row">
                        <div className="tw3-col-12">
                            <div className="tw3-row">
                                <div className="tw3-col-12 mb--default">
                                    <div className="tw3-form__row__label">
                                    <label htmlFor="firstname">{fields[2].label}</label>
                                    </div>
                                    <div className="tw3-form__row__input">
                                    <Combobox field={fields[2]} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tw3-col-12 mb--default">
                    <div className="tw3-row">
                        <div className="tw3-col-12">
                            <div className="tw3-row">
                                <div className="tw3-col-12 mb--default">
                                    <div className="tw3-form__row__label">
                                    <label htmlFor="firstname">{fields[3].label}</label>
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
            </div>

        )
    }
}
function mapStateToProps(state){
    const {users, authentication, userDetails} =state;
    return {users, authentication, userDetails};
}
const connected=connect(mapStateToProps)(Basic);
export {connected as Basic};