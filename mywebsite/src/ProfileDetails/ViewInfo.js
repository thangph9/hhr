import React from "react";
import { connect } from "react-redux";
import { modalActions} from "../actions";
import { AddImages } from "./index";
class ViewInfo extends React.Component{
    constructor(props){
        super(props);
        this.handleAddPreviewThumbnail=this.handleAddPreviewThumbnail.bind(this);
    }
    handleAddPreviewThumbnail(){
        const { dispatch } = this.props;
         dispatch(modalActions.openModal({ className: 'tw3-modal--small  tw3-modal--photoUploadv4 ',content:<AddImages type="previewThumbnail" />}));
    }
    render(){
        const { users } = this.props;
        var _users=(users.item && users.item.status && users.item.user.length > 0) ? users.item.user[0] : {};
        var _data={
            fullname            : _users.fullname,
            preview_thumbnail   : _users.preview_thumbnail,
            age                 : (_users.dob_year) ? (new Date().getFullYear() - _users.dob_year) : '0',
            address             : _users.address
        }
        //console.log(_data.preview_thumbnail);
        return(
<div className="tw3-col-12 tw3-bp3-col-5">
<div id="sticky-wrapper" className="sticky-wrapper is-sticky" style={{height: '565px'}}>
    <div className="tw3-profile__info jsProfileInfo">
    <div className="tw3-profile__info__actions">
        <a href="/settings?cfp"><i className="tw3-iconSettingsSolid tw3-iconGrey"></i></a>
    </div>
    <div className="tw3-mediav2 tw3-mediav2--fixed tw3-mediav2--desktop">
        <div className="tw3-mediav2__figure">
            
{ (_data.preview_thumbnail) ? (
        <div className="tw3-avatarContainer mr--compact cursor--pt jsChangeProfilePhoto" >
          <img src={`/image/${_data.preview_thumbnail}`} alt="" className="tw3-avatar tw3-avatar--circle " width="88" height="88" />
                <div className="tw3-editor">
                <span className="tw3-fancyIcon--edit"  onClick={this.handleAddPreviewThumbnail}><span className="icon"><i></i></span></span>
                </div>  
            </div>
        ) :(
            
<div className="tw3-avatarContainer mr--compact cursor--pt jsChangeProfilePhoto" >
          <div className="tw3-avatar--addphoto" onClick={this.handleAddPreviewThumbnail}>
            Thêm hình
            </div>  
            </div>
        )
}
                
            
        </div>
        
    <div className="tw3-mediav2__body">
    <h3 className="tw3-h3 mb--none">
    <strong>
        {_data.fullname}, <span className="el--inlineBlock">{_data.age}</span></strong>
    </h3>
    <p className="text--small text--bold">
        {_data.address}
    </p>

    <div className="profileStats mb--compact">
    <ul>
    <li>
    <a href="/activitycenter#likes" className="text--subtle">
    Thích
    <span className="value" data-count="0">
    0</span>
    </a>
    </li>
    <li>
    <a href="/activitycenter#views" className="text--subtle">
    Lượt xem
    <span className="value" data-count="1">
    1</span>
    </a>
    </li>
    <li>
    <a href="/activity/matches" className="text--subtle">
    Người phù hợp
    <span className="value" data-count="0">
    0</span>
    </a>
    </li>
    </ul>
    </div>
    </div>
    </div>
    <hr className="tw3-hr" />
    <div className="profileBuys ptb--compact">
    <ul>
        <li>
            <a href="javascript:;" className=" swap jsBuyProduct">
            <i className="tw3-iconBoost tw3-iconBig tw3-iconBoostColor mb--compact"></i>
            <div><span className="text--subtle">Độ nổi tiếng</span><br /><strong>Tăng</strong></div>
            </a>
        </li>
        <li>
            <a href="#"  className="jsPaywall  swap">
            <i className="tw3-iconBrowseInvisibleOutlined tw3-iconLightGrey tw3-iconBig mb--compact"></i> <div><span className="text--subtle">Ẩn danh</span><br /> <strong>TẮT</strong></div>
            </a>
        </li>
        <li>
            <a href="#" className="jsPaywall  swap"><i className="tw3-iconPremium tw3-iconPremiumColor tw3-iconBig mb--compact"></i>
            <div><span className="text--subtle">Gói Cao Cấp</span><br /> <strong>Nâng cấp</strong></div>
            </a>
        </li>
        <li>
            <a href="#" className="swap jsPaywall" data-type="CREDITS">
            <i className="tw3-iconCreditsFilled tw3-iconYellowOrange tw3-iconBig mb--compact"></i>
            <div><span className="text--subtle">Tín dụng</span> <br /><strong>Mua</strong></div>
            </a>
        </li>
    </ul>
    </div>
</div>
</div>
</div>
        );
    }
}
function mapStateToProps(state){
    const { users } = state;
    return { users };
}
const connected = connect(mapStateToProps)(ViewInfo);
export { connected as ViewInfo }