import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";

class SliderInner extends React.Component{
    componentDidMount(){
        //this.props.dispatch(userAction.All());
    }
    render(){
        return (
             <div className="slider_inner">
                <div className="rev_slider fullwidthabanner"  data-version="5.3.0.2" id="home-slider2">
                    <ul> 
                        <li data-slotamount="7" data-easein="Power4.easeInOut" data-easeout="Power4.easeInOut" data-masterspeed="600" data-rotate="0" data-saveperformance="off">
                            
                            <img src="img/slider-img/slider-2.jpg"  alt=""  data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10" className="rev-slidebg" data-no-retina />
                            
                            <div className="tp-caption first_text" 
                                data-width="none"
                                data-height="none"
                                data-whitespace="nowrap"
                                data-voffset="['260']"
                                data-hoffset="['40','120','40']"
                                data-x="left" 
                                data-y="top"
                                data-fontsize="['48']" 
                                data-lineheight="['55']" 
                                data-transform_idle="o:1;"
                                data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" 
                                data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" 
                                data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;" 
                                data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" 
                                data-start="800" 
                                data-splitin="none" 
                                data-splitout="none" 
                                data-responsive_offset="on">Are You <span>Waiting</span> <br /> For <span>Dating ?</span>
                            </div>
                            <div className="tp-caption download_btn"
                                data-whitespace="nowrap"
                                data-voffset="['390']"
                                data-hoffset="['40','120','40']"
                                data-x="left"
                                data-transform_idle="o:1;"
                                data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" 
                                data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" 
                                data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;" 
                                data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"  
                                data-y="top"
                                data-start="1800" >
                                <a className="register_angkar_btn" href="#a">Registration</a>
                            </div>
                        </li>
                        <li data-index="rs-1597" data-slotamount="7" data-easein="Power4.easeInOut" data-easeout="Power4.easeInOut" data-masterspeed="600" data-rotate="0" data-saveperformance="off">
                            
                            <img src="img/slider-img/slider-1.jpg"  alt=""  data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10" className="rev-slidebg" data-no-retina />
                            
                            <div className="tp-caption first_text" 
                                data-width="none"
                                data-height="none"
                                data-whitespace="nowrap"
                                data-voffset="['260']"
                                data-hoffset="['40','120','40']"
                                data-x="left" 
                                data-y="top"
                                data-fontsize="['48']" 
                                data-lineheight="['55']" 
                                data-transform_idle="o:1;"
                                data-frames='[{"from":"x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":500,"ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"to":"x:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power3.easeInOut"}]'
                                data-textAlign="['left','left','left','left']"
                                data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]"
                                data-paddingbottom="[0,0,0,0]"
                                data-paddingleft="[0,0,0,0]"
                                data-start="800" 
                                data-splitin="none" 
                                data-splitout="none" 
                                data-responsive_offset="on">Are You <span>Waiting</span> <br /> For <span>Dating ?</span>
                            </div>
                            <div className="tp-caption download_btn"
                                data-whitespace="nowrap"
                                data-voffset="['390']"
                                data-hoffset="['40','120','40']"
                                data-x="left"
                                data-transform_idle="o:1;"
                                data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" 
                                data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" 
                                data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;" 
                                data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"  
                                data-y="top"
                                data-start="1800" >
                                <a className="register_angkar_btn" href="#a">Registration</a>
                            </div>
                        </li>
                    </ul> 
                </div>
            </div>
        
        )
    }
}
function mapStateToProps(state){
    return state;
}
const connectedSliderInner=connect(mapStateToProps)(SliderInner);
export { connectedSliderInner as SliderInner } 