import React from "react";
import { connect } from "react-redux";

class HeaderVisible extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div className="tw3-headerV2 tw3-headerV2--hidden tw3-headerV2--navigation--visible">
            <div className="tw3-headerV2--mobile jsHeaderMobile">
                <div className="tw3-tabsHolder">
                    <a href="/game" className="tw3-tab "><i className="tw3-iconThumbsUp tw3-iconBig tw3-iconBadge"></i></a>
                    <a href="/search" className="tw3-tab "><i className="tw3-iconSearch tw3-iconBig tw3-iconBadge"></i></a>
                    <a href="/messages" className="tw3-tab "><i className="tw3-iconChat tw3-iconBig tw3-iconBadge"><span className="badge--darkRed jsCount">1</span></i>
                    </a>
                    <a href="/activitycenter" className="tw3-tab jsActivitycenterPopover "><i className="tw3-iconAlert tw3-iconGrey  tw3-iconBig tw3-iconBadge"><span className="badge--darkRed tw3-headerV2__navigation__item__counter jsCount jsActivityCenterCounter">
            1</span></i>
                    </a>
                    <a href="javascript:;" className="tw3-tab tw3-headerV2MenuToggle jsMobileHeaderPointerMenuToggle"><i className="tw3-iconDotsOutline tw3-iconBig tw3-iconBadge pt--tight"><span className="badge--darkRed jsCount bounce" style={{display:'none'}}></span></i>
                    </a>
                </div>
            </div>
            <div className="tw3-headerV2--desktop jsHeaderDesktop">
            <div className="tw3-container">
                <a href="/" className="logo ">
                    <img id="logo" alt="Twoo" width="82" height="23" src="https://twoo-a.akamaihd.net/static/7156520574362430695506/images/logos/logo-twoo-flat@2x.png" />
                    </a>
                <ul className="tw3-headerV2__navigation clearfix left">
                    <li className="menuItem tw3-headerV2__navigation__item">
                        <a href="/game">
                            <i className="tw3-iconThumbsUp"></i>
                            <span className="tw3-headerV2__navigation__item__label">
                            Khám phá
                            </span>
                        </a>
                    </li>
                    <li className="menuItem tw3-headerV2__navigation__item">
                        <a href="/search">
                            <i className="tw3-iconSearch"></i>
                            <span className="tw3-headerV2__navigation__item__label">Tìm kiếm</span>
                        </a>
                    </li>
                    <li className="menuItem tw3-headerV2__navigation__item">
                        <a href="/messages">
                            <i className="tw3-iconChat"></i>
                            <span className="badge--darkRed jsCount" style={{verticalAlign: '4px'}}>1</span>
                            <span className="tw3-headerV2__navigation__item__label">Chat</span>
                        </a>
                    </li>
                    <li className="menuItem tw3-headerV2__navigation__item">
                        <a href="javascript:;" className="jsUploaderTrigger ">
                            <i className="tw3-iconHeartLine"></i>

                            <span className="badge--darkRed jsCount" data-type="likes" data-count="0" style={{display:'none'}}></span>
                            <span className="tw3-headerV2__navigation__item__label">
                            Người thích bạn
                            </span>
                        </a>
                    </li>
                    <li className="menuItem tw3-headerV2__navigation__item">
                        <a href="javascript:;" className="jsUploaderTrigger " data-reason="visitors" >
                            <i className="tw3-iconEye-v2">
                            </i>
                            <span className="badge--darkRed tw3-headerV2__navigation__item__counter jsCount">
                            1</span>
                            <span className="tw3-headerV2__navigation__item__label">Khách thăm</span>
                        </a>
                    </li>
                    <li className="menuItem tw3-headerV2__navigation__item">
                        <a href="/activity/whoiknow">
                            <i className="tw3-iconFriendsV2"></i>
                            <span className="badge--darkRed jsCount" style={{verticalAlign: '4px'}}>•</span>
                            <span className="tw3-headerV2__navigation__item__label">
                            Bạn bè
                            </span>
                        </a>
                    </li>
                </ul>
                <ul className="tw3-headerV2__actions clearfix right">
                <li className="menuItem tw3-headerV2__actions__item tw3-headerV2__actions__item__topupgradelink">
                    <a href="#" className="jsPaywall tw3-button tw3-button--premium tw3-button--small">
                        <span>
                        Gói Cao Cấp</span>
                    </a>
                </li>
                <li className="menuItem tw3-headerV2__actions__item tw3-headerV2__actions__item__credits">
                    <a href="/profile/popularity?r=toplink" className="tw3-button tw3-button--subtle tw3-button--small tw3-button--rounded">
                    <i className="tw3-iconCreditFilled tw3-iconYellowOrange"></i>Tín dụng
                    </a>

                </li>
                <li className="menuItem tw3-headerV2__actions__item moreOptions">
                    <a href="/profile" className="tw3-pointerMenuToggle ">
                        <i className=" tw3-iconBadge">
                        <img className="tw3-avatar tw3-avatar--circle" src="https://twoo04-a.akamaihd.net/static/588045215100091945/images/generic/avatar-male-sm.jpg" alt="323227208" width="26" height="26" />
                        <span className="badge--darkRed jsCount"></span>
                        </i>
                    </a>
                </li>


            <li className="menuItem tw3-headerV2__actions__item">
                <a href="javascript://" className="noline tw3-pointerMenuToggle jsHeaderPointerMenuNotificationsToggle ">
                    <i className="tw3-iconAlert tw3-iconWhite  tw3-iconBig tw3-iconBadge">
                    <span className="badge--darkRed jsCount" style={{verticalAlign: '4px', display: 'none' }}>
                    0</span>
                    </i>
                </a>

            <div className="tw3-pointerMenu tw3-notifications jsActivityCenterPopdown" style= {{display: 'none'}}>
            <div className="tw3-notifications__container jsActivityContainer" style={{ height: '360px'}}>


            <ul className="jsActivityList" style={{display: 'none'}}>
            </ul>

            <div className="centerBlock jsEmptyState">
                <div className="centerBlock__item">
                    <div className="text--center p--default pb--slack pt--slack">
                        <p className="mb--default">
                        <i className="tw3-iconOtherActivity tw3-iconXLarge tw3-iconLightGrey"></i>
                        </p>
                        <h4 className="tw3-h4 text--bold">
                        Các hoạt động khác sẽ xuất hiện ở đây
                        </h4>
                        <p className="text--subtle text--smaller plr--default mb--default">
                        Đưa bạn lên <span className="text--bold">Tiêu điểm</span> là cách chắc chắn để có nhiều hoạt động
                        </p>
                        <p>
                            <a href="javascript://" className="tw3-button tw3-button--spotlight tw3-button--wrap tw3-button--rounded jsBuyProduct" >
                            Lên Tiêu điểm
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            </div>
            </div>
            </li>




            <li className="menuItem tw3-headerV2__actions__item">
                <a href="#" className="noline tw3-pointerMenuToggle jsHeaderPointerMenuActivityToggle">
                    <i className="tw3-iconDotsOutline tw3-iconGrey tw3-iconBig tw3-iconBadge">
                    <span className="badge--darkRed jsCount bounce" style={{ display:'none'}}></span>
                    </i>
                </a>
            <ul className="tw3-pointerMenu dropDownMenu">
                <li>
                    <a href="javascript:;" className="noline clearfix  jsUploaderTrigger ">
                        <div className="tw3-col-9">
                            <div className="tw3-row">
                                <div className="tw3-col-2 tw3-pointerMenu__icon">
                                <i className="tw3-iconVoteYes"></i>
                                </div>
                                <div className="tw3-col-10">
                                <span className="tw3-headerV2__navigation__item__label">
                                Người bạn thích
                                </span>
                                </div>
                            </div>
                        </div>
                        <div className="tw3-col-3 text--right">

                        </div>
                    </a>
                </li>
                <li>
                    <a href="javascript:;" className="noline clearfix  jsUploaderTrigger ">
                    <div className="tw3-col-9">
                        <div className="tw3-row">
                            <div className="tw3-col-2 tw3-pointerMenu__icon">
                                <i className="tw3-iconHeartLine "></i>
                            </div>
                            <div className="tw3-col-10">
                                <span className="tw3-headerV2__navigation__item__label">
                                Người phù hợp
                                </span>
                            </div>
                        </div>
                    </div>
                        <div className="tw3-col-3 text--right">
                            <span className="badge--darkRed tw3-headerV2__navigation__item__counter jsCount" data-type="matches" data-count="0" style={{display:'none'}}></span>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" className="noline clearfix ">
                        <div className="tw3-col-9">
                            <div className="tw3-row">
                                <div className="tw3-col-2 tw3-pointerMenu__icon">
                                <i className="tw3-iconCredit ficonYellow "></i>
                                </div>
                                <div className="tw3-col-10">
                                    <span className="tw3-headerV2__navigation__item__label jsPaywall">Tín dụng</span>
                                </div>
                            </div>
                        </div>
                    <div className="tw3-col-3 text--right"></div>
                    </a>
                </li>
                <li>
                <a href="javascript:;" className="noline clearfix jsBuyProduct">
                    <div className="tw3-col-9">
                        <div className="tw3-row">
                            <div className="tw3-col-2 tw3-pointerMenu__icon">
                                <i className="tw3-iconCircleBoost tw3-iconBoostColor "></i>
                            </div>
                            <div className="tw3-col-9">
                                <span className="tw3-headerV2__navigation__item__label">Gây Chú ý</span>
                            </div>
                        </div>
                    </div>
                <div className="tw3-col-3 text--right"></div>
                </a>
                </li>
                <li>
                    <a href="#12" className="jsPaywall noline clearfix">
                        <div className="tw3-col-9">
                        <div className="tw3-row">
                                <div className="tw3-col-2 tw3-pointerMenu__icon">
                                    <i className="tw3-iconPremiumCircle tw3-iconPremiumColor ficonGreen "></i>
                                </div>
                                <div className="tw3-col-9">
                                    <span className="tw3-headerV2__navigation__item__label">
                                    Kích hoạt Gói Cao Cấp 
                                    </span>
                                </div>
                            </div>
                        </div>
                    <div className="tw3-col-3 text--right"></div>
                    </a>
                </li>
                <li className="tw3-pointerMenu__item--grey">
                    <a href="/settings" className="noline clearfix ">
                        <div className="tw3-col-9">
                            <div className="tw3-row">
                                <div className="tw3-col-2 tw3-pointerMenu__icon">
                                    <i className="tw3-iconSettings "></i>
                                </div>
                                <div className="tw3-col-10">
                                    <span className="tw3-headerV2__navigation__item__label">Thiết lập</span>
                                </div>
                            </div>
                        </div>
                    <div className="tw3-col-3 text--right"></div>
                    </a>
                </li>
                <li className="tw3-pointerMenu__item--grey">
                    <a className="jsPaywall trackgavpv clearfix">
                        <span className="fakeLink m0 noline clearfix ">
                            <div className="tw3-col-1 tw3-pointerMenu__icon">
                                <img src="https://twoo-a.akamaihd.net/static/8370311641184695922001/images/onboarding/img-trans-robot.png" width="16" height="16" className="robot" />
                            </div>
                            <div className="tw3-col-7">
                                <span className="tw3-headerV2__navigation__item__label ml--compact">Duyệt ẩn danh</span>
                            </div>
                            <div className="tw3-col-3 text--right jsToggleAnonymousContainer">
                                <div className="tw3-switch">
                                <input id="cmn-toggle-4" className="tw3-switch__ui tw3-switch__ui--flat" type="checkbox" />
                                <label htmlFor="cmn-toggle-4"></label>
                                </div>
                            </div>
                        </span>
                    </a>
                </li>
                <li id="logoutButtonContainer" className="last tw3-pointerMenu__item--grey">
                    <a href="/login/?action=logout&amp;lng=vi&amp;twoo_csrf_token=7e79d8d0cf07970e89d4abcca169f073_1525978909" id="logoutLinkResponsive" className="noline clearfix ">
                        <div className="tw3-col-9">
                            <div className="tw3-row">
                                <div className="tw3-col-2 tw3-pointerMenu__icon">
                                <i className="tw3-iconLogout "></i>
                                </div>
                                <div className="tw3-col-10">
                                    <span className="tw3-headerV2__navigation__item__label">Đăng xuất</span>
                                </div>
                            </div>
                        </div>
                    <div className="tw3-col-3 text--right"></div>
                    </a>
                </li>
            </ul>
            </li>


            </ul>



            </div>
            </div>
            </div>

        )
    }
}
function mapStateToProps(state){
    return state;
}
const connectedHeaderVisible=connect(mapStateToProps)(HeaderVisible);
export { connectedHeaderVisible as HeaderVisible}
