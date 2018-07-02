import React from "react";
import { connect } from "react-redux";
class MobileVerifyPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            openCallapse: false,
        }
        this.handleCollapse=this.handleCollapse.bind(this);
    }
    handleCollapse(){
        const { openCallapse } = this.state;
        this.setState({
            openCallapse: !openCallapse
        })
    }
    render(){
        return(<div>
               
               <div className="jsPaywallContent tw3-modal--payments--loading" >
    <div className="tw3-modal--payments__header tw3-promoHor tw3-media--figure--fluid">
        <div className="tw3-media tw3-media--middle">
            <div className="tw3-media__figure"><img src="https://twoo-a.akamaihd.net/static/257997514276286711669756/shared/i/blank.gif" className="tw3-promoHor__icon" style={{ background: "url('https://twoo-a.akamaihd.net/static/257997514276286711669756/images/onboarding/img-yellow-credits.png')", backgroundSize: '100'}} width="64" height="64" /></div>
            <div className="tw3-media__content">
                <h4 className="">
                    Xác nhận sơ yếu của bạn!
                </h4>
                <div className="jsFullHeader">
                    <p>
                        Thực hiện thanh toán 1 lần bằng điện thoại.
                    </p>
                </div>
            </div>
            <div className="tw3-media__actions"></div>
        </div>
    </div>
    <div className="tw3-modal--payments__content jsPaywallContainer pos--rel">
        <div className="tw3-container--fluid">
            <div className="jsMobileErrors tw3-modal--payments__errorsHolder--nextStep">
                <div className="tw3-row">
                    <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                        <div className="oh">
                            Có lỗi khi xử lý giao dịch của bạn. Vui lòng kiểm tra thông tin chi tiết và thử lại.
                        </div>
                    </div>
                    <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                        <div className="oh">
                            Có lỗi khi xử lý giao dịch của bạn. Vui lòng kiểm tra thông tin chi tiết và thử lại.
                        </div>
                    </div>
                    <div className="tw3-modal--payments__error jsGeneralError hide" style={{display: 'none'}}><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                        <div className="oh">
                            Sorry, we could not complete your payment. Please ignore the free welcome SMS, you have NOT been charged. You will receive another free SMS confirming we have closed your subscription because we could not complete your payment. Please check you have enough credit and have premium SMS services enabled on your account and try again later.
                        </div>
                    </div>
                    <div className="tw3-modal--payments__error jsGeneralError hide"  style={{display: 'none'}}><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                        <div className="oh">Bạn đã hủy thanh toán.</div>
                    </div>
                    <div className="tw3-modal--payments__error jsGeneralError hide" style={{display: 'none'}}><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                        <div className="oh">Hình như thẻ của bạn đã hết hạn. Vui lòng thử thẻ mới, hoặc dùng hình thức thanh toán khác như Paypal.</div>
                    </div>
                    <div className="tw3-modal--payments__error jsGeneralError hide"  style={{display: 'none'}}><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                        <div className="oh">
                            Rất tiếc, thanh toán của bạn không thành công. Vui lòng thử với thẻ thanh toán khác hoặc hình thức thanh toán khác.
                        </div>
                    </div>
                    <div className="tw3-modal--payments__error jsGeneralError hide" style={{display: 'none'}}><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                        <div className="oh">
                            Rất tiếc, thanh toán của bạn không thành công. Vui lòng thử với thẻ thanh toán khác hoặc hình thức thanh toán khác.
                        </div>
                    </div>
                    <div className="tw3-modal--payments__error jsGeneralError hide" style={{display: 'none'}}><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                        <div className="oh">
                            Rất tiếc, thanh toán PayPal của bạn không thành công. Vui lòng thử với hình thức thanh toán khác.
                        </div>
                    </div>
                    <div className="tw3-modal--payments__error jsGeneralError hide" style={{display: 'none'}}><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                        <div className="oh">
                            Rất tiếc, thanh toán SMS của bạn không thành công. Vui lòng kiểm tra xem bạn còn tiền trong tài khoản không và cẩn thận làm theo hướng dẫn trên màn hình. Hoặc thử với hình thức thanh toán khác.
                        </div>
                    </div>
                    <div className="tw3-modal--payments__error jsGeneralError hide"  style={{display: 'none'}}><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                        <div className="oh">
                            Rất tiếc, thanh toán bằng Thẻ Ghi nợ của bạn không thành công. Vui lòng kiểm tra các chi tiết và thử lại, hoặc thử với hình thức thanh toán khác.
                        </div>
                    </div>
                    <div className="tw3-modal--payments__error jsGeneralError hide" style={{display: 'none'}}><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                        <div className="oh">
                            Rất tiếc, thanh toán của bạn không thành công. Vui lòng thử với hình thức thanh toán khác.
                        </div>
                    </div>
                    <div className="tw3-modal--payments__error jsGeneralError hide" style={{display: 'none'}}><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                        <div className="oh">
                            Rất tiếc, thanh toán của bạn không thành công. Vui lòng thử với thẻ thanh toán khác hoặc hình thức thanh toán khác.
                        </div>
                    </div>
                    <div className="tw3-modal--payments__error jsGeneralError hide"  style={{display: 'none'}}><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                        <div className="oh">
                            Rất tiếc, thanh toán của bạn không thành công. Vui lòng thử với hình thức thanh toán khác.
                        </div>
                    </div>
                    <div className="tw3-modal--payments__error jsGeneralError hide" style={{display: 'none'}}><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                        <div className="oh">
                            Rất tiếc, thanh toán của bạn không thành công. Vui lòng kiểm tra thông tin tên bạn được in trên thẻ và thử lại. Hoặc thử hình thức thanh toán khác.
                        </div>
                    </div>
                    <div className="tw3-modal--payments__error jsGeneralError hide"  style={{display: 'none'}}><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                        <div className="oh">
                            Rất tiếc, thanh toán của bạn không thành công. Vui lòng kiểm tra thông tin tên bạn được in trên thẻ và thử lại. Hoặc thử hình thức thanh toán khác.
                        </div>
                    </div>
                    <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                        <div className="oh">
                            Rất tiếc, thanh toán của bạn không thành công. Vui lòng thử với hình thức thanh toán khác.
                        </div>
                    </div>
                    <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                        <div className="oh">
                            Rất tiếc, thanh toán của bạn không thành công. Vui lòng thử với hình thức thanh toán khác.
                        </div>
                    </div>
                    <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                        <div className="oh">Số thẻ này không chính xác. Vui lòng thử, hoặc sử dụng thẻ khác. Hoặc sử dụng Paypal.</div>
                    </div>
                    <div className="tw3-modal--payments__error jsGeneralError hide"><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                        <div className="oh">
                            Số thẻ không hợp lệ. Vui lòng thử hình thức thanh toán khác.
                        </div>
                    </div>
                    <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                        <div className="oh">
                            Rất tiếc, thanh toán của bạn không thành công. Vui lòng kiểm tra lại mã CVC và thử lại. Hoặc thử một hình thức thanh toán khác.
                        </div>
                    </div>
                    <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                        <div className="oh">
                            Rất tiếc, thanh toán của bạn không thành công. Vui lòng thử với hình thức thanh toán khác.
                        </div>
                    </div>
                    <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                        <div className="oh">Bạn nhập sai ngày hết hạn. Vui lòng thử lại.</div>
                    </div>
                    <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                        <div className="oh">Dường như bạn đã kết thúc hợp đồng thanh toán bằng PayPal trên Twoo, chúng tôi không thể xử lý thanh toán của bạn. Vui lòng thử lại và nhập chi tiết PayPal của bạn!</div>
                    </div>
                    <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                        <div className="oh">Rất tiếc, bạn đã thực hiện số lượng giao dịch vượt mức cho phép của Twoo cho 24h qua. Vui lòng thử lại sau.</div>
                    </div>
                    <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                        <div className="oh">Oops, looks like your card has been restricted or has expired. Please contact your bank. In the meantime, perhaps try PayPal or Boleto.</div>
                    </div>
                    <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                        <div className="oh">Oops, looks like you’re trying to use a card issued outside of Brazil. Please try again using a Brazilian credit card. Or, perhaps try PayPal or Boleto instead.</div>
                    </div>
                    <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                        <div className="oh">
                            Rất tiếc, thanh toán của bạn không thành công. Vui lòng thử với hình thức thanh toán khác.
                        </div>
                    </div>
                    <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                        <div className="oh">
                            Rất tiếc, thanh toán của bạn không thành công. Hãy thử sử dụng PayPal.
                        </div>
                    </div>
                    <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                        <div className="oh">
                            Rất tiếc, thanh toán của bạn không thành công. Vui lòng thử với thẻ thanh toán khác hoặc hình thức thanh toán khác.
                        </div>
                    </div>
                    <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                        <div className="oh">
                            Rất tiếc, thanh toán của bạn không thành công. Vui lòng thử với hình thức thanh toán khác.
                        </div>
                    </div>
                    <div className="tw3-modal--payments__error jsGeneralError hide"><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                        <div className="oh">
                            Rất tiếc, tài khoản của bạn không đủ tiền để hoàn tất thanh toán. Vui lòng liên hệ ngân hàng để giải quyết và thử lại. Hoặc thử một hình thức thanh toán khác.
                        </div>
                    </div>
                    <div className="tw3-modal--payments__error jsGeneralError hide"><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                        <div className="oh">
                            Có lỗi trong quá trình xử lý giao dịch của bạn. Vui lòng kiểm tra chi tiết và thử lại. Hãy liên hệ với <a href="javascript:;" className="jsTicketTrigger">Bàn trợ giúp</a> của chúng tôi nếu vấn đề chưa được khắc phục.
                        </div>
                    </div>
                    <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                        <div className="oh">
                            Có lỗi trong quá trình xử lý giao dịch của bạn. Vui lòng kiểm tra xem tài khoản di động của bạn còn đủ tiền không và thử lại. Hãy liên lạc với <a href="javascript:;" className="jsTicketTrigger">Bàn trợ giúp</a> của chúng tôi nếu vấn đề vẫn chưa được khắc phục.
                        </div>
                    </div>
                    <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                        <div className="oh">
                            Những dịch vụ trả tiền chưa được kích hoạt trên điện thoại của bạn. Vui lòng kiểm tra với nhà mạng nếu bạn vẫn gặp vấn đề này.
                        </div>
                    </div>
                    <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                        <div className="oh">
                            Tài khoản của bạn không còn đủ tiền. Vui lòng nạp tiền cho di động của bạn và thử lại. Hoặc bạn có thể thử một phương thức thanh toán khác.
                        </div>
                    </div>
                    <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                        <div className="oh">
                            Tài khoản của bạn sắp hết. Vui lòng nạp thêm để kích hoạt Twoo Gói Cao Cấp.
                        </div>
                    </div>
                    <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                        <div className="oh">
                            Bạn đã đạt tới hạn mức tiêu dùng của bạn cho dịch vụ Twoo Gói Cao Cấp SMS. Vui lòng thử lại trong vòng vài ngày tới hoặc thử một phương thức thanh toán khác.
                        </div>
                    </div>
                    <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                        <div className="oh">
                            Do một lỗi kỹ thuật chúng tôi không thể hoàn thành thanh toán của bạn ở thời điểm hiện tại. Vui lòng thử lại hoặc <a href="javascript:;" className="jsTicketTrigger">liên hệ với bàn Trợ Giúp của chúng tôi</a> nếu vấn đề chưa được khắc phục.
                        </div>
                    </div>
                </div>
            </div>
            <div className=" paymentsTabs jsProviders tw3-row ">
                <div className="tw3-row">
                    <div className="tw3-col-12">
                        <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                            <div className="oh">
                                Có lỗi khi xử lý giao dịch của bạn. Vui lòng kiểm tra thông tin chi tiết và thử lại.
                            </div>
                        </div>
                        <div className="tw3-modal--payments__error jsGeneralError hide"><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                            <div className="oh">
                                Có lỗi khi xử lý giao dịch của bạn. Vui lòng kiểm tra thông tin chi tiết và thử lại.
                            </div>
                        </div>
                        <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                            <div className="oh">
                                Sorry, we could not complete your payment. Please ignore the free welcome SMS, you have NOT been charged. You will receive another free SMS confirming we have closed your subscription because we could not complete your payment. Please check you have enough credit and have premium SMS services enabled on your account and try again later.
                            </div>
                        </div>
                        <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                            <div className="oh">Bạn đã hủy thanh toán.</div>
                        </div>
                        <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                            <div className="oh">Hình như thẻ của bạn đã hết hạn. Vui lòng thử thẻ mới, hoặc dùng hình thức thanh toán khác như Paypal.</div>
                        </div>
                        <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                            <div className="oh">
                                Rất tiếc, thanh toán của bạn không thành công. Vui lòng thử với thẻ thanh toán khác hoặc hình thức thanh toán khác.
                            </div>
                        </div>
                        <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                            <div className="oh">
                                Rất tiếc, thanh toán của bạn không thành công. Vui lòng thử với thẻ thanh toán khác hoặc hình thức thanh toán khác.
                            </div>
                        </div>
                        <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                            <div className="oh">
                                Rất tiếc, thanh toán PayPal của bạn không thành công. Vui lòng thử với hình thức thanh toán khác.
                            </div>
                        </div>
                        <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                            <div className="oh">
                                Rất tiếc, thanh toán SMS của bạn không thành công. Vui lòng kiểm tra xem bạn còn tiền trong tài khoản không và cẩn thận làm theo hướng dẫn trên màn hình. Hoặc thử với hình thức thanh toán khác.
                            </div>
                        </div>
                        <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                            <div className="oh">
                                Rất tiếc, thanh toán bằng Thẻ Ghi nợ của bạn không thành công. Vui lòng kiểm tra các chi tiết và thử lại, hoặc thử với hình thức thanh toán khác.
                            </div>
                        </div>
                        <div className="tw3-modal--payments__error jsGeneralError hide"><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                            <div className="oh">
                                Rất tiếc, thanh toán của bạn không thành công. Vui lòng thử với hình thức thanh toán khác.
                            </div>
                        </div>
                        <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                            <div className="oh">
                                Rất tiếc, thanh toán của bạn không thành công. Vui lòng thử với thẻ thanh toán khác hoặc hình thức thanh toán khác.
                            </div>
                        </div>
                        <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                            <div className="oh">
                                Rất tiếc, thanh toán của bạn không thành công. Vui lòng thử với hình thức thanh toán khác.
                            </div>
                        </div>
                        <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                            <div className="oh">
                                Rất tiếc, thanh toán của bạn không thành công. Vui lòng kiểm tra thông tin tên bạn được in trên thẻ và thử lại. Hoặc thử hình thức thanh toán khác.
                            </div>
                        </div>
                        <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                            <div className="oh">
                                Rất tiếc, thanh toán của bạn không thành công. Vui lòng kiểm tra thông tin tên bạn được in trên thẻ và thử lại. Hoặc thử hình thức thanh toán khác.
                            </div>
                        </div>
                        <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                            <div className="oh">
                                Rất tiếc, thanh toán của bạn không thành công. Vui lòng thử với hình thức thanh toán khác.
                            </div>
                        </div>
                        <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                            <div className="oh">
                                Rất tiếc, thanh toán của bạn không thành công. Vui lòng thử với hình thức thanh toán khác.
                            </div>
                        </div>
                        <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                            <div className="oh">Số thẻ này không chính xác. Vui lòng thử, hoặc sử dụng thẻ khác. Hoặc sử dụng Paypal.</div>
                        </div>
                        <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                            <div className="oh">
                                Số thẻ không hợp lệ. Vui lòng thử hình thức thanh toán khác.
                            </div>
                        </div>
                        <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                            <div className="oh">
                                Rất tiếc, thanh toán của bạn không thành công. Vui lòng kiểm tra lại mã CVC và thử lại. Hoặc thử một hình thức thanh toán khác.
                            </div>
                        </div>
                        <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                            <div className="oh">
                                Rất tiếc, thanh toán của bạn không thành công. Vui lòng thử với hình thức thanh toán khác.
                            </div>
                        </div>
                        <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                            <div className="oh">Bạn nhập sai ngày hết hạn. Vui lòng thử lại.</div>
                        </div>
                        <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                            <div className="oh">Dường như bạn đã kết thúc hợp đồng thanh toán bằng PayPal trên Twoo, chúng tôi không thể xử lý thanh toán của bạn. Vui lòng thử lại và nhập chi tiết PayPal của bạn!</div>
                        </div>
                        <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                            <div className="oh">Rất tiếc, bạn đã thực hiện số lượng giao dịch vượt mức cho phép của Twoo cho 24h qua. Vui lòng thử lại sau.</div>
                        </div>
                        <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                            <div className="oh">Oops, looks like your card has been restricted or has expired. Please contact your bank. In the meantime, perhaps try PayPal or Boleto.</div>
                        </div>
                        <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                            <div className="oh">Oops, looks like you’re trying to use a card issued outside of Brazil. Please try again using a Brazilian credit card. Or, perhaps try PayPal or Boleto instead.</div>
                        </div>
                        <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                            <div className="oh">
                                Rất tiếc, thanh toán của bạn không thành công. Vui lòng thử với hình thức thanh toán khác.
                            </div>
                        </div>
                        <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                            <div className="oh">
                                Rất tiếc, thanh toán của bạn không thành công. Hãy thử sử dụng PayPal.
                            </div>
                        </div>
                        <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                            <div className="oh">
                                Rất tiếc, thanh toán của bạn không thành công. Vui lòng thử với thẻ thanh toán khác hoặc hình thức thanh toán khác.
                            </div>
                        </div>
                        <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                            <div className="oh">
                                Rất tiếc, thanh toán của bạn không thành công. Vui lòng thử với hình thức thanh toán khác.
                            </div>
                        </div>
                        <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                            <div className="oh">
                                Rất tiếc, tài khoản của bạn không đủ tiền để hoàn tất thanh toán. Vui lòng liên hệ ngân hàng để giải quyết và thử lại. Hoặc thử một hình thức thanh toán khác.
                            </div>
                        </div>
                        <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                            <div className="oh">
                                Có lỗi trong quá trình xử lý giao dịch của bạn. Vui lòng kiểm tra chi tiết và thử lại. Hãy liên hệ với <a href="javascript:;" className="jsTicketTrigger">Bàn trợ giúp</a> của chúng tôi nếu vấn đề chưa được khắc phục.
                            </div>
                        </div>
                        <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                            <div className="oh">
                                Có lỗi trong quá trình xử lý giao dịch của bạn. Vui lòng kiểm tra xem tài khoản di động của bạn còn đủ tiền không và thử lại. Hãy liên lạc với <a href="javascript:;" className="jsTicketTrigger">Bàn trợ giúp</a> của chúng tôi nếu vấn đề vẫn chưa được khắc phục.
                            </div>
                        </div>
                        <div className="tw3-modal--payments__error jsGeneralError hide"><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                            <div className="oh">
                                Những dịch vụ trả tiền chưa được kích hoạt trên điện thoại của bạn. Vui lòng kiểm tra với nhà mạng nếu bạn vẫn gặp vấn đề này.
                            </div>
                        </div>
                        <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                            <div className="oh">
                                Tài khoản của bạn không còn đủ tiền. Vui lòng nạp tiền cho di động của bạn và thử lại. Hoặc bạn có thể thử một phương thức thanh toán khác.
                            </div>
                        </div>
                        <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                            <div className="oh">
                                Tài khoản của bạn sắp hết. Vui lòng nạp thêm để kích hoạt Twoo Gói Cao Cấp.
                            </div>
                        </div>
                        <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                            <div className="oh">
                                Bạn đã đạt tới hạn mức tiêu dùng của bạn cho dịch vụ Twoo Gói Cao Cấp SMS. Vui lòng thử lại trong vòng vài ngày tới hoặc thử một phương thức thanh toán khác.
                            </div>
                        </div>
                        <div className="tw3-modal--payments__error jsGeneralError hide" ><i className="tw3-iconWarning tw3-iconRed tw3-iconMedium left mr--compact"></i>
                            <div className="oh">
                                Do một lỗi kỹ thuật chúng tôi không thể hoàn thành thanh toán của bạn ở thời điểm hiện tại. Vui lòng thử lại hoặc <a href="javascript:;" className="jsTicketTrigger">liên hệ với bàn Trợ Giúp của chúng tôi</a> nếu vấn đề chưa được khắc phục.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tw3-row">
                    <div className="tw3-col-12">
                        <ul className="clearfix jsMainProviders">
                            <li className="paymentsTabs__tab selected" data-globalprovider="FORTUMO_WEB" data-provider="FORTUMO_WEB">
                                <a href="#" className="noline">
                                    <div className="paymentsTabs__tab__img"><img src="https://twoo-a.akamaihd.net/static/257997514276286711669756/images/v3/payments/icon-fortumo-web.png" width="32" alt=""/></div>
                                    <div className="paymentsTabs__tab__label">
                                        Di động </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="tw3-row">
                <div className="tw3-col-12"></div>
            </div>
            <div className="jsPaymentArea tw3-modal--payments__paymentArea tw3-row pos--rel">
                <div className="paymentsPackage jsPricepoints clearfix">
                    <div className="tw3-row">
                        <div className="tw3-col-12"></div>
                    </div>
                    <div className="tw3-row">
                        <div className="tw3-col-12 desktop">
                            <div className="jsPricepointList hide jsHidePermanently" >
                                <div className="">
                                    <div className="tw3-form__row__label"><label>CHỌN GÓI TÍN DỤNG</label></div>
                                    <table width="100%" className="text--subtle tableSelector tableSelector--v2 jsPricepointComponent">
                                        <tbody>
                                            <tr className="jsPricepointComponentElement selected" data-value="279976">
                                                <td><span className="filler"></span></td>
                                                <td className="text--bold">
                                                    100 Tín dụng </td>
                                                <td><span className="symbol">₫</span>15.000 </td>
                                                <td>&nbsp;</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <hr className="tw3-hr mtb--default"/>
                                </div>
                            </div>
                        </div>
                        <div className="tw3-col-12 mb--default mobile">
                            <div className="jsPricepointDropdown hide jsHidePermanently" >
                                <div className="tw3-form__row__label"><label>CHỌN GÓI TÍN DỤNG</label></div>
                                <div className="tw3-form__row__input text--left">
                                    <div className="tw3-dropdownHolder jsCustomDropdownSingle" name="FORTUMO_WEB" tabIndex="1" single="single" copyplaceholder="0" placeholder="">
                                        <div className="tw3-dropdownHolder--mobile jsDropdownMobileHolder">
                                            <div className="tw3-dropdown--native jsDropdownNative">
                                                <div className="tw3-dropdownHolder__native__content jsDropdownContent"><select className=" " name="FORTUMO_WEB" tabIndex="1"><option value="279976" selected="selected" data-credits="100">100 Tín dụng với giá ₫15.000</option></select></div>
                                            </div>
                                        </div>
                                        <div className="tw3-dropdownHolder--desktop jsDropdownDesktopHolder">
                                            <div className="tw3-dropdown--custom jsDropdownCustom">
                                                <div className="tw3-dropdown--custom__label jsDropdownLabel">
                                                    100 Tín dụng với giá <span className="symbol">₫</span>15.000 </div>
                                                <div className="tw3-dropdown--custom__actions"><a href="javascript://" className="jsDropdownToggle tw3-dropdown--custom__actions__open"><i className="tw3-iconArrowDown tw3-iconGrey tw3-iconSmall"></i></a></div>
                                                <div className="tw3-dropdown--custom__content jsDropdownContent">
                                                    <ul className="options">
                                                        <li className="tw3-dropdown--custom__content__option jsDropdownOption selected " ><i className="tw3-iconCheckThin"></i><span className="jsHtml">100 Tín dụng với giá <span className="symbol">₫</span>15.000</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="paymentsForm clearfix">
                    <div className="tw3-row">
                        <div className="tw3-col-12">
                            <div className="jsPaymentForm hide" >
                                <form method="post" action="/paywall" className="hide">
                                    <input type="hidden" name="action" value="checkout"/>
                                    <input type="hidden" name="trigger" value="phone_verification"/>
                                    <input type="hidden" name="pricepointid" value="279976"/>
                                    <input type="hidden" name="type" value="CREDITS"/>
                                    <input type="hidden" name="itemid" value=""/>
                                    <input type="hidden" name="productid" value="51"/>
                                    <input type="hidden" name="topup" value="1"/>
                                    <input type="hidden" name="operatorid" value=""/>
                                    <input type="hidden" name="order" value="Q1JFRElUUzoxMDEwNTUwNDA6MTUyNzY3MjEyNjo6JmxqIhFef38wwJwXxutyHw"/>
                                    <input type="hidden" name="prcd" value="OTY2MTkyNTc6Njc6b25ldGltZToxOjA6MTUyNzY3MDc4Mzo6na6pwiI8F9muJptWDVgUFA"/>
                                </form>
                                <div className="desktop">
                                    <div className="jsContent"> 
                                    </div>
                                </div>
                                <div className="tw3-form__row__input mobile tw3-fixedButtonContainer">
                                    <div className="tw3-row">
                                        <div className="tw3-col-12"><a href="#" className="jsContinue tw3-button tw3-button--large tw3-button--green ">Tiếp</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="paymentsTc tw3-row jsTermsContainer">
                <div className={(this.state.openCallapse) ? "collapseMenu collapseMenu--active" : "collapseMenu"}>
                    <div className="collapseMenu__icons jsConditions"><i className="tw3-iconCheckUpFilled tw3-iconGrey tw3-iconNormal"></i><i className="tw3-iconCheckDownCircle tw3-iconGrey tw3-iconNormal"></i></div>
                    <div className="jsTermsSummary hide  " style={{display: 'block'}} >
                    <a href="javascript://" onClick={()=>{this.handleCollapse()}} className="jsConditions text--black jsAnimate">Điều kiện</a></div>
                    <div className="jsTermsFull hide" style={(this.state.openCallapse) ? {display: 'block'} : {display: 'none'} } >
                        <div className="text--bold text--small mt--default">
                            Điều khoản Dịch vụ của Tín dụng Twoo </div>
                        <ol className="m0">
                            <li>Khi bạn mua hoặc nhận được Tín dụng, bạn được cấp quyền hạn chế để sử dụng chúng cho những dịch vụ tuyệt vời trên Twoo như Tiêu điểm, hiện Đầu mục Tìm kiếm, Quà tặng, Tin nhắn Nổi bật và Biểu tượng. Bạn không được quyền sở hữu Tín dụng hoàn toàn.</li>
                            <li>Tín dụng sau khi mua không hoàn lại được.</li>
                            <li>Twoo có thể điều chỉnh giá Tín dụng bất kỳ lúc nào. Và khi có điều chỉnh, tiền nạp Tín dụng tự động vẫn bằng với mức cũ mà bạn mua bạn đầu. Chúng tôi cũng có thể thay đổi hình thức thanh toán và dịch vụ có thể sử dụng bằng Tín dụng. Chúng tôi giữ lại quyền dừng phát hành Tín dụng bất kỳ khi nào (nhưng chuyện này hầu như sẽ không xảy ra).</li>
                            <li>Để tiện lợi cho bạn, chúng tôi đưa ra dịch vụ tự động nạp Tín dụng trên Twoo. Nếu bạn không tắt chức năng này, chúng tôi sẽ tự động nạp thêm cùng một số lượng Tín dụng với cùng hình thức thanh toán so với lần bạn mua cuối cùng khi bạn còn ít hơn 300 Tín dụng để bạn không bao giờ hết Tín dụng. Bạn có thể bỏ chọn chức năng này khi mua Tín dụng hoặc thay đổi bất kỳ lúc nào trong mục <a href="/settings">Thiết lập</a>. Các thành viên sử dụng PayPal có thể dừng hợp đồng thanh toán PayPal với Twoo bất kỳ lúc nào. Bạn chỉ cần làm theo các bước trong mục <a href="/faq?category=PREMIUM">Các câu hỏi</a>.</li>
                            <li>Để tiện lợi cho bạn tận hưởng, chúng tôi đưa ra dịch vụ sử dụng Tín dụng Mỗi ngày để mọi người chú ý đến bạn ngay cả khi bạn không online. Bạn có thể tắt chức năng này bất kỳ lúc nào trong mục <a href="/settings">Thiết lập</a>.</li>
                            <li>Tín dụng sẽ hết hạn sau khi mua 91 ngày (nhưng chúng tôi tin bạn sẽ sử dụng hết trước ngày đó!). Nếu bạn nhận được Tín dụng miễn phí hoặc khuyến mãi, chúng tôi có thể chuyển chúng thành hết hạn bất kỳ lúc nào. Nếu bạn xóa tài khoản (hy vọng là bạn không làm vậy, vì chúng tôi sẽ rất buồn?!) hoặc nếu Twoo xóa tài khoản của bạn (vì vi phạm quy định!), bạn sẽ mất tất cả Tín dụng.</li>
                            <li>Bằng cách mua Tín dụng bạn đã đồng ý với <a href="/about/terms" target="_blank">Điều khoản &amp; Điều kiện</a> của chúng tôi như bên trên.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div><span className="jsLoaderText-poller hide">Vui lòng đợi trong khi giao dịch của bạn được xử lý...</span><span className="jsLoaderText-android hide">Vui lòng làm theo các bước trong cửa sổ Google Play để hoàn thành thanh toán của bạn.</span><span className="jsLoaderText-windows hide">Vui lòng làm theo các bước trong cửa sổ Windows Store để hoàn tất việc mua.</span>
</div>
<div className="tw3-modal--payments__features text--left jsPaywallFeatures">
    <div className="tw3-modal--payments__features__header text--bold mobile">
        <div className="collapseMenu">
            <div className="collapseMenu__icons"><i className="tw3-iconCheckUpFilled tw3-iconGrey tw3-iconNormal"></i><i className="tw3-iconCheckDownCircle tw3-iconGrey tw3-iconNormal"></i></div>
            Sử dụng Tín dụng của bạn để:
        </div>
    </div>
    <div className="tw3-modal--payments__features__content mobile mt--default">
        <div className="hide jsFteaureListToggle">
            <div className="text--bold mb--default desktop">Sử dụng Tín dụng của bạn để:</div><i className="tw3-iconBoost tw3-iconBoostColor mr--tight left"></i>
            <p className="ml--default mb--default clearfix">
                Gây Chú ý sơ yếu của bạn
            </p><i className="tw3-iconHighlightFilled tw3-iconOrange mr--tight left"></i>
            <p className="ml--default mb--default clearfix">
                Làm nổi bật tin nhắn của bạn
            </p><i className="tw3-iconMessageBomb tw3-iconMessageBombColor mr--tight left"></i>
            <p className="ml--default mb--default clearfix">
                Tiếp cận được với hơn 100 phụ nữ trong một lần!
            </p><i className="tw3-iconGiftFilled tw3-iconOrange mr--tight left"></i>
            <p className="ml--default mb--default clearfix">
                Gửi một món quà
            </p><i className="tw3-iconPickme tw3-iconPickmeColor mr--tight left"></i>
            <p className="ml--default mb--default clearfix">
                Hiện 100 lần ở mục Khám phá
            </p><i className="tw3-iconSpotlight tw3-iconSpotlightColor mr--tight left"></i>
            <p className="ml--default mb--default clearfix">
                Xuất hiện trên Tiêu điểm
            </p><i className="tw3-iconFis tw3-iconFisColor mr--tight left"></i>
            <p className="ml--default mb--default clearfix">
                Đưa bạn lên Đầu mục Tìm kiếm
            </p><i className="tw3-iconStickers tw3-iconYellow mr--tight left"></i>
            <p className="ml--default mb--default clearfix">
                Mua thêm các gói Biểu tượng
            </p><i className="tw3-iconHeart tw3-iconBrightGreen mr--tight left"></i>
            <p className="ml--default mb--default clearfix">
                Thích đặc biệt và tăng gấp đôi cơ hội tìm người phù hợp
            </p>
        </div>
    </div>
    <div className="tw3-modal--payments__features__content desktop">
        <div className="text--bold mb--default desktop">Sử dụng Tín dụng của bạn để:</div><i className="tw3-iconBoost tw3-iconBoostColor mr--tight left"></i>
        <p className="ml--default mb--default clearfix">
            Gây Chú ý sơ yếu của bạn
        </p><i className="tw3-iconHighlightFilled tw3-iconOrange mr--tight left"></i>
        <p className="ml--default mb--default clearfix">
            Làm nổi bật tin nhắn của bạn
        </p><i className="tw3-iconMessageBomb tw3-iconMessageBombColor mr--tight left"></i>
        <p className="ml--default mb--default clearfix">
            Tiếp cận được với hơn 100 phụ nữ trong một lần!
        </p><i className="tw3-iconGiftFilled tw3-iconOrange mr--tight left"></i>
        <p className="ml--default mb--default clearfix">
            Gửi một món quà
        </p><i className="tw3-iconPickme tw3-iconPickmeColor mr--tight left"></i>
        <p className="ml--default mb--default clearfix">
            Hiện 100 lần ở mục Khám phá
        </p><i className="tw3-iconSpotlight tw3-iconSpotlightColor mr--tight left"></i>
        <p className="ml--default mb--default clearfix">
            Xuất hiện trên Tiêu điểm
        </p><i className="tw3-iconFis tw3-iconFisColor mr--tight left"></i>
        <p className="ml--default mb--default clearfix">
            Đưa bạn lên Đầu mục Tìm kiếm
        </p><i className="tw3-iconStickers tw3-iconYellow mr--tight left"></i>
        <p className="ml--default mb--default clearfix">
            Mua thêm các gói Biểu tượng
        </p><i className="tw3-iconHeart tw3-iconBrightGreen mr--tight left"></i>
        <p className="ml--default mb--default clearfix">
            Thích đặc biệt và tăng gấp đôi cơ hội tìm người phù hợp
        </p>
    </div>
</div>

               </div>)
    }
}
function mapStateToProps(state){
    return state;
}
const connected = connect(mapStateToProps)(MobileVerifyPage);
export { connected as MobileVerifyPage }