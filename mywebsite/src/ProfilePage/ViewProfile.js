import React from "react";
import { connect } from "react-redux";
import {userActions, modalActions } from "../actions";
import { Header,PhotoUploadForm } from "../sections";
class ViewProfile extends React.Component{
    constructor(props){
        super(props);
        const  { authentication }= this.props;
        
        this.state={
            menuToggleActive: false,
            superLikeActive : false,
            like_count      : 0,
            userid          : (authentication.loggedIn) ? authentication.user.user_id : '',
        }
        this.handleLike         =this.handleLike.bind(this);
        this.handleUnLike       =this.handleUnLike.bind(this);
        this.handleFriend       =this.handleFriend.bind(this);
        this.handleUnfriend     =this.handleUnfriend.bind(this);
        this.pointerMenuToggle  =this.pointerMenuToggle.bind(this);
        this.handleSuperLike    =this.handleSuperLike.bind(this);
        this.handleReport       =this.handleReport.bind(this);
    }
    handleLike(e){
        
        const { like_count,userid }     = this.state;
        var user={};
        user['uuid']                =userid;
        user['description']         =e.discription;
        user['user_id']             =e.user_id;
        user['dob_year']            =e.dob_year;
        user['fullname']            =e.fullname;
        user['gender']              =e.gender;
        user['preview_thumbnail']   =e.preview_thumbnail;
        user['address']             =(e.addresses && e.addresses.home) ? e.addresses.home : '' ;
        user['image_count']         =e.image_count;
        this.setState({menuToggleActive: false, like_count: 1});
        this.props.dispatch(userActions.addLikeByUser(user)); 
        
        //console.log(e);
    }
    handleUnLike(){
        //console.log(e);
        const { like }     = this.props;
        const { like_count,userid }  = this.state;
        if(like && like.like && like.like.result.length > 0){
            let result=like.like.result[0];
            //console.log(result);
            var user={
                id_like :   result.id_like,
                user_id :   result.user_id,
                uuid    :   userid,
            }
            //console.log(user);
            this.props.dispatch(userActions.deleteLikeByUser(user)); 
            this.setState({menuToggleActive: false, like_count: 0});
        }
    }
    handleReport(){
        const { dispatch } = this.props;
        dispatch(modalActions.openModal({className: 'tw3-modal--photoUploadv4',content: <PhotoUploadForm /> }));
        const currentState = this.state.menuToggleActive;
        this.setState({ menuToggleActive: !currentState });
       // console.log('handle Repost');
    }
    handleFriend(e){
        console.log(e);
    }
    handleUnfriend(e){
        console.log(e);
    }
    pointerMenuToggle(){
        const {menuToggleActive} = this.state;
        const currentState = this.state.menuToggleActive;
        this.setState({ menuToggleActive: !currentState });
        
    }
    handleSuperLike(){
        const {superLikeActive} = this.state;
        const currentState = this.state.superLikeActive;
        this.setState({ superLikeActive: !currentState });
    }
    render(){
        //console.log(this.state);
        const hostname= window.location.protocol + '//' + window.location.hostname;
        const { users,like,userDetails, authentication, memberDetail } = this.props;
        const { like_count } = this.state;
        const liked =(like && like.like && like.like.status && like.like.result.length > 0);
        const data  =(memberDetail.item && memberDetail.item.status && memberDetail.item.user.length > 0) ? memberDetail.item.user[0] : {};
        //console.log(data);
        const details=(userDetails.user && userDetails.user.status && userDetails.user.result.length > 0 )  ? userDetails.user.result[0] : {};
        const _data =(users.item && users.item.user.length > 0) ? {
                previewThumbnail   : (data.preview_thumbnail) ? hostname+":3001/image/t/"+data.preview_thumbnail : null,
                fullname            : data.fullname,
                dob_year            : data.dob_year,
                age                 : new Date().getFullYear() - data.dob_year,
                address             : (data.addresses && data.addresses.home) ? data.addresses.home : '',
                like_total          : (data.like_total) ?  data.like_total+like_count : ( (like_count > 0) ? like_count : '?'),
                goal                : "Ở đây để hẹn hò",
                match               : '..%',
                view_total          : '0',   
                match_desc          : ''
            } : {};
        
        console.log("Data",_data.previewThumbnail);
        return(
            
            <div className="tw3-col-12 tw3-bp3-col-5">
            <div id="sticky-wrapper" className="sticky-wrapper is-sticky" style={{height: '652px'}}>
                <div className="tw3-profile__info jsProfileInfo" >
            
                    <div className="tw3-profile__info__actions">
                        <a href="javascript://" className={this.state.menuToggleActive ? 'jsPointerMenuToggle moreOptionsNextToButton tw3-pointerMenuToggle active' : 'jsPointerMenuToggle moreOptionsNextToButton tw3-pointerMenuToggle' } onClick={this.pointerMenuToggle} >
                            <i className="tw3-iconFlag tw3-iconGrey"></i>
                        </a>
                        <ul className="clearfix tw3-pointerMenu tw3-pointerMenu--right jsPointerMenu" style={{top: '20px',right: '4px' }}>
                        
        {  liked &&
                            <li className="jsUnlikeOption">
                                <a href="javascript://" onClick={()=>this.handleUnLike()} className="jsUnhideProfile ">
                                <i className="tw3-iconThumbsDown tw3-iconGrey mr--tight"></i> Bỏ thích</a>
                            </li>
        }
                            <li>
                                <a className="jsReportTrigger" href="javascript://" onClick={this.handleReport}>
                                    <i className="tw3-iconFlag tw3-iconGrey mr--tight"></i> <span>Báo cáo lạm dụng</span>
                                </a>
                            </li>
                            <li>
                                <a href="/885579224?action=hide&amp;twoo_csrf_token=b9419580ffa9c70c2e4abbee56f5d9ad_1525971194" className="jsHideProfile">
                                    <i className="tw3-iconEye tw3-iconGrey mr--tight"></i> <span>Ẩn</span>
                                </a>
                            </li>
                            <li>
                                <a href="/885579224?action=block&amp;twoo_csrf_token=b9419580ffa9c70c2e4abbee56f5d9ad_1525971194">
                                <i className="tw3-iconBlock tw3-iconGrey mr--tight"></i>
                                <span>Chặn</span>
                                </a>
                            </li>

                        </ul>
                        </div>
                    <div className="tw3-mediav2 tw3-mediav2--fixed tw3-mediav2--desktop">
                        <div className="tw3-mediav2__figure">
{ (_data.previewThumbnail) ? (
 <div className="tw3-avatarContainer mr--compact jsTriggerPhotoBox">
<img src={_data.previewThumbnail} alt="" className="tw3-avatar tw3-avatar--circle " width="88" height="88" />
</div>
    ) : (
<div className="tw3-avatarContainer mr--compact ">
<div className="tw3-avatar--addphoto">
<a href="javascript://" className="jsRequestProfilePhoto"></a>
<span className="jsRequestProfilePhotoState">
Yêu cầu xem hình</span>
</div>
</div>                 
                         )
                            
                        }
                        </div>
                        <div className="tw3-mediav2__body">
                            <h3 className="tw3-h3 mb--none">
                                <strong>{_data.fullname}, <span className="el--inlineBlock">{_data.age}</span>
                                </strong>
                            </h3>
                            <p className="text--small text--bold">{ _data.address  }</p>
                            <div className="profileStats mb--compact">
                                <ul>
                                    <li>
                                        <a href="/activitycenter#likes" className="text--subtle">
                                        Thích
                                            <span className="value">{_data.like_total}</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/activitycenter#views" className="text--subtle">
                                        Lượt xem
                                            <span className="value" >{_data.view_total}</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/activity/matches" className="text--subtle">
                                        Điểm phù hợp
                                        <span className="value ">{_data.match}</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mb--compact">
                        <span className="badge--lightergrey">{_data.goal}</span>
                    </div>
                    <div className="hide tw3-bp3-col-show-block">
                        <hr className="tw3-hr mb--default" />
                    </div>
                    <div className="tw3-profile__info__contact">
                    <div className="tw3-row mb--default contact--desktop">
                        <div className="tw3-col-4 text--center">
                            <a href="#" className="tw3-button tw3-buttonIcon--chat jsChatButton" >
                            <i className="tw3-iconAndroidChat"></i>
                            </a>
                            <div className="mt--compact text--small text--bold">Chat</div>
                        </div>
                        <div className="tw3-col-4 text--center">
                            <a href="javascript://" className="jsLikeButton noline" >
                            </a>
                            <span style={{display:'none'}} className="jsLikeButtonElement cursor--df tw3-button tw3-buttonIcon--like tw3-button--coralRed">
                                <i className="tw3-iconHeart"></i>
                            </span>
                            <span style={{display:'none'}} className="jsLikeButtonElement cursor--df tw3-button tw3-buttonIcon--like tw3-button--green">
                                <i className="tw3-iconThumbsUpSolid-v2"></i>
                            </span>
            { !liked &&    
                            <span  className="jsLikeButtonElement  tw3-button tw3-buttonIcon--like tw3-button--green" onClick={()=>this.handleLike(data)}>
                                <i className="tw3-iconThumbsUpSolid-v2"></i>
                            </span>
            }
                            <div className="jsCopy mt--compact text--small text--bold ">
                            Thích
                            </div>
                        </div>
                        <div className="tw3-col-4 text--center">
                            <div className="jsSuperLikeContainer tw3-buttonHearts">
        { this.state.superLikeActive && 
            <div>
                <span className="jsAnimationIcon" ><i className="tw3-iconHeart tw3-iconRed"></i></span>
                <span className="jsAnimationIcon" ><i className="tw3-iconHeart tw3-iconRed"></i></span>
                <span className="jsAnimationIcon" ><i className="tw3-iconHeart tw3-iconRed"></i></span>
                <span className="jsAnimationIcon" ><i className="tw3-iconHeart tw3-iconRed"></i></span> 
            </div>
        }
                                
                                    
                                <a href="javascript://" className="jsSuperLike tw3-button tw3-button--superLike tw3-button--white" onClick={this.handleSuperLike}>
                                    <i className="tw3-iconHeart tw3-iconNormal tw3-iconBrightGreen"></i>
                                </a>
                                <div className="jsCopy mt--compact text--small text--bold">
                                Đặc biệt Thích
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tw3-row mb--default contact--mobile jsContactMobile">
                    <div className="contact--mobile__box">
                        <a href="#" className="jsChatButton">
                            <div className="mb--tight">
                                <i className="tw3-iconAndroidChat text--androidBlue tw3-iconBig"></i> 
                            </div>
                            <div className="contact--mobile__box__label">Chat</div>
                        </a>
                        <a href="javascript://" className="jsLikeButton noline" >
                                <span  style={{display:'none'}} className="jsLikeButtonElement">
                                <i className="tw3-iconAndroidMatch tw3-iconBig text--androidRed"></i>
                                </span>
                                <span  style={{display:'none'}} className="jsLikeButtonElement">
                                <i className="tw3-iconAndroidThumb tw3-iconBig text--androidGreen"></i>
                                </span>
                                <span  className="jsLikeButtonElement">
                                <i className="tw3-iconAndroidThumb tw3-iconBig tw3-iconWhite"></i>
                                </span>
                                <div className="jsCopy mt--compact text--small text--bold text--white" >
                                Thích
                                </div>
                        </a>
                        <a href="javascript://" className="jsSuperLike" >
                            <div className="mb--tight">
                                <i className="tw3-iconHeart tw3-iconBig tw3-iconWhite"></i>
                            </div>
                            <div className="contact--mobile__box__label">
                                Đặc biệt Thích
                            </div>
                        </a>
                    </div>
                </div>
                </div>
                    <div className="hide tw3-bp3-col-show-block">
                        <hr className="tw3-hr" />
                    </div>
                    <div className="tw3-editable__block tw3-editable__block--disabled mb--compact">
                        <div className="tw3-field">
                            <div className="tw3-field__view">
                            <p className="mb--none text--wordWrap text--subtle">{_data.match_desc}</p>
                            </div>
                        </div>
                    </div>
                    <div className="hide tw3-bp3-col-show-block text--center tw3-profile__ad ptb--compact">
                        <div className="jsAd b0 oh" ><div id="div-gpt-ad-1520533327816-1" ><div id="google_ads_iframe_/109035908/mat.twoo/profile_0__container__" style={{border: '0pt none'}}><iframe id="google_ads_iframe_/109035908/mat.twoo/profile_0" title="3rd party ad content" name="google_ads_iframe_/109035908/mat.twoo/profile_0" width="300" height="250" scrolling="no" marginWidth="0" marginHeight="0" frameBorder="0" srcDoc="" style={{border:'0px', verticalAlign: 'bottom'}}></iframe></div></div></div>
                        <p className="text--small jsNoMoreAds text--center"><small>Quảng cáo —&nbsp;
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
    const { authentication, users, like, userDetails, memberDetail } = state;
    return { authentication, users, like, userDetails, memberDetail };
}
const connectedViewProfile = connect(mapStateToProps)(ViewProfile);
export {connectedViewProfile as ViewProfile }