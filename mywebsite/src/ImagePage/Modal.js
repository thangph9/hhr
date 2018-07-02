import React from "react";
import { connect } from "react-redux";
import { modalActions } from "../actions";
class Modal extends React.Component{
    constructor(props){
        super(props);
        this.closeModal=this.closeModal.bind(this);
    }
    closeModal(e){
        const { dispatch } =this.props;
        dispatch(modalActions.closeModal());
        //e.stopPropagation();
        //history.goBack();
    }
    render(){
        const { modal } = this.props;
        const index=(modal.modals.length - 1 > 0) ? (modal.modals.length - 1) : 0;
        return (
        <div>    
        { (modal.modals.length > 0) ? (
            <div className={ `tw3-modal  ${modal.modals[index].className}   tw3-modal--open`}>
                <div className="tw3-modal__overlay jsModalOverlay" onClick={this.closeModal} ></div>
                <div className="centerBlock">
                    <div className="centerBlock__item">
                        <div className="tw3-modal__content clearfix  jsDialogContent  ">
                            <div className="tw3-modal__close">
                                <a href="javascript://" className="jsClose"><i className="ficonFilled" onClick={this.closeModal}><i className="tw3-iconClose tw3-iconWhite"></i></i></a>
                            </div>
                            { modal.modals[index].content }
                        </div>
                    </div>
                </div>
            </div>
         ) : ''
          
        }
           </div>   
        )
    }
}
function mapStateToProps(state){
    const { modal } = state;
    return { modal };
}
const connectedModal =connect(mapStateToProps)(Modal);
export { connectedModal as Modal }
