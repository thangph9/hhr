import React from "react";
import Slider from "react-slick";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { RegisterMemberItem } from "./register.member.item";
import { userActions } from "../actions";
class RegisterMember extends React.Component{
    componentDidMount(){
        this.props.dispatch(userActions.getMemberRegister());
    }
    render(){
        const { users } =this.props;
        
        const data=(users.items) ? 
            users.items
            :
            [];
        
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
            <section className="register_members_slider">
                <div className="container">
                    <div className="welcome_title">
                        <h3>Thành viên mới đăng ký</h3>
                        <img src="img/w-title-b.png" alt="" />
                    </div>
                    <div className="r_members_inner">
             { data.length > 1 &&
                        <Slider {...settings} >
            {data.map( (item,index) => { return ( <RegisterMemberItem data={item} key={index}  />)  }) }
                        </Slider> 
             }    
            
            
                         
                    </div>
                </div>
            </section>
        )
        
    }
}
function mapStateToProps(state){
    const { authentication,users } = state;
    return { authentication, users };
}
const connectedRegisterMember=connect(mapStateToProps)(RegisterMember);
export { connectedRegisterMember as RegisterMember } 