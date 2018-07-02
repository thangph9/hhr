import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userActions } from "../actions";
class Header extends React.Component{
    constructor(props){
        super(props);
      this.state={
          menuActive: false
      }  
    this.handleHeaderPointerMenuActivityToggle=this.handleHeaderPointerMenuActivityToggle.bind(this);
    }
    componentDidMount(){
        const { authentication } = this.props;
        var userid="";
        if(authentication.loggedIn){
            //console.log(this.props);
            userid=authentication.user.user_id;
            this.props.dispatch(userActions.getUserById(userid));
            //console.log(authentication);
        }
    }
    handleHeaderPointerMenuActivityToggle(){
        
        //const { manuActive } = this.state;
        const currentState   =this.state.menuActive;
        this.setState({
            menuActive : !currentState
        })
    }
    render(){
        //console.log(this.state.menuActive);
        const hostname= window.location.protocol + '//' + window.location.hostname;
        const { users,view }  =this.props;
        var _users=(users.item && users.item.status && users.item.user.length > 0) ? users.item.user[0] : {};
        let previewThumbnail='';
        if(_users.preview_thumbnail){
            previewThumbnail=hostname+":3001/image/t/"+_users.preview_thumbnail;
        }else{
            if(_users.gender == 1){
                previewThumbnail="/img/avatar-male-sm.jpg";
            }
            if(_users.gender==2){
                previewThumbnail="/img/avatar-female-sm.jpg";
            }
        }
        if(previewThumbnail==''){
            previewThumbnail="/img/avatar-male-sm.jpg";
        }
        var _data={
            fullname            : _users.fullname,
            preview_thumbnail   : _users.preview_thumbnail,
            age                 : (_users.dob_year) ? (new Date().getFullYear() - _users.dob_year) : '0',
            address             : _users.address,
            previewThumbnail    : previewThumbnail,
        }
        //console.log(this.props);
       // {`${hostname}:3001/image/t/${_data.preview_thumbnail}`}
       return (
             
 <div className="tw3-headerV2   tw3-headerV2--navigation--visible jsHeader">        
    <div className="tw3-headerV2--mobile jsHeaderMobile">
        <div className="tw3-tabsHolder">
            <a href="/game" className="tw3-tab ">
               <i className="tw3-iconThumbsUp tw3-iconBig tw3-iconBadge"></i>
            </a>
            <a href="/search" className="tw3-tab  selected">
               <i className="tw3-iconSearchSolid tw3-iconBig tw3-iconBadge"></i>
            </a>
            <a href="/messages" className="tw3-tab ">
               <i className="tw3-iconChat tw3-iconBig tw3-iconBadge">
                    <span className="badge--darkRed jsCount"  style={{display: 'none'}}></span>
               </i>
            </a>
            <a href="/activitycenter" className="tw3-tab jsActivitycenterPopover ">
               <i className="tw3-iconAlert tw3-iconGrey  tw3-iconBig tw3-iconBadge"></i>
            </a>
            <a href="javascript:;" className="tw3-tab tw3-headerV2MenuToggle jsMobileHeaderPointerMenuToggle">
               <i className="tw3-iconDotsOutline tw3-iconBig tw3-iconBadge pt--tight">
                    <span className="badge--darkRed jsCount bounce"   style={{display:'none'}}></span>
               </i>
            </a>
        </div>
    </div>
    <div className="tw3-headerV2--desktop jsHeaderDesktop">
        <div className="tw3-container">
            <a href="/" className="logo ">
               <img id="logo" alt="HHR" width="82" height="23" src="/img/logo.png" />
            </a>
            <ul className="tw3-headerV2__navigation clearfix left">
                <li className={(view=='game') ? 'menuItem tw3-headerV2__navigation__item selected' : ' menuItem tw3-headerV2__navigation__item'}>
                    <Link to="/game" >
                        <i className="tw3-iconThumbsUp"></i>
                        <span className="tw3-headerV2__navigation__item__label">Khám phá
                        </span>
                    </Link>
                </li>
                <li className={(view=='search') ? 'menuItem tw3-headerV2__navigation__item selected' : ' menuItem tw3-headerV2__navigation__item'}>
                    <Link to="/search" >
                        <i className="tw3-iconSearchSolid"></i>
                        <span className="tw3-headerV2__navigation__item__label">Tìm kiếm</span>
                    </Link>
                </li>
                <li className={(view=='messages') ? 'menuItem tw3-headerV2__navigation__item selected' : ' menuItem tw3-headerV2__navigation__item'}>
                    <Link to="/messages">
                        <i className="tw3-iconChat"></i>
                        <span className="badge--darkRed jsCount"  style= {{verticalAlign: '4px',display: 'none'}}></span>
                    <span className="tw3-headerV2__navigation__item__label">Chat</span>
                    </Link>
                </li>
                <li className={(view=='likes') ? 'menuItem tw3-headerV2__navigation__item selected' : ' menuItem tw3-headerV2__navigation__item'}>
                    <Link to="/likes" >
                        <i className="tw3-iconHeartLine"></i>
                    <span className="badge--darkRed jsCount" style={{display: 'none'}}></span>
                    <span className="tw3-headerV2__navigation__item__label">Người thích bạn</span>
                    </Link>
                </li>
                <li className={(view=='views') ? 'menuItem tw3-headerV2__navigation__item selected' : ' menuItem tw3-headerV2__navigation__item'}>
                    <Link to="/views">
                        <i className="tw3-iconEye-v2">
                        </i>
                        <span className="badge--darkRed tw3-headerV2__navigation__item__counter jsCount" style={{display:'none'}}></span>
                        <span className="tw3-headerV2__navigation__item__label">Khách thăm</span>
                    </Link>
                 </li>
                 <li className="menuItem tw3-headerV2__navigation__item">
                    <Link to="/activity/whoiknow" >
                        <i className="tw3-iconFriendsV2"></i>
                        <span className="badge--darkRed jsCount" style={{verticalAlign: '4px'}}>•</span>
                        <span className="tw3-headerV2__navigation__item__label">Bạn bè</span>
                    </Link>
                 </li>
            </ul>
            <ul className="tw3-headerV2__actions clearfix right">
                <li className="menuItem tw3-headerV2__actions__item tw3-headerV2__actions__item__topupgradelink">
                    <a href="#1" className="jsPaywall tw3-button tw3-button--premium tw3-button--small"><span>Gói Cao Cấp</span>
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
                            <img className="tw3-avatar tw3-avatar--circle" src={_data.previewThumbnail} width="26" height="26" />
                            <span className="badge--darkRed jsCount" ></span>
                        </i>
                    </a>
                </li>
                <li className="menuItem tw3-headerV2__actions__item">
                    <a href="javascript://" className="noline tw3-pointerMenuToggle jsHeaderPointerMenuNotificationsToggle">
                       <i className="tw3-iconAlert tw3-iconWhite  tw3-iconBig tw3-iconBadge">
                        <span className="badge--darkRed jsCount"  style={{verticalAlign: '4px', display: 'none'}}>0</span>
                        </i>
                    </a>
                    <div className="tw3-pointerMenu tw3-notifications jsActivityCenterPopdown" style={{display: 'none'}}>
                        <div className="tw3-notifications__container jsActivityContainer" style={{height: '360px'}}>
                            <ul className="jsActivityList" >

                            </ul>

                            <div className="centerBlock jsEmptyState">
                                <div className="centerBlock__item">
                                    <div className="text--center p--default pb--slack pt--slack">
                                       <p className="mb--default">
                                            <i className="tw3-iconOtherActivity tw3-iconXLarge tw3-iconLightGrey"></i>
                                       </p>
                                       <h4 className="tw3-h4 text--bold">Các hoạt động khác sẽ xuất hiện ở đây</h4>
                                       <p className="text--subtle text--smaller plr--default mb--default">
                                       Đưa bạn lên <span className="text--bold">Tiêu điểm</span> là cách chắc chắn để có nhiều hoạt động
                                       </p>
                                       <p>
                                            <a href="javascript://" className="tw3-button tw3-button--spotlight tw3-button--wrap tw3-button--rounded jsBuyProduct">Lên Tiêu điểm</a>
                                       </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </li>
                <li className="menuItem tw3-headerV2__actions__item">
                    <a href="#12" className={ this.state.menuActive ? 'noline tw3-pointerMenuToggle jsHeaderPointerMenuActivityToggle active' : 'noline tw3-pointerMenuToggle jsHeaderPointerMenuActivityToggle'  } onClick={this.handleHeaderPointerMenuActivityToggle}>
                           <i className="tw3-iconDotsOutline tw3-iconGrey tw3-iconBig tw3-iconBadge">
                                <span className="badge--darkRed jsCount bounce" style={{display:'none'}}></span>
                           </i>
                    </a>
                    <ul className="tw3-pointerMenu dropDownMenu">
                    <li>
                       <a href="/activity/likes" className="noline clearfix ">
                            <div className="tw3-col-9">
                                <div className="tw3-row">
                                    <div className="tw3-col-2 tw3-pointerMenu__icon">
                                        <i className="tw3-iconVoteYes"></i>
                                    </div>
                                    <div className="tw3-col-10">
                                        <span className="tw3-headerV2__navigation__item__label">Người bạn thích</span>
                                    </div>
                                </div>
                            </div>
                            <div className="tw3-col-3 text--right">

                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="/activity/matches" className="noline clearfix ">
                            <div className="tw3-col-9">
                                <div className="tw3-row">
                                    <div className="tw3-col-2 tw3-pointerMenu__icon">
                                        <i className="tw3-iconHeartLine "></i>
                                    </div>
                                    <div className="tw3-col-10">
                                        <span className="tw3-headerV2__navigation__item__label">Người phù hợp</span>
                                    </div>
                                </div>
                            </div>
                            <div className="tw3-col-3 text--right">
                                <span className="badge--darkRed tw3-headerV2__navigation__item__counter jsCount"    style={{display: 'none'}}></span>
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
                        <a href="javascript:;"  className="noline clearfix jsBuyProduct">
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
                                        Kích hoạt Gói Cao Cấp&nbsp;
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
                        <a className="jsPaywall trackgavpv clearfix"  href="#12" >
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
                        <a href="/login/?action=logout&amp;lng=vi&amp;twoo_csrf_token=ed7160e618c5d8ad22c4dc1573026fde_1525928807" id="logoutLinkResponsive" className="noline clearfix ">
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
    const {users, authentication} =state;
    return {users, authentication};
}
const connectedHeader=connect(mapStateToProps)(Header);
export { connectedHeader as Header } 