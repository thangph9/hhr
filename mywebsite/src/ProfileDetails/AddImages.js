import React from "react";
import { connect } from "react-redux";
import {Redirect } from "react-router-dom";
import Dropzone from 'react-dropzone';
import {userActions} from "../actions";
class AddImages extends React.Component{
    constructor(props){
        super(props);
        this.state= { files : []}
        this.onDrop=this.onDrop.bind(this);
    }
    onDrop(files){
        //console.log('add file');
        const { authentication, dispatch,type } = this.props;
        var i=0;
        var data={
            user_id: authentication.loggedIn ? authentication.user.user_id : '',
        }
        var interval=setInterval(function(){
            
            data['file']=files[i];
            data['fileIndex']=i;
            data['type']    = type;
            dispatch(userActions.uploadImageByUser(data));
            if((files.length-1) == i ){
                clearInterval(interval)
            }else{
                i++;
            }
        },1000);
        
        this.setState({
          files
        });
        
        //console.log(files);
        
    }
    componentWillUpdate(){
        //console.log('Update',this.props);        
    }
    render(){
        //console.log(this.state);
        return(
<div className="modalPhotoUpload jsModalPhotoUpload modalMedia">
    <div className="dialogTitles">
        <h4 className="mb--default text--bold mb--loose">
            Tải hình đại diện lên
        </h4>
    </div>
    <div className="uploadOptions--v4">
        <div className="jsWebcamAccessDenied uploadOptions--v4__noWebCamBanner mb--default" style={{display: 'none'}}>
            <div className="tw3-media">
                <div className="tw3-media__figure">
                    <i className="tw3-iconWebcam tw3-iconXLarge"></i>
                </div>
                <div className="tw3-media__body">
                    <div className="tw3-media__body__content">
                        <span className="text--red text--bold">Cần sử dụng máy quay</span><br/>
                        <span>Hãy để máy camera ở trên đầu trình duyệt của bạn.</span>
                    </div>
                </div>
            </div>
        </div>
        <div className=" jsUploadOptions">
            <div className="clearfix tw3-row uploadOptions jsButtonContainer">
                <div className="uploadOptions--v4__item uploadOptions--v4__item--camera jsLibrary" style={{display: 'none'}}>
                    <a href="javascript://" className="uploadOptions--v4__item__click jsLibaryButton"><label className="jsFileButton">
                        <i className="tw3-iconLibrary tw3-iconXLarge mb--compact"></i>
                        <div className="text--subtle fw-500 text--smaller text--blue">
                            <span>Thư viện</span>
                        </div>
                        </label>
                    </a>
                </div>
                <div className="uploadOptions--v4__item uploadOptions--v4__item--webcam jsWebcam" >
                    <a href="javascript://" className="uploadOptions--v4__item__click jsWebcamButton">
                        <div>
                            <i className="tw3-iconWebcam tw3-iconOrange tw3-iconXLarge mb--compact"></i>
                            <div className="text--subtle fw-500 text--smaller text--blue"> <span>Webcam</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="uploadOptions--v4__item uploadOptions--v4__item--camera jsCamera" style={{display: 'none'}}>
                    <a href="javascript://" className="uploadOptions--v4__item__click jsCameraButton">
                        <label className="jsFileButton">
                            <i className="tw3-iconCamera tw3-iconXLarge mb--compact"></i>
                            <div className="text--subtle fw-500 text--smaller text--blue">  <span>Camera</span>
                            </div>
                        </label>
                    </a>
                </div>
                <div className="uploadOptions--v4__item">
                    <a href="javascript://" className="uploadOptions--v4__item__click jsFacebookPhotosButton">
                        <i className="tw3-iconFacebookSquare tw3-iconFacebookColor tw3-iconXLarge mb--compact"></i>
                        <div className="text--subtle fw-500 text--smaller text--blue">
                            Facebook
                        </div>
                    </a>
                </div>
                <div className="uploadOptions--v4__item">
                    <a href="javascript://" className="uploadOptions--v4__item__click jsInstagramButton">
                        <i className="tw3-iconInstagram tw3-iconXLarge mb--compact"></i>
                        <div className="text--subtle fw-500 text--smaller text--blue">  <span>Instagram</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div className="jsWebcamfield" style={{display: 'none'}}>
            <div className="jsCaptureApprove mb--default hide modal__mediaPlay__required">
                <h3 className="tw3-h3 mb--default text--bold">
                    Cần sử dụng máy quay
                </h3>
                <p className="mb--default">
                    <img src="https://twoo-a.akamaihd.net/static/74250004075968717349811666/images/onboarding/img-purple-camera.png" width="96" height="96" />
                </p>
                <p className="text--subtle">Cần sử dụng máy quay</p>
                <p className="text--subtle">Hãy để máy camera ở trên đầu trình duyệt của bạn.</p>
            </div>
            <div className="jsCapture modal__mediaPlay__video"></div>
            <div className="jsVideoRecorder tw3-videoRecorder hide">
                <div className="jsModalVideoHeader tw3-videoRecorder__header hide">
                    <div className="tw3-videoRecorder__header__record hide">
                        <div className="centerBlock hide">
                            <div className="centerBlock__item plr--default">Quay video</div>
                        </div>
                    </div>
                    <div className="tw3-videoRecorder__header__recorded hide">
                        <span className="back">
                            <a href="javascript:;" className="jsHeaderBackRecorded">
                                <i className="tw3-iconPointerBack tw3-iconWhite"></i>
                            </a>
                        </span>
                        <span className="jsHeaderTimingsCurrentTime">00:00</span> - <span className="jsHeaderTimingsLength">00:00</span>
                    </div>
                </div>
                <div className="jsRecord tw3-videoRecorder__record">
                    <div className="jsWebcamSource tw3-webcam">
                        <div className="jsErrors tw3-videoRecorder__errors hide">
                            <div className="tw3-videoRecorder__errors__noSupport hide">
                                <div className="centerBlock">
                                    <div className="centerBlock__item plr--default">
                                        <h3 className="tw3-h3 mb--slack">Trình duyệt của bạn không hỗ trợ quay phim</h3>
                                        <div className="iosContainer">
                                            <p className="mb--slack mh20">Quay video với ứng dụng Twoo của chúng tôi trên iOS:</p>
                                            <p>
                                                <a href="/download" className="tw3-button tw3-button--black">
                                                    <i className="tw3-iconApple"></i> Tải ứng dụng iOS về
                                                </a>
                                            </p>
                                        </div>
                                        <div className="androidContainer">
                                            <p className="mb--slack mh20">Quay video với ứng dụng Twoo của chúng tôi trên Android:
                                            </p>
                                            <p>
                                                <a href="/download" className="tw3-button tw3-button--black">
                                                    <i className="tw3-iconAndroid"></i> Tải ứng dụng Android về
                                                </a>
                                            </p>
                                        </div>
                                        <div className="notMobileContainer">
                                            <p className="mb--slack">Trình duyệt của bạn không hỗ trợ quay video. Bạn có thể cài trình duyệt hỗ trợ như
                                                <a href="https://www.google.com/chrome/browser/desktop/index.html">Chrome</a> hoặc <a href="https://www.mozilla.org/en-US/firefox/new/">Firefox</a> hoặc dùng ứng dụng Twoo để quay video</p>
                                            <p>
                                                <a href="/download" className="tw3-button tw3-button--black"><i className="tw3-iconApple"></i> Tải ứng dụng iOS về
                                                </a>
                                            </p>
                                            <p>
                                                <a href="/download" className="tw3-button tw3-button--black">
                                                    <i className="tw3-iconAndroid"></i> Tải ứng dụng Android về
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tw3-videoRecorder__errors__noWebcam hide">
                                <div className="centerBlock">
                                    <div className="centerBlock__item plr--default">
                                        <h3 className="tw3-h3 mb--slack">
                                            Không tìm thấy webcam
                                        </h3>
                                        <div className="iosContainer">
                                            <p className="mb--slack mh20">Quay video với ứng dụng Twoo của chúng tôi trên iOS:
                                            </p>
                                            <p>
                                                <a href="/download" className="tw3-button tw3-button--black">
                                                <i className="tw3-iconApple"></i> Tải ứng dụng iOS về</a>
                                            </p>
                                        </div>
                                        <div className="androidContainer">
                                            <p className="mb--slack mh20">Quay video với ứng dụng Twoo của chúng tôi trên Android:</p>
                                            <p>
                                                <a href="/download" className="tw3-button tw3-button--black">
                                                <i className="tw3-iconAndroid"></i> Tải ứng dụng Android về</a>
                                            </p>
                                        </div>
                                        <div className="notMobileContainer">
                                            <p className="mb--slack mh20">Quay video với ứng dụng Twoo của chúng tôi trên iOS hoặc Android:</p>
                                            <p>
                                                <a href="/download" className="tw3-button tw3-button--black"><i className="tw3-iconApple"></i> Tải ứng dụng iOS về
                                            </a>
                                            </p>
                                            <p>
                                                <a href="/download" className="tw3-button tw3-button--black">
                                                <i className="tw3-iconAndroid"></i> Tải ứng dụng Android về</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tw3-videoRecorder__record__accessHtml5 hide">
                            <div className="centerBlock jsErrors">
                                <div className="centerBlock__item plr--default">
                                    <h3 className="tw3-h3 mb--slack">
                                        Cần được truy cập máy qua và micro
                                    </h3>
                                    <p className="mb--default">
                                        <img src="https://twoo-a.akamaihd.net/static/74250004075968717349811666/images/onboarding/img-purple-camera.png" width="96" height="96" />
                                    </p>
                                    <p className="tw3-videoRecorder__errors__noAccessAudio hide text--bold">
                                        Không được phép sử dụng âm thanh
                                    </p>
                                    <p>Vui lòng cho phép truy cập máy quay và micro ở đầu trình duyệt của bạn</p>
                                    <p>
                                        <a href="javascript://" className="tw3-button tw3-button-blue jsAccessDismissedRetry">Thử quay lại
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="tw3-videoRecorder__record__loadingStream hide">
                            <div className="centerBlock">
                                <div className="centerBlock__item plr--default">
                                    <div className="loaderSpinner loaderSpinner--big loaderSpinner--dark el--inlineBlock">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="jsVideoPlayer tw3-videoRecorder__record__video tw3-video hide">
                            <div className="tw3-media__containerPlayer">
                                <video className="jsVideoPlayerVideo tw3-media__player " height="431" width="575">
                            </video>
                                <audio className="jsVideoPlayerAudio"></audio>
                                <div className="tw3-media__containerPlayer__actionButton jsVideoPlayerActionButton"></div>
                            </div>
                            <div className="tw3-media__containerTimer">
                                <div className="tw3-media__progress jsVideoPlayerProgressBar">
                                    <div className="tw3-media__progress__loading jsVideoPlayerProgressBarLoaded"></div>
                                    <div className="tw3-media__progress__playing jsVideoPlayerProgressBarPlayed"></div>
                                </div>
                                <div className="tw3-videoRecorder__progressUpload jsVideoUploaderProgressBar hide">
                                    <div className="tw3-videoRecorder__progressUpload__total jsVideoUploaderProgressBarTotalSize"></div>
                                    <div className="tw3-videoRecorder__progressUpload__loaded jsVideoUploaderProgressBarUploaded"></div>
                                </div>
                            </div>
                            <div className="tw3-media__containerControls">
                                <div className="tw3-videoRecorder__controls jsVideoPlayerControls">
                                    <div className="tw3-videoRecorder__controls__startRecording tw3-media__controls__table hide">
                                        <div className="tw3-media__timings">
                                            <span className="tw3-media__timings__current jsVideoPlayerTimingsCurrentTime">00:00</span>/<span className="tw3-media__timings__length jsVideoPlayerTimingsLength">00:00</span>
                                        </div>
                                        <a href="javascript://" className="jsControlsStartRecording tw3-button tw3-button--red tw3-button--rounded">
                                            Bắt đầu quay
                                        </a>
                                    </div>
                                    <div className="tw3-videoRecorder__controls__stopRecording tw3-media__controls__table hide">
                                        <div className="tw3-media__timings">
                                            <span className="tw3-media__timings__current jsVideoPlayerTimingsCurrentTime">00:00</span>/<span className="tw3-media__timings__length jsVideoPlayerTimingsLength">00:00</span>
                                        </div>
                                        <a href="javascript://" className="jsControlsStopRecording tw3-button tw3-button--grey tw3-button--rounded">Dừng quay</a></div>
                                    <div className="tw3-videoRecorder__controls__processRecording tw3-media__controls__table hide">
                                        <a href="javascript://" className="tw3-button tw3-button--grey tw3-button--disabled tw3-button--rounded">Đang xử lý video</a>
                                    </div>
                                    <div className="tw3-videoRecorder__controls__saveRecording tw3-media__controls__table tw3-buttonGroup hide">
                                        <div className="tw3-media__containerControls__button">
                                            <a href="javascript://" className="tw3-button tw3-button--purple tw3-button--rounded tw3-button--subtle jsControlsRetryRecording">Chỉnh lại video</a>
                                        </div>
                                        <div className="tw3-media__containerControls__button">
                                            <a href="javascript://" className="tw3-button tw3-button--purple tw3-button--rounded jsControlsSaveRecording" data-answersuccess="Video đã được lưu." data-answerfailed="Không thể lưu video">
                                                <i className="tw3-iconUpload"></i> Tải video lên
                                            </a>
                                        </div>
                                    </div>
                                    <div className="tw3-videoRecorder__controls__errorRecordingShort tw3-media__controls__table hide">
                                        <a href="javascript://" className="tw3-button tw3-button--red tw3-button--rounded jsControlsRetryRecording">Chỉnh lại video
                                        </a>
                                        <span>Video này quá ngắn</span>
                                    </div>
                                    <div className="tw3-videoRecorder__controls__savingRecording tw3-media__controls__table hide">
                                        <a href="javascript://" className="tw3-button tw3-button--purple tw3-button--rounded tw3-button--disabled">
                                            <i className="tw3-iconUpload"></i> Đang tải video lên
                                        </a>
                                    </div>
                                    <div className="tw3-videoRecorder__controls__saveRecordingFailed tw3-media__controls__table hide">
                                        <a href="javascript://" className="tw3-button tw3-button--red tw3-button--rounded jsControlsSaveRecording" data-answersuccess="Video đã được lưu." data-answerfailed="Không thể lưu video">
                                            <i className="tw3-iconUpload"></i> Thử tải lại video
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="jsButtons tw3-media__containerControls jsButtonsPhoto">
                <div className="jsTicker tw3-webcamTicker mb--compact" data-showstep="3" style={{display: 'none'}}>
                    <span data-step="3" className="tw3-webcamTicker__step">3</span>
                    <span data-step="2" className="tw3-webcamTicker__step">2</span>
                    <span data-step="1" className="tw3-webcamTicker__step">1</span>
                    <span data-step="0" className="tw3-webcamTicker__step">
                        <i className="tw3-iconCamera tw3-iconSmall"></i>
                    </span>
                </div>
                <div className="tw3-media__containerControls__button">
                    <a href="javascript://" className="tw3-button tw3-button--blue tw3-button--rounded jsButtonCapture" style={{display: 'none'}}>Chụp hình
                    </a>
                </div>
                <div className="tw3-media__containerControls__button">
                    <a href="javascript://" className="tw3-button tw3-button--blue tw3-button--rounded tw3-button--subtle jsButtonRetry" style={{display: 'none'}}>Chụp lại
                    </a>
                </div>
                <div className="tw3-media__containerControls__button">
                    <a href="javascript://" className="tw3-button tw3-button--blue tw3-button--rounded jsButtonSave" style={{display: 'none'}}>
                        <i className="tw3-iconUpload"></i>Tải hình lên
                    </a>
                </div>
            </div>
        </div>
          
         <Dropzone accept="image/*" className="dragArea jsDropField mb--loose" activeClassName='active-dropzone dragOver' onDrop={this.onDrop}
            disablePreview
            >
                <div className="dragArea__init">
                    <label className="tw3-button tw3-button--blue tw3-button--wrap tw3-button--rounded mb--tight jsFileButton" style={{overflow: 'hidden', position: 'relative', display: 'inline-block'}} htmlFor="qqfile">
                            <span className="jsComputer" style={{display: 'inline'}}>
                                <span>
                                    Tải từ máy tính của bạn
                                </span>
                            </span>
                            <span className="jsLibrary" style={{display: 'none'}}>
                                <span>
                                    Tải từ máy tính của bạn
                                </span>
                            </span>
                        </label>
                        <br/>
                    <span className="dragArea__dragText text--subtle text--small">
                        Hoặc kéo thả vào đây.
                    </span>
                </div>
                <div className="dragArea__dragging">
                    Thả hình vào đây!
                </div>
        </Dropzone>
        <div className="jsFacebookField" style={{display: 'none'}}>
            <div className="jsLoading">
                <span className="loader">
                    <span className="loader-inner"></span>
                </span>
                <p style={{paddingTop:'20px'}}>
                    Đang tải lại hình Facebook của bạn
                </p>
            </div>
            <div className="jsControls mb--compact">
                <a href="javascript://" className="jsDeselectAll text--smaller">Bỏ chọn tất cả</a> |
                <a href="javascript://" className="jsSelectAll text--smaller">Chọn tất cả</a>
            </div>
            <div className="jsPhotosContainer"></div>
            <div className="jsButtons tw3-buttonsHolder--floating">
                <a href="javascript://" className="jsImport tw3-button tw3-button--rounded tw3-button--full">
                    <span className="jsNoPhotosSelected" style={{display: 'none'}}>Chưa chọn</span>
                    <span className="jsOnePhotoSelected" style={{display: 'none'}}>Nhập 1</span>
                    <span className="jsPluralPhotosSelected" style={{display: 'none'}}>Nhập 
                        <span className="jsSelectedCount"></span>
                    </span>
                </a>
            </div>
            <div className="tw3-uploadProgressBarHolder jsUploadContainer" style={{display:'none'}}>
                <div className="centerBlock">
                    <div className="centerBlock__item">
                        <div className="jsUploadingTextOnePhoto text--subtle mb--default">Đang tải hình của bạn lên</div>
                        <div className="jsUploadingTextPhotos text--subtle mb--default" style={{display:'none'}}>Đang tải hình của bạn lên</div>
                        <div className="jsUploadingTextOneVideo text--subtle mb--default" style={{display:'none'}}>Đang tải hình của bạn lên</div>
                        <div className="tw3-uploadProgressBarContainer jsUploadProgressBarContainer tsn">
                            <div className="tw3-uploadProgressBar jsUploadProgressBar"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="jsInstagramField" style={{display: 'none'}}>
            <div className="jsLoading"><span className="loader"><span className="loader-inner"></span></span>
                <p style={{paddingTop:'20px'}}>
                    Đang tải lại hình Instagram của bạn
                </p>
            </div>
            <div className="jsControls mb--compact"><a href="javascript://" className="jsDeselectAll">Bỏ chọn tất cả</a> |
                <a href="javascript://" className="jsSelectAll">Chọn tất cả</a></div>
            <div className="jsPhotosContainer"></div>
            <div className="jsButtons tw3-buttonsHolder--floating"><a href="javascript://" className="jsImport tw3-button tw3-button--rounded tw3-button--full"><span className="jsNoPhotosSelected" style={{display: 'none'}}>Chưa chọn mục nào</span><span className="jsOnePhotoSelected" style={{display: 'none'}}>Nhập 1</span><span className="jsPluralPhotosSelected" style={{display: 'none'}}>Nhập <span className="jsSelectedCount"></span></span></a></div>
            <div className="tw3-uploadProgressBarHolder jsUploadContainer" style={{display:'none'}}>
                <div className="centerBlock">
                    <div className="centerBlock__item">
                        <div className="jsUploadingTextOnePhoto text--subtle mb--default">Đang tải hình của bạn lên</div>
                        <div className="jsUploadingTextPhotos text--subtle mb--default" style={{display:'none'}}>Đang tải hình của bạn lên</div>
                        <div className="jsUploadingTextOneVideo text--subtle mb--default" style={{display:'none'}}>Đang tải hình của bạn lên</div>
                        <div className="tw3-uploadProgressBarContainer jsUploadProgressBarContainer tsn">
                            <div className="tw3-uploadProgressBar jsUploadProgressBar"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="jsErrors uploadErrors" style={{display: 'none'}}>
            <p className="jsError" data-error="NO_WEBCAM">
                Không tìm thấy webcam
            </p>
            <p className="jsError" data-error="NO_WEBCAM_ACCESS">
                Không thể truy cập webcam
            </p>
            <p className="jsError" data-error="ALREADY_UPLOADED">
                Tập tin đã được tải lên rồi
            </p>
            <p className="jsError" data-error="PROFILE_PHOTO_EXISTS">
                Hình này đã được tải lên
            </p>
            <p className="jsError" data-error="NO_PHOTOS_FETCHED">
                Không tải được hình của bạn
            </p>
            <p className="jsError" data-error="FAILED_TO_IMPORT">
                Có lỗi khi tải hình của bạn
            </p>
            <p className="jsError" data-error="INVALID_EXTENSION">
                Vui lòng tải hình theo đúng định dạng ('jpeg','jpg','bmp','png','gif', 'webp').
            </p>
            <p className="jsError" data-error="INVALID_EXTENSION_VIDEO">
                Tập tin của bạn là dạng thức video không sử dụng được
            </p>
            <p className="jsError" data-error="FILE_TOO_SMALL">
                Hình của bạn quá nhỏ. Kích thước tối thiểu là 400 x 400 pixel.
            </p>
            <p className="jsError" data-error="FILE_TOO_LARGE">
                Video của bạn quá lớn
            </p>
            <p className="jsError" data-error="UPLOAD_LIMIT">
                Đã đạt số lượng hình tối đa
            </p>
            <p className="jsError" data-error="PHOTO_DENIED">
                Bạn tải lên một hình đã bị chặn
            </p>
            <p className="jsError" data-error="PHOTO_BLOCKED">
                Bạn tải lên một hình đã bị chặn
            </p>
            <p className="jsError" data-error="FACEBOOK_NOT_AUTHORIZED">
                Chúng tôi không được phép truy cập hình của bạn trên Facebook
            </p>
            <p className="jsError" data-error="GENERIC">
                Có lỗi khi tải file của bạn lên
            </p>
            <p className="jsError" data-error="VIDEO_TOO_LONG">
                Video không được dài hơn 3 phút
            </p>
        </div>
        <div className="uploadOptions--v4__note text--subtle text--small mb--default">
            Chú ý: hình đại diện cần nhìn rõ mặt bạn. Tuổi và giới tính phải khớp với hình. Hình không được là hình khỏa thân.
        </div>
        <p className="text--center text--subtle text--small">(Hình phải lớn hơn kích thước 400 x 400 điểm ảnh)</p>
        <div className="tw3-uploadProgressBarHolder jsUploadContainer" style={{display:'none'}}>
            <div className="centerBlock">
                <div className="centerBlock__item">
                    <div className="jsUploadingTextOnePhoto text--subtle mb--default">Đang tải hình của bạn lên</div>
                    <div className="jsUploadingTextPhotos text--subtle mb--default" style={{display:'none'}}>Đang tải hình của bạn lên</div>
                    <div className="jsUploadingTextOneVideo text--subtle mb--default" style={{display:'none'}}>Đang tải hình của bạn lên</div>
                    <div className="tw3-uploadProgressBarContainer jsUploadProgressBarContainer tsn">
                        <div className="tw3-uploadProgressBar jsUploadProgressBar"></div>
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
    const { authentication } = state;
    return { authentication };
}
const connected=connect(mapStateToProps)(AddImages);
export {connected as AddImages}