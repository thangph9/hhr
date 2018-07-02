import React from "react";
import { connect } from "react-redux";
import { MobileVerifyPage } from "../DialogPage";
import { modalActions  } from "../actions";
class IndexVerifiCation extends React.Component{
    constructor(props){
        super(props);
        this.MobileVerification=this.MobileVerification.bind(this);
        
    }
    MobileVerification(){
        const { dispatch } = this.props;
        dispatch(modalActions.openModal({className: 'tw3-modal--payments tw3-modal--payments--featuresActive tw3-modal--open', 
                                         content: <MobileVerifyPage />}))
        console.log('open modal');
    }
    render(){
        return(
            <div className="tw3-profile__body__box jsIndexVerifications">
    <h5 className="jsEditableBlockTitle text--bold tw3-h5 mb--default">XÁC NHẬN</h5>
    <div className="tw3-box--lightGrey p--default mb--default">
        <div className="tw3-media tw3-media--verifications tw3-media--figure--fixed">
            <div className="tw3-media__figure">
                <img src="https://twoo-a.akamaihd.net/static/308782354144365160/images/v3/icons/img-verified-2.png" width="40" height="40" alt="" className="mr--compact" />
                <div className="text--center mr--compact">
                    2/<span className="text--subtle">3</span>
                </div>
            </div>
            <div className="tw3-media__body">
                Sơ yếu được Xác nhận sẽ giúp bạn gặp được nhiều người hơn!
                <span className="text--subtle">
Bạn cần 1 xác nhận để chuyển sơ yếu thành trạng thái Xác nhận.
</span>
            </div>
        </div>
    </div>

    <div>
        <div className="tw3-verificationItems">
            <div className="tw3-media tw3-media--figure--fixed tw3-media--actions--active tw3-verificationItem--photo">
                <div className="tw3-media__figure">
                    <a href="javascript:;" data-trigger="ownprofile" className="jsPhotoConnect">
<i className="tw3-iconCircleVerify tw3-iconLarge tw3-iconLightGrey"></i>
</a>
                </div>
                <div className="tw3-media__body">
                    <div className="tw3-media__body__actions">
                        <a href="javascript://"  className="tw3-button tw3-button--full tw3-button--blue tw3-button--rounded tw3-button--small tw3-button--subtle tw3-button--wrap jsPhotoConnect">
Xác nhận
</a>
                    </div>
                    <div className="tw3-media__body__content">
                        <span className="text--subtle">Hình đại diện</span><br/>
                        <span>Chưa xác nhận</span>
                    </div>
                </div>
            </div>
            <div className="tw3-media tw3-media--figure--fixed tw3-media--actions--active">
                <div className="tw3-media__figure">
                    <a href="javascript://" data-trigger="verify" className="jsPaywall jsClose">
<i className="tw3-iconPremiumSolid tw3-iconLarge tw3-iconLightGrey"></i>
</a>
                </div>
                <div className="tw3-media__body">
                    <div className="tw3-media__body__actions">
                        <a href="javascript://"  data-trigger="verify" className="jsPaywall tw3-button tw3-button--full tw3-button--blue tw3-button--rounded tw3-button--small tw3-button--subtle tw3-button--wrap jsClose">
Xác nhận
</a>
                    </div>
                    <div className="tw3-media__body__content">
                        <span className="text--subtle">
Twoo Gói Cao Cấp</span><br/>
                        <span>Chưa xác nhận</span>
                    </div>
                </div>
            </div>
            <div className="tw3-media tw3-media--figure--fixed tw3-media--actions--active">
                <div className="tw3-media__figure">
                    <i className="tw3-iconCircleFacebook tw3-iconLarge tw3-iconFacebookColor"></i>
                </div>
                <div className="tw3-media__body">
                    <div className="tw3-media__body__actions">
                        <i className="tw3-iconCheckThin tw3-iconGreen"></i>
                    </div>
                    <div className="tw3-media__body__content">
                        <span className="text--subtle">Facebook</span><br/>
                        <span>Đã xác nhận</span>
                    </div>
                </div>
            </div>
            <div className="tw3-media tw3-media--figure--fixed tw3-media--actions--active">
                <div className="tw3-media__figure">
                    <i className="tw3-iconCircleGoogle tw3-iconLarge tw3-iconGoogleColor"></i>
                </div>
                <div className="tw3-media__body">
                    <div className="tw3-media__body__actions">
                        <i className="tw3-iconCheckThin tw3-iconGreen"></i>
                    </div>
                    <div className="tw3-media__body__content">
                        <span className="text--subtle">Google</span><br/>
                        <span>Đã xác nhận</span>
                    </div>
                </div>
            </div>


            <div className="tw3-media tw3-media--figure--fixed tw3-media--actions--active">
                <div className="tw3-media__figure">
                    <a href="javascript://" className="jsLiveMessengerConnect jsClose" >
<i className="tw3-iconCircleWindowsLive tw3-iconLarge tw3-iconLightGrey"></i>
</a>
                </div>
                <div className="tw3-media__body">
                    <div className="tw3-media__body__actions">
                        <a href="javascript://" className="tw3-button tw3-button--full tw3-button--blue tw3-button--rounded tw3-button--small tw3-button--subtle tw3-button--wrap jsLiveMessengerConnect jsClose">
Xác nhận
</a>
                    </div>
                    <div className="tw3-media__body__content">
                        <span className="text--subtle">Windows Live</span><br/>
                        <span>Chưa xác nhận</span>
                    </div>
                </div>
            </div>

            <div className="tw3-media tw3-media--figure--fixed tw3-media--actions--active">
                <div className="tw3-media__figure">
                    <a href="javascript://" className="jsPaywall" >
<i className="tw3-iconCirclePhone tw3-iconLarge tw3-iconLightGrey tw3-iconBlack"></i>
</a>
                </div>
                <div className="tw3-media__body">
                    <div className="tw3-media__body__actions">
                        <a href="javascript://" onClick={()=>{this.MobileVerification()}} className="tw3-button tw3-button--full tw3-button--blue tw3-button--rounded tw3-button--small tw3-button--subtle tw3-button--wrap jsPaywall jsClose" >
Xác nhận
</a>
                    </div>
                    <div className="tw3-media__body__content">
                        <span className="text--subtle">Số điện thoại</span><br/>
                        <span>Chưa xác nhận</span>
                    </div>
                </div>
            </div>
            <div className="tw3-media tw3-media--figure--fixed tw3-media--actions--active">
                <div className="tw3-media__figure">
                    <a href="javascript://" className="jsClose jsLinkedinConnect" >
<i className="tw3-iconCircleLinkedin tw3-iconLarge tw3-iconLightGrey"></i>
</a>
                </div>
                <div className="tw3-media__body">
                    <div className="tw3-media__body__actions">
                        <a href="javascript://" className="tw3-button tw3-button--full tw3-button--blue tw3-button--rounded tw3-button--small tw3-button--subtle tw3-button--wrap jsClose jsLinkedinConnect" >
Xác nhận
</a>
                    </div>
                    <div className="tw3-media__body__content">
                        <span className="text--subtle">LinkedIn</span><br/>
                        <span>Chưa xác nhận</span>
                    </div>
                </div>
            </div>
            <div className="tw3-media tw3-media--figure--fixed tw3-media--actions--active">
                <div className="tw3-media__figure">
                    <a href="javascript://" className="jsTwitterConnect jsClose" >
<i className="tw3-iconCircleTwitter tw3-iconLarge tw3-iconLightGrey"></i>
</a>
                </div>
                <div className="tw3-media__body">
                    <div className="tw3-media__body__actions">
                        <a href="javascript://" className="tw3-button tw3-button--full tw3-button--blue tw3-button--rounded tw3-button--small tw3-button--subtle tw3-button--wrap jsTwitterConnect jsClose" >
Xác nhận
</a>
                    </div>
                    <div className="tw3-media__body__content">
                        <span className="text--subtle">Twitter</span><br/>
                        <span>Chưa xác nhận</span>
                    </div>
                </div>
            </div>
            <div className="tw3-media tw3-media--figure--fixed tw3-media--actions--active">
                <div className="tw3-media__figure">
                    <a href="javascript://" className="jsClose jsInstagramConnect" >
<i className="tw3-iconCircleInstagram tw3-iconLarge tw3-iconLightGrey"></i>
</a>
                </div>
                <div className="tw3-media__body">
                    <div className="tw3-media__body__actions">
                        <a href="javascript://" className="tw3-button tw3-button--full tw3-button--blue tw3-button--rounded tw3-button--small tw3-button--subtle tw3-button--wrap jsClose jsInstagramConnect" >
Xác nhận
</a>
                    </div>
                    <div className="tw3-media__body__content">
                        <span className="text--subtle">Instagram</span><br />
                        <span>Chưa xác nhận</span>
                    </div>
                </div>
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
const connected = connect(mapStateToProps)(IndexVerifiCation);
export { connected as IndexVerifiCation }