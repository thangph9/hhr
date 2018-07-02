import React from "react";
import {connect } from "react-redux";
import { LikeView,LikePagination } from "./index";
class LikeListView extends React.Component{
    render(){
        return(
            <div className="tw3-bp4-col-8 tw3-col-12 jsActivityLikes promoPosabove">

    <div className="jsPromotionBlock" >
        <a href="javascript:;"  className="noline jsBuyProduct">
            <div className="tw3-promoHor tw3-promoHor--fis">
                <div className="tw3-media tw3-media--figure--fluid tw3-media--middle">
                    <div className="tw3-media__figure">
                        <img src="https://twoo-a.akamaihd.net/static/864505989717655270395861131/shared/i/blank.gif" className="tw3-promoHor__icon" style={{background: "url('https://twoo-a.akamaihd.net/static/568138209611541256/images/onboarding/img-purple-fis.png')", backgroundSize: '100%'}} width="64" height="64" />
                    </div>
                    <div className="tw3-media__content">
                        Chắc chắn bạn là người <strong>đầu tiên</strong> mọi người thấy trong kết quả tìm kiếm.
                        <p className="m0">
                            <small className="text--subtle">
                                Giá: 100 Tín dụng</small>
                        </p>
                    </div>
                    <div className="tw3-media__actions">
                        <p className="mb--tight">
                        </p>
                        <div className="tw3-button tw3-button--blue tw3-button--fis tw3-button--rounded">Đầu mục Tìm kiếm</div>
                        <p></p>
                    </div>
                </div>
            </div>
        </a>
    </div>
    <div className="tw3-box tw3-box--padding--off activityPage">
        <div className="tw3-row">
            <div className="tw3-col-12 tw3-bp3-offset-left-1 tw3-bp3-col-10">
                <p className="text--subtle mt--default activity__title">
                    Người bạn thích
                </p>
                <div className="clearfix">

                    <div id="jsLoader" className="loader"></div>
                    <div id="likes" className="activityPage activityPage--likes">

                        <ul className="peopleList">
                            <LikeView />
                        </ul>
                        <LikePagination />
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
const connected = connect(mapStateToProps)(LikeListView);
export { connected as LikeListView };