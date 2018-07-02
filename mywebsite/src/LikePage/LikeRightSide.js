import React from "react";
import {connect } from "react-redux";
import { LikeListView } from "./index";
class LikeRightSide extends React.Component{
    render(){
        return(
            <div className="tw3-bp4-col-4 tw3-col-hide tw3-bp4-col-show-block">
    <div className="jsSidebar tw3-sidebarContainer" id="profileBar">

        <div className="tw3-box mb--compact">
            <div className="jsQaTrigger el--overflow cp jsInitialized">

                <div className="jsQaQuestion text--center p--default">


                    <a href="/profile?qaId=218#panel=questions" className="noline">
                        <div className="text--center mt--tight">
                            <div className="text--subtle">
                                <span className="jsQaInitTitle">
Tăng số người phù hợp với bạn
                                </span>
                                <span className="jsQaAnsweredTitle hide">Bạn đã trả lời <span className="jsQaAnsweredCount">1</span> trong số <span className="jsQaTotalCount">50</span> câu hỏi</span>
                            </div>
                        </div>
                        <div className="jsQaQuestionContainer" style={{height: '109px'}}>
                            <div className="jsQaQuestionBoxWrapper text--center">
                                <div className="jsQaQuestionBox questionBox" style={{height: '109px'}}>
                                    <div className="questionBox--question">
                                        <h4 className="jsQaQuestionString">
                                            Bạn có khinh những người quá thừa cân?</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    <p className="text--center">
                        <a href="#"  className="jsAnswerButton tw3-button tw3-button--blue tw3-button--large mr--compact tw3-button--rounded">
                            <span className=" jsAnswerButtonText">Không</span>
                            <i className="tw3-iconCloseCross tw3-iconWhite hide jsAnswerButtonFicon"></i>
                        </a>
                        <a href="#" className="jsAnswerButton tw3-button tw3-button--blue tw3-button--large tw3-button--rounded">
                            <span className=" jsAnswerButtonText">Có</span>
                            <i className="tw3-iconCheckThin tw3-iconWhite hide jsAnswerButtonFicon"></i>
                        </a>
                    </p>


                </div>

                <div className="jsQaAllSet hide p--default">

                    <a href="/profile?qaId=616#panel=questions" className="noline">
                        <h4 className="tw3-h4">
                            Bạn đã xong!
                        </h4>
                        <p className="text--center">
                            <small className="text--subtle">
Bạn có thể trả lời thêm vài câu hỏi để tìm được người phù hợp hơn
                            </small>
                        </p>
                    </a>
                    <p className="text--center">
                        <a href="/profile?qaId=616#panel=questions" className="tw3-button tw3-button--blue tw3-button--rounded">Trả lời thêm</a>
                    </p>
                </div>

            </div>

        </div>

        <div className="tw3-box--padding--off mb--compact">
            <ul className="tw3-menu__top">
                <li>
                    <div className="tw3-completeContainer tw3-row">
                        <div className="jsBoostMenu jsUserComplete clearfix">
                            <div className="tw3-col-4">
                                <a href="/profile" className=""><img src="https://twoo04-a.akamaihd.net/t/bb825237b35727d85c6d68e3345f8917_1_6_0_900_1200_180_180_0016630872.jpg" className="tw3-avatar tw3-avatar--circle tw3-avatar--fluid"/></a>
                            </div>
                            <div className="tw3-col-8 ">
                                <p className="text--small text--subtle mb--tight">Lượng thông tin đã điền</p>
                                <div className="clearfix jsContent">
                                    <div className="tw3-completeContainer__bar mb--compact">
                                        <span className="tw3-completeContainer__bar__overlay" style={{width: '35%', background: '#FF7102'}}></span>
                                    </div>
                                    <p className="mb--tight">
                                        <a href="/profile?editable=aboutme#panels" className="text--blue"><i className="ficonEdit"></i> Viết vài dòng về bạn</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <ul className="tw3-menu">
                <li>
                    <div className="tw3-row">
                        <a href="/likes" className=" ">
                            <div className="tw3-menu__avatar">
                                <i className="tw3-iconThumbsUp tw3-iconBig"></i>
                            </div>
                            <div className="tw3-menu__title">
                                Người thích bạn
                                <span data-type="likes" className="jsCount tw3-badge badge--darkRed" style={{display: 'none'}}></span>
                            </div>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="tw3-row">
                        <a href="/activity/likes" className="  selected">
                            <div className="tw3-menu__avatar">
                                <i className="tw3-iconVoteYes tw3-iconBig"></i>
                            </div>
                            <div className="tw3-menu__title">
                                Người bạn thích
                            </div>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="tw3-row">
                        <a href="/activity/matches" className=" ">
                            <div className="tw3-menu__avatar">
                                <i className="tw3-iconHeartLine tw3-iconBig"></i>
                            </div>
                            <div className="tw3-menu__title">
                                Người phù hợp
                                <span data-type="matches"  className="jsCount tw3-badge badge--darkRed" style={{display: 'none'}}>
</span>
                            </div>
                        </a>
                    </div>
                </li>
            </ul>
            <ul className="tw3-menu tw3-menu--dark tw3-menu--dark--single">
                <li className="clearfix" title="Chúng tôi ẩn danh tính của bạn khi bạn thăm các thành viên khác">
                    <div className="tw3-row">
                        <div className="tw3-menu__avatar">
                            <img src="https://twoo-a.akamaihd.net/static/8370311641184695922001/images/onboarding/img-trans-robot.png" width="24" height="24" className="robot"/>
                        </div>
                        <div className="tw3-menu__title">
                            <div className="tw3-row ">
                                <div className="tw3-col-8">
                                    Lướt Ẩn danh
                                </div>
                                <div className="tw3-col-4">
                                    <a className="tw3-switch--container jsPaywall trackgavpv" title="Chúng tôi ẩn danh tính của bạn khi bạn thăm các thành viên khác">
                                        <div className="tw3-switch">
                                            <input id="cmn-toggle-4" className="tw3-switch__ui tw3-switch__ui--flat" type="checkbox" />
                                            <label htmlFor="cmn-toggle-4"></label>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <div className="tw3-box--padding--off mb--compact">
            <div className="hide tw3-bp4-col-show-block text--center">
                <div className="jsAd b0 oh" >
                    <div id="div-gpt-ad-1521047866953-1">
                        <div id="google_ads_iframe_/109035908/mat.twoo/whoyoulike_0__container__" style={{border: '0pt none'}}></div>
                    </div>
                </div>
                <p className="text--small jsNoMoreAds"><small>Quảng cáo —&nbsp;
<a href="#"  className="jsPaywall">Gói Cao Cấp không hiện quảng cáo</a></small>
                </p>
            </div>
        </div>




    </div>



</div>

        )
    }
}
function mapStateToProps(state){
    return state;
}
const connected = connect(mapStateToProps)(LikeRightSide);
export { connected as LikeRightSide };