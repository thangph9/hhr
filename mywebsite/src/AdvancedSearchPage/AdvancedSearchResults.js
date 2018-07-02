import React from "react";
import { connect } from "react-redux";
import { RegisterMemberItem } from "../sections";
import  Slider   from "react-slick";
class AdvancedSearchResults extends React.Component{
    render()
    {
        const { users } =this.props;
        
        const data=(users.items) ? 
            users.items.users
            :
            [];
         let settings={
              dots: true,
              infinite: true,
              speed: 500,
              slidesToShow: 6,
              slidesToScroll: 2,
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
                        <h3>Kết quả tìm kiếm</h3>
                        <img src="img/w-title-b.png" alt="" />
                    </div>
                    <div className="r_members_inner">
             {data && data.length > 0 &&
                    <div>
                    <span className='text-success' style={ { paddingBottom:"15px",display:'block'  } } ><i> Tìm thấy {data.length} kết quả phù hợp </i></span>
                    <Slider {...settings}>
                    {data.map( (item,index) => { return ( <RegisterMemberItem data={item} key={index}  />)  }) }
                    </Slider>
                    </div>
             }    
                                                         
            
            
                         
                    </div>
                </div>
            </section>
        )
    }
}
function mapStateToProps(state){
    const { users } = state;
    return { users };
}
const connectedAdvancedSearchResults=connect(mapStateToProps)(AdvancedSearchResults);
export { connectedAdvancedSearchResults as AdvancedSearchResults }