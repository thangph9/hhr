import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import RevSlider, { Slide, Caption } from 'react-rev-slider';

class BannerV1 extends React.Component{
    
    render(){
        const config = {
                delay:9000,
                startwidth:1600,
                startheight:796,
                hideThumbs:10,
                fullWidth:"on",
                forceFullWidth:"on"
        };
        return(
             
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
                </Slide>
            </RevSlider>
        )
    }
    
}
function mapStateToProps(state){
    return state;
}
const connectedBannerV1=connect(mapStateToProps)(BannerV1);
export { connectedBannerV1 as BannerV1 }