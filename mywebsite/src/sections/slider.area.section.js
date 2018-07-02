import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Slider } from "react-slick"
class SliderArea extends React.Component{
    componentDidMount(){
        
    }
    render(){
        let style={
            slide:{
               width:"100%",
               position:"relative",
               height:"796px",
            }
        }
        return (
             <div className="slider_inner" style = { style.slide }>
                <div className="rev_slider"  data-version="5.3.0.2" id="home-slider">
                <ul> 
                    <li data-slotamount="7" data-easein="Power4.easeInOut" data-easeout="Power4.easeInOut" data-masterspeed="600" data-rotate="0" data-saveperformance="off">
                            
                    <img src="img/slider-img/slider-1.jpg"  alt=""  data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10" className="rev-slidebg" data-no-retina />
                           
                    </li>
                    <li data-slotamount="7" data-easein="Power4.easeInOut" data-easeout="Power4.easeInOut" data-masterspeed="600" data-rotate="0" data-saveperformance="off">
                            
                    <img src="img/slider-img/slider-2.jpg"  alt=""  data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10" className="rev-slidebg" data-no-retina />
                            
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
const connectedSliderArea=connect(mapStateToProps)(SliderArea);
export { connectedSliderArea as SliderArea } 