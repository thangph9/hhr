import React from "react";
import {connect} from "react-redux";
import {modalActions,userActions,pageActions,alertActions } from "../actions";
import { AddImages } from "./index";

class ImageDetailShow extends React.Component{
    constructor(props){
        super(props);
        this.state={
            menuActive: false,
            next:0,
            back:0,
            current: 0,
            navActive: false,
        }
        this.showPointerMenuToggle=this.showPointerMenuToggle.bind(this);
        this.handleNext=this.handleNext.bind(this);
        this.handleBack=this.handleBack.bind(this);   
        this.handleUpdatePublish=this.handleUpdatePublish.bind(this);
        this.handleUpdatePreviewThumb=this.handleUpdatePreviewThumb.bind(this);
        this.handleOpenAddImage=this.handleOpenAddImage.bind(this);
        this.handleDeleteImage=this.handleDeleteImage.bind(this);
    }
    showPointerMenuToggle(){
        //console.log('Open');
        const { menuActive } = this.state;
        var currentActive=menuActive;
        this.setState({menuActive: !currentActive});
    }
    handleOpenAddImage(){
       // console.log('handle ');
        const { dispatch } = this.props;
        dispatch(modalActions.openModal({ className: 'tw3-modal--small  tw3-modal--photoUploadv4 ',content:<AddImages type="add" />}));
    }
    handleNext(i,total){
        //console.log(i)
        
        this.setState({ 
            navActive:true,
            current: (i <= total) ? i : 1,
        });
    }
    handleUpdatePublish(image,indx){
        //console.log(image);
        const { dispatch, authentication } = this.props;
        image['user_id']=authentication.user.user_id;
        image.publish=!(image.publish);
        dispatch(userActions.updateImageByUser(image));
        this.setState({
            menuActive: false,
            current   : indx,
            navActive : true,
        })
    }
    handleUpdatePreviewThumb(image){
        const { dispatch,authentication } = this.props;
        dispatch(pageActions.updateThumbnail(image.image_id));
        //console.log(image);
        this.setState({
            menuActive: false
        })
    }
    handleDeleteImage(image,indx){
        //console.log(indx);
        const { dispatch,authentication } = this.props;
        image['user_id']=authentication.user.user_id;
        dispatch(userActions.deleteImageByUser(image));
        this.setState({
            menuActive: false,
            current   : indx+1,
            navActive : true,
        })
    }
    handleBack(i,total){
        
        this.setState({ 
            navActive: true,
            current: (i > 0) ? i : total ,
        });
    }
    render(){
        const hostname= window.location.protocol + '//' + window.location.hostname;
        
        const { image,index,users } = this.props;
        const _img=(image.image && image.image.status && image.image.images.length > 0  )
            ? image.image.images : []; 
        var total=_img.length;
        var indx=this.state.navActive ? this.state.current : (_img.indexOf(index)+1)
        //console.log(indx,total);
        indx=indx > total ? total : indx;
        var _image=(_img[indx-1]) ? _img[indx-1] : _img[indx];
        
        
        const _users=(users.item && users.item.status && users.item.user.length > 0 ) ? users.item.user[0] : {};
        const age=new Date().getFullYear() - _users.dob_year;
        const _default=_users.gender == 1 ? '/img/avatar-male.jpg' : '/img/avatar-female.jpg';
        const _data={
            age: age,
            fullname:_users.fullname,
            address: _users.address,
            previewThumbnail:_users.preview_thumbnail ? hostname +":3001/image/t/"+ _users.preview_thumbnail : _default,
            publish : _image.publish,
            face_active: _image.face_active,
            
        }
        const is_thumb_active=!(_image.image_id==_users.preview_thumbnail);
        return(
            
<div className="tw3-modal__content clearfix  jsDialogContent ">
    <div className="tw3-modal__close">
        <a href="javascript://" className="jsClose"><i className="ficonFilled"><i className="tw3-iconClose tw3-iconWhite"></i></i>
        </a>
    </div>
    <div className="tw3-photobox--v4">
        <div className="tw3-photobox--v4__overlay jsPhotoboxOverlay"></div>
        <div className="tw3-photobox--v4__content jsPhotoboxContent" >
            <div className="photobox__photo jsPhotoboxContentPhoto">
                <div className="jsPhoto centerBlock">
                    <div className="tw3-row jsPhotoBoxHeader">
                        <div className="tw3-col-4 text--left left">
                          &nbsp;
                        </div>
                        <div className="tw3-col-4 jsPager tw3-photobox--v4__pager text--white text--center center"><span className="jsPagerIndex">{indx}</span> trong số <span className="jsPagerPhotosCount">{total}</span>
                        </div>
                        <div className="tw3-col-4 tw3-photobox--v4__tapforSound jsEnableSound text--right" style={{display:'none'}}>
                            <a href="javascript:;" className="tw3-button tw3-button--small tw3-button--subtle tw3-button--rounded tw3-button--white"><i className="tw3-iconSoundOff"></i></a>
                        </div>
                    </div>
                    <div className="scrollableHolder jsScrollableHolder">
                        <div className="scrollable jsScrollable">
                            <div className="scrollable__panel jsScrollablePanel" style={{width: '500%'}}>
                                <div className="scrollable__panel__item photoCover__bkg__image tw3-photobox--v4__image jsScrollablePanelItem jsPhotoboxLikeAction  " style={{backgroundImage: `url(/image/${_image.image_id})`, width: '20%', position: 'relative', backgroundSize: 'contain'}}>
                                </div>
                                
                            </div>
                        </div>
                        <div className="tw3-photobox--v4__nav jsPhotoboxNavControls">
                            <div className="scrollableHolder__navLeft jsScrollableNavLeft tw3-aniIcon tw3-photobox--v4__nav__left">
                                <i className="scrollableHolder__navLeft__icon tw3-iconArrowBackSkinny tw3-iconWhite" onClick={()=>{this.handleBack(indx-1,total)}}></i>
                            </div>
                            <div className="scrollableHolder__navRight jsScrollableNavRight tw3-aniIcon tw3-photobox--v4__nav__right">
                                <i className="scrollableHolder__navRight__icon tw3-iconArrowNextSkinny tw3-iconWhite" onClick={()=>{this.handleNext(indx+1,total)}}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tw3-photobox--v4__info--desktop">
                <div className="tw3-photobox--v4__info__userInfo">
                    <div className="jsPhotoboxContentInfoDesktop">
                        <div className="tw3-row">
                            <div className="tw3-col-4">
                                <img src={_data.previewThumbnail} alt="" className="tw3-avatar--circle tw3-avatar--fluid mb--default" />
                            </div>
                            <div className="tw3-col-8">
                                <span className="h4">
                                    <strong><a href="/96619257">{_data.fullname}</a>, {_data.age}</strong>
                                </span>
                                <br/>
                                <p className="text--small text--bold">{_data.address}</p>
                            </div>
                        </div>
                        <div className="tw3-row">
                            <div className="tw3-col-12">
                                <div className="tw3-editable__block jsEditableBlock tw3-editable__block--closeIconNotVisible">
                                    <div className="tw3-field tw3-field__editable tw3-field__editable--viewing">
                                        <form action="/profile" method="post">
                                            <div className="tw3-textareaHolder">
                                                <textarea name="description" className="tw3-textarea mb--tight jsPhotoDescriptionInput" placeholder="Bình luận về hình này" maxLength="200" style={{overflow: 'hidden', height: '85px'}}></textarea>
            <input type="submit" className="tw3-textarea__button jsPhotoDescriptionSave" value="LƯU"/>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="jsPhotoboxContentAd"></div>
                </div>
            </div>
            <div className="tw3-photobox--v4__info--mobile jsPhotoboxContentInfoMobile">
                <div className="tw3-row">
                    <div className="tw3-photobox--v4__description owner jsEditableBlock tw3-col-12" >
                        <div className="tw3-photobox--v4__description__editable tw3-photobox--v4__description__editable--viewing jsDescription">
                            <div className="tw3-photobox--v4__description__view jsPhotoAction" ></div>
                            <div className="tw3-photobox--v4__description__edit">
                                <form action="" method="post" className="jsPhotoDescriptionForm">
                                    <div className="user__sendbox__input">
                                        <textarea name="description" className="user__sendbox jsPhotoDescriptionInputMobile" style={{overflow: 'hidden', height: '43px'}}></textarea>
                                        <div className="sendbox__input__sender jsPhotoDescriptionSaveMobile">
                                            <i className="tw3-iconEnveloppeV2 tw3-iconGrey tw3-iconBig"></i>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <ul className="jsActions tw3-photobox--v4__action clearfix tw3-photobox--v4__bottom">
                        <li>
                            <a href="#" className="jsPhotoAction">
                                <i className="tw3-iconEdit tw3-iconWhite tw3-iconLarge tw3-photobox--v4__action__button"></i>
                            </a>
                        </li>
                        <li>
                            <a href="javascript://" className="jsPhotoAction" onClick={this.handleOpenAddImage}>
                                <i className="tw3-iconCameraCircle tw3-iconWhite tw3-iconLarge tw3-photobox--v4__action__button"></i>
                            </a>
                        </li>
                        <li className="jsPhotoActions">
                            <a href="#" className={this.state.menuActive ? `jsActionsMore jsDropdown tw3-pointerMenuToggle active` : `jsActionsMore jsDropdown tw3-pointerMenuToggle`} onClick={this.showPointerMenuToggle} >
                                <i className="tw3-iconMoreOutline tw3-iconWhite tw3-iconLarge tw3-photobox--v4__action__button"></i>
                            </a>
                            <ul className="clearfix rad3 tw3-pointerMenu jsDropdownMoreActions jsDropdownContent">
{ (_data.face_active && is_thumb_active ) ? (
<li>
    <a className="swap noline jsPhotoAction" onClick={()=>{this.handleUpdatePreviewThumb(_image)}} >
        <i className="tw3-iconProfileSquare"></i>
        Chọn làm hình đại diện
    </a>
</li>
) : (
<li className="tw3-pointerMenu__item--disabled">
    <a className="swap noline jsActionDisabled" >
        <i className="tw3-iconProfileSquare"></i>
        Chọn làm hình đại diện
    </a>
</li>
) 
    
}
{ (_data.publish) ? (
<li className="tw3-pointerMenu__item--disabled">
    <a className="swap noline jsActionDisabled" >
        <i className="tw3-iconLockOpen"></i>
        Chuyển thành hình công khai
    </a>
</li>
) : (
<li>
    <a className="swap noline jsPhotoAction" onClick={()=>{this.handleUpdatePublish(_image,indx)}}  >
        <i className="tw3-iconLockOpen"></i>
        Chuyển thành hình công khai
    </a>
</li> 
)
    
}
{ (_data.publish) ? (
<li>
    <a className="swap noline jsPhotoAction" onClick={()=>{this.handleUpdatePublish(_image,indx)}}>
    <i className="tw3-iconLock"></i>
        Chuyển thành hình cá nhân
    </a>
</li>
) : (
<li className="tw3-pointerMenu__item--disabled">
    <a className="swap noline jsActionDisabled">
    <i className="tw3-iconLock"></i>
        Chuyển thành hình cá nhân
    </a>
</li>
)

}

                                
                                
                                
                                <li>
                                    <a className="swap noline jsPhotoAction" onClick={()=>{this.handleDeleteImage(_image,indx)}} >
                                        <i className="tw3-iconTrash"></i> Xóa
                                    </a>
                                </li>
                                <li>
                                    <span className="cssArrow cssArrowBorder"></span>
                                    <span className="cssArrow"></span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
        )
        
    }
}
function mapStateToProps(state){
    const { image, users,authentication } = state;
    return { image, users, authentication };
}
const connected=connect(mapStateToProps)(ImageDetailShow);
export {connected as ImageDetailShow};