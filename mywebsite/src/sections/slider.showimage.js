import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ReactDom from "react-dom";
import Modal from "react-modal";
import {  RegisterMemberItem } from "../sections";
import Slider from "react-slick";
import { PhotoItem } from "./photo.item";
const customStyles={
    content:{
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)' 
    }
}

class SliderShowImages extends React.Component{
    constructor(props){
        super(props)
        this.state={
            modalIsOpen: false,
        }
        this.openModal=this.openModal.bind(this);
        this.afterOpenModal=this.afterOpenModal.bind(this);
        this.closeModal=this.closeModal.bind(this);
    }
    openModal(){
        this.setState({modalIsOpen: true});   
    }
    afterOpenModal(){
        this.subtitle.style.color= '#f00';
    }
    closeModal(){
        this.setState({modalIsOpen: false});
    }
    
    componentDidMount(){
        //this.props.dispatch(userAction.All());
    }
    render(){
        let settings={
              dots: true,
              infinite: true,
              speed: 500,
              slidesToShow: 6,
              slidesToScroll: 1,
              responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                      className: "center",
                      infinite: true,
                      centerPadding: "60px",
                      slidesToShow: 2,
                      swipeToSlide: true,
                      
                  }
                }
              ]
        }
        return (
            <div>
            <button onClick={this.openModal}>Open Modal</button>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >

              <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
              <button onClick={this.closeModal}>close</button>
              <div>I am a modal</div>
              
            </Modal>
          </div>
        )
    }
}
function mapStateToProps(state){
    return state;
}
const connectedSliderShowImages=connect(mapStateToProps)(SliderShowImages);
export { connectedSliderShowImages as SliderShowImages } 