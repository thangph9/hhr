import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import RevSlider, { Slide, Caption } from 'react-rev-slider';

class Banner extends React.Component{
    render(){
        const config = {
                delay:9000,
                startwidth:1600,
                startheight:796,
                hideThumbs:10,
                fullWidth:"on",
                forceFullWidth:"on"
            };
        const cfg1={
                'class': "tp-caption first_text" ,
                'data-width':"none",
                'data-height':"none",
                'data-whitespace': "nowrap",
                'data-voffset': "['260']",
                'data-hoffset' : "['40','120','40']",
                'data-x' : "left" ,
                'data-y' : "top",
                'data-fontsize': "['48']", 
                'data-lineheight': "['55']", 
                'data-transform_idle' : "o:1;",
                'data-transform_in' : "y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" ,
                'data-transform_out' : "y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" ,
                'data-mask_in' : "x:0px;y:[100%];s:inherit;e:inherit;" ,
                'data-mask_out' : "x:inherit;y:inherit;s:inherit;e:inherit;" ,
                'data-start' : "800" ,
                'data-splitin' : "none" ,
                'data-splitout' : "none" ,
                'data-responsive_offset': "on"
            }
            const cfg2={

                'class': "tp-caption download_btn",
                'data-whitespace': "nowrap",
                'data-voffset': "['390']",
                'data-hoffset': "['40','120','40']",
                 'data-fontsize': "['48']", 
                'data-fontsize': "['55']", 
                'data-x': "left",
                'data-transform_idle': "o:1;",
                'data-transform_in': "y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" ,
                'data-transform_out': "y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" ,
                'data-mask_in': "x:0px;y:[100%];s:inherit;e:inherit;" ,
                'data-mask_out': "x:inherit;y:inherit;s:inherit;e:inherit;" , 
                'data-y': "top",
                'data-start': "1800"
            }
        return (
                <RevSlider config={config}>
                    <Slide
                        src="/img/aboutBanner.png"
                        alt="slidebg1"
                        data-bgfit="cover"
                        data-bgposition="left top"
                        data-bgrepeat="no-repeat"
                        slideProperties={{
                            'data-transition': "fade",
                            'data-slotamount': "7",
                            'data-masterspeed': "1500"
                        }}
                    >   
                        <Caption {...cfg1}>
                            <p>
                              Bạn muốn hẹn hò?
                            </p>
                        </Caption>

                        <Caption {...cfg2} >
                             <Link className="register_angkar_btn" to="/register">Đăng ký</Link>
                        </Caption>
                    </Slide>
                    <Slide
                        src="/img/main-banner.jpg"
                        alt="slidebg1"
                        data-bgfit="cover"
                        data-bgposition="left top"
                        data-bgrepeat="no-repeat"
                        data-index="rs-1597"
                        data-slotamount="7"
                        data-easein="Power4.easeInOut"
                        data-easeout= "Power4.easeInOut"
                        slideProperties={{

                            'data-transition': "fade",
                            'data-slotamount': "7",
                            'data-masterspeed': "1500",

                        }}
                    >   
                        <Caption {...cfg1}>
                        <p  style={{ color: 'white'}}> 
                           Bạn muốn hẹn hò?
                        </p>
                        </Caption>
                        <Caption {...cfg2}>
                            <Link className="register_angkar_btn" to="/register">Đăng ký</Link>
                        </Caption>
                    </Slide>
                </RevSlider>
        );
    }
}
function mapStateToProps(state){
    return state;
}
const connectedBanner=connect(mapStateToProps)(Banner);
export { connectedBanner as Banner};