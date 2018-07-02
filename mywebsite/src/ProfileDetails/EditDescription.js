import React from "react";
import { connect } from "react-redux";
import {userActions} from "../actions";
class EditDescription extends React.Component{
    constructor(props){
        super(props);
        this.state={
            description : '',
            submitted   : false,
            active      : false,
            open        : false,
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleEditDesc=this.handleEditDesc.bind(this);
        this.handleActive=this.handleActive.bind(this);

    }
    handleChange(e){
        //console.log(e);
        const {name,value} = e.target;
        this.setState({
            [name]: value 
        });
        this.setState({
            open:true
        });
    }
    handleEditDesc(){
        const { dispatch, authentication } = this.props;
        
        this.setState({
            active      : false,
            submitted   : true
        });
        const user={
            field: 'description',
            value:this.state.description,
            user_id:authentication.loggedIn ? authentication.user.user_id : '',
        }
        dispatch(userActions.updateUser(user));
    }
    handleActive(){
        this.setState({
            active: true,
        })
    }
    handleNull(){ }
//tw3-editable__block jsEditableBlock mb--compact     
    render(){
        const { description } = this.state;
        const {userUpdate , userDetails} = this.props;
        var userd=(userUpdate.user && userUpdate.user.status && userUpdate.user.result && userUpdate.user.result.value) ? userUpdate.user.result.value : ''; 
        var useru=(userDetails.user && userDetails.user.status && userDetails.user.result.length > 0 ) ? userDetails.user.result[0].description : ''; 
        var des=useru;
        //console.log(this.state);
        //console.log(des);
        return(
    <div className="tw3-profile__body__box">
            
    <div className={ (this.state.active) ?  'tw3-editable__block jsEditableBlock mb--compact  tw3-editable__block--editing' : 'tw3-editable__block jsEditableBlock mb--compact ' } onClick={ (this.state.active) ? this.handleNull() : this.handleActive}  >
        <h5 className="jsEditableBlockTitle text--bold tw3-h5 mb--default">VỀ BẠN</h5>
        <div className="tw3-field__editIcon">
            <i className="tw3-iconDefault tw3-iconGrey jsEditableToggle tw3-iconPencil" data-type="toggle"  style={{display: (this.state.active) ? 'none' : 'block'}}></i>
            <span className="jsEditableToggle jsDoneSave text--bold text--blue text--smaller cursor--pt" onClick={this.handleEditDesc} style={{display: (this.state.active) ? 'block' : 'none'}}>
            XONG <i className="tw3-iconCheckSolid"></i>
            </span>
        </div>

        <div className="tw3-field">
            <div className="tw3-field__view">
            <p className="text--subtler mb--none">
            Giới thiệu về bạn.
            </p>
            </div>

            <div className="tw3-field__edit tw3-field__edit--area">
                <form method="post" name="desc" action="/profile">
                    <textarea name="description" className="tw3-textarea jsAutoExpandTextarea jsMaxCharsTextarea mb--compact" onChange={this.handleChange} maxLength="550" placeholder="Giới thiệu về bạn." value={(this.state.open ) ? description : des}></textarea>
                    <span className="jsIntroMessageCharactersLeft text--small right text--subtle">{550 - description.length}</span>
                </form>
            </div>
        </div>
    </div>
</div>
        );
    }
}
function mapStateToProps(state){
    const {authentication,userUpdate,userDetails} = state;
    return { authentication,userUpdate,userDetails };
}
const connected = connect(mapStateToProps)(EditDescription);
export { connected as EditDescription }