import React from "react";
import { connect } from "react-redux";

class QuestionCatalog extends React.Component{
    
    render(){
        return (
            <div className="tw3-profile__body__box">
                <h5 className="jsEditableBlockTitle text--bold tw3-h5">CÂU HỎI PHÙ HỢP</h5>
                    <p className="mb--default text--subtle text--smaller">
                        Bạn đã trả lời <span className="jsMutualCount">1</span> trong số <span className="jsTotalQuestionsCount">50</span> câu hỏi của cô ấy</p>
                    <a href="javascript://" className="tw3-button tw3-button--subtle tw3-button--blue tw3-button--full tw3-button--rounded jsSwitchView">VÀO MỤC CÂU HỎI (50)</a>
            </div>
        )
    }
}
function mapStateToProps(state){
    return state;
}
const connectedQuestionCatalog=connect(mapStateToProps)(QuestionCatalog);
export {connectedQuestionCatalog as QuestionCatalog}