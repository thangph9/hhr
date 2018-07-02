import React from "react";
import {connect } from "react-redux";

class LikeView extends React.Component{
    render(){
        return(
            <li className="row cp jsVisitButton">
                <div className="peopleList__item__image">
                    <a href=" /photos/?u=1450808601&amp;view=show&amp;id=674691327#photo" className="tw3-avatarContainer photoBox">
                        <img src="https://twoo01-a.akamaihd.net/t/38663ba48bff8923f944e5a69fed1bd2_1_6_0_1414_1414_180_180_0014890541.jpg" alt="Huyen" className="tw3-avatar--circle tw3-avatar--fluid" />
                        </a>
                </div>
                <div className="peopleList__item__info">
                    <p className="peopleList__item__info__title">
                        <a href="/1450808601?r=likes" className="text--bold jsVisitButton" >Huyen, 36</a>
                    </p>
                    <p className="peopleList__item__info__description text--small">
                                        Hà Nội · Quản lý marketing hoặc bán hàng
                    </p>
                    </div>
                    <div className="peopleList__item__actions">
                    <div>
                        <a href="#" className="jsChatButton tw3-button tw3-button--subtle tw3-button--grey jsChatLink" >
                            <i className="tw3-iconDoubleBubble tw3-iconMedium"></i> 
                                <span>Chat với cô ấy</span>
                        </a>
                    </div>
                </div>
            </li>
        )
    }
}
function mapStateToProps(state){
    return state;
}
const connected = connect(mapStateToProps)(LikeView);
export { connected as LikeView };