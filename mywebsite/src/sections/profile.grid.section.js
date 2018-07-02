import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { PhotoList } from "./photo.list";
import { userActions } from "../actions";

class ProfileGrid extends React.Component{
    
    componentDidMount(){
       // this.props.dispatch(userActions.getImageByUser(this.props.data.user_id));
        //console.log(this.props);
    }
    render(){
        const { users }= this.props;
        var user=(users.item && users.item.user ) ? users.item.user[0] : [] ;
        return (
             <section className="blog_grid_area">
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="members_profile_inners">
                            <ul className="nav nav-tabs profile_menu" role="tablist">
                                <li role="presentation"><a href="#activity" aria-controls="activity" role="tab" data-toggle="tab">Activity</a></li>
                                <li role="presentation" className="active"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Profile</a></li>
                                <li role="presentation"><a href="#sites" aria-controls="sites" role="tab" data-toggle="tab">Sites</a></li>
                                <li role="presentation"><a href="#friend" aria-controls="friend" role="tab" data-toggle="tab">Friend (260)</a></li>
                                <li role="presentation"><a href="#group" aria-controls="group" role="tab" data-toggle="tab">Groups (3)</a></li>
                                <li role="presentation"><a href="#forums" aria-controls="forums" role="tab" data-toggle="tab">Forums</a></li>
                            </ul>
                            <div className="tab-content">
                                <div role="tabpanel" className="tab-pane fade" id="activity">
                                    <div className="profile_list">
                                        <ul>
                                            <li><a href="#link">Giới tính</a></li>
                                            <li><a href="#link">Tuổi</a></li>
                                            <li><a href="#link">Quốc tịch</a></li>
                                            <li><a href="#link">Nơi ở</a></li>
                                            <li><a href="#link">Ngày sinh</a></li>
                                            <li><a href="#link">Tình trạng hôn nhân</a></li>
                                            <li><a href="#link">Muốn tìm</a></li>
                                            <li><a href="#link">Công việc</a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="#link">Female</a></li>
                                            <li><a href="#link">26 years old</a></li>
                                            <li><a href="#link">France</a></li>
                                            <li><a href="#link">Paris</a></li>
                                            <li><a href="#link">16 December 1990</a></li>
                                            <li><a href="#link">Single</a></li>
                                            <li><a href="#link">Man</a></li>
                                            <li><a href="#link">Designer</a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="#link">Trình độ</a></li>
                                            <li><a href="#link">Ngôn ngữ</a></li>
                                            <li><a href="#link">Sở thích</a></li>
                                            <li><a href="#link">Hút thuốc</a></li> 
                                            <li><a href="#link">Chiều cao</a></li>
                                            <li><a href="#link">Cân nặng</a></li>
                                            <li><a href="#link">Mắt</a></li>
                                            <li><a href="#link">Tóc</a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="#link">Graduate Degree</a></li>
                                            <li><a href="#link">French, Russian</a></li>
                                            <li><a href="#link">Billiards</a></li>
                                            <li><a href="#link">No</a></li>
                                            <li><a href="#link">Brown</a></li>
                                            <li><a href="#link">Single</a></li>
                                            <li><a href="#link">Man</a></li>
                                            <li><a href="#link">Designer </a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div role="tabpanel" className="tab-pane active fade in" id="profile">
                                    <div className="profile_list">
                                        <ul>
                                            <li><a href="#link">Gender</a></li>
                                            <li><a href="#link">Age</a></li>
                                            <li><a href="#link">Country</a></li>
                                            <li><a href="#link">City</a></li>
                                            <li><a href="#link">Birthday</a></li>
                                            <li><a href="#link">Relationship</a></li>
                                            <li><a href="#link">Looking for a</a></li>
                                            <li><a href="#link">Work as</a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="#link">Female</a></li>
                                            <li><a href="#link">26 years old</a></li>
                                            <li><a href="#link">France</a></li>
                                            <li><a href="#link">Paris</a></li>
                                            <li><a href="#link">16 December 1990</a></li>
                                            <li><a href="#link">Single</a></li>
                                            <li><a href="#link">Man</a></li>
                                            <li><a href="#link">Designer</a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="#link">Education</a></li>
                                            <li><a href="#link">Know</a></li>
                                            <li><a href="#link">Interests</a></li>
                                            <li><a href="#link">Smoking</a></li>
                                            <li><a href="#link">Eye Color</a></li>
                                            <li><a href="#link">Marital Status</a></li>
                                            <li><a href="#link">Looking for a</a></li>
                                            <li><a href="#link">Work as</a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="#link">Graduate Degree</a></li>
                                            <li><a href="#link">French, Russian</a></li>
                                            <li><a href="#link">Billiards</a></li>
                                            <li><a href="#link">No</a></li>
                                            <li><a href="#link">Brown</a></li>
                                            <li><a href="#link">Single</a></li>
                                            <li><a href="#link">Man</a></li>
                                            <li><a href="#link">Designer </a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div role="tabpanel" className="tab-pane fade" id="sites">
                                    <div className="profile_list">
                                        <ul>
                                            <li><a href="#link">Gender</a></li>
                                            <li><a href="#link">Age</a></li>
                                            <li><a href="#link">Country</a></li>
                                            <li><a href="#link">City</a></li>
                                            <li><a href="#link">Birthday</a></li>
                                            <li><a href="#link">Relationship</a></li>
                                            <li><a href="#link">Looking for a</a></li>
                                            <li><a href="#link">Work as</a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="#link">Female</a></li>
                                            <li><a href="#link">26 years old</a></li>
                                            <li><a href="#link">France</a></li>
                                            <li><a href="#link">Paris</a></li>
                                            <li><a href="#link">16 December 1990</a></li>
                                            <li><a href="#link">Single</a></li>
                                            <li><a href="#link">Man</a></li>
                                            <li><a href="#link">Designer</a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="#link">Education</a></li>
                                            <li><a href="#link">Know</a></li>
                                            <li><a href="#link">Interests</a></li>
                                            <li><a href="#link">Smoking</a></li>
                                            <li><a href="#link">Eye Color</a></li>
                                            <li><a href="#link">Marital Status</a></li>
                                            <li><a href="#link">Looking for a</a></li>
                                            <li><a href="#link">Work as</a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="#link">Graduate Degree</a></li>
                                            <li><a href="#link">French, Russian</a></li>
                                            <li><a href="#link">Billiards</a></li>
                                            <li><a href="#link">No</a></li>
                                            <li><a href="#link">Brown</a></li>
                                            <li><a href="#link">Single</a></li>
                                            <li><a href="#link">Man</a></li>
                                            <li><a href="#link">Designer </a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div role="tabpanel" className="tab-pane fade" id="friend">
                                    <div className="profile_list">
                                        <ul>
                                            <li><a href="#link">Gender</a></li>
                                            <li><a href="#link">Age</a></li>
                                            <li><a href="#link">Country</a></li>
                                            <li><a href="#link">City</a></li>
                                            <li><a href="#link">Birthday</a></li>
                                            <li><a href="#link">Relationship</a></li>
                                            <li><a href="#link">Looking for a</a></li>
                                            <li><a href="#link">Work as</a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="#link">Female</a></li>
                                            <li><a href="#link">26 years old</a></li>
                                            <li><a href="#link">France</a></li>
                                            <li><a href="#link">Paris</a></li>
                                            <li><a href="#link">16 December 1990</a></li>
                                            <li><a href="#link">Single</a></li>
                                            <li><a href="#link">Man</a></li>
                                            <li><a href="#link">Designer</a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="#link">Education</a></li>
                                            <li><a href="#link">Know</a></li>
                                            <li><a href="#link">Interests</a></li>
                                            <li><a href="#link">Smoking</a></li>
                                            <li><a href="#link">Eye Color</a></li>
                                            <li><a href="#link">Marital Status</a></li>
                                            <li><a href="#link">Looking for a</a></li>
                                            <li><a href="#link">Work as</a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="#link">Graduate Degree</a></li>
                                            <li><a href="#link">French, Russian</a></li>
                                            <li><a href="#link">Billiards</a></li>
                                            <li><a href="#link">No</a></li>
                                            <li><a href="#link">Brown</a></li>
                                            <li><a href="#link">Single</a></li>
                                            <li><a href="#link">Man</a></li>
                                            <li><a href="#link">Designer </a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div role="tabpanel" className="tab-pane fade" id="group">
                                    <div className="profile_list">
                                        <ul>
                                            <li><a href="#link">Gender</a></li>
                                            <li><a href="#link">Age</a></li>
                                            <li><a href="#link">Country</a></li>
                                            <li><a href="#link">City</a></li>
                                            <li><a href="#link">Birthday</a></li>
                                            <li><a href="#link">Relationship</a></li>
                                            <li><a href="#link">Looking for a</a></li>
                                            <li><a href="#link">Work as</a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="#link">Female</a></li>
                                            <li><a href="#link">26 years old</a></li>
                                            <li><a href="#link">France</a></li>
                                            <li><a href="#link">Paris</a></li>
                                            <li><a href="#link">16 December 1990</a></li>
                                            <li><a href="#link">Single</a></li>
                                            <li><a href="#link">Man</a></li>
                                            <li><a href="#link">Designer</a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="#link">Education</a></li>
                                            <li><a href="#link">Know</a></li>
                                            <li><a href="#link">Interests</a></li>
                                            <li><a href="#link">Smoking</a></li>
                                            <li><a href="#link">Eye Color</a></li>
                                            <li><a href="#link">Marital Status</a></li>
                                            <li><a href="#link">Looking for a</a></li>
                                            <li><a href="#link">Work as</a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="#link">Graduate Degree</a></li>
                                            <li><a href="#link">French, Russian</a></li>
                                            <li><a href="#link">Billiards</a></li>
                                            <li><a href="#link">No</a></li>
                                            <li><a href="#link">Brown</a></li>
                                            <li><a href="#link">Single</a></li>
                                            <li><a href="#link">Man</a></li>
                                            <li><a href="#link">Designer </a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div role="tabpanel" className="tab-pane fade" id="forums">
                                    <div className="profile_list">
                                        <ul>
                                            <li><a href="#link">Gender</a></li>
                                            <li><a href="#link">Age</a></li>
                                            <li><a href="#link">Country</a></li>
                                            <li><a href="#link">City</a></li>
                                            <li><a href="#link">Birthday</a></li>
                                            <li><a href="#link">Relationship</a></li>
                                            <li><a href="#link">Looking for a</a></li>
                                            <li><a href="#link">Work as</a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="#link">Female</a></li>
                                            <li><a href="#link">26 years old</a></li>
                                            <li><a href="#link">France</a></li>
                                            <li><a href="#link">Paris</a></li>
                                            <li><a href="#link">16 December 1990</a></li>
                                            <li><a href="#link">Single</a></li>
                                            <li><a href="#link">Man</a></li>
                                            <li><a href="#link">Designer</a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="#link">Education</a></li>
                                            <li><a href="#link">Know</a></li>
                                            <li><a href="#link">Interests</a></li>
                                            <li><a href="#link">Smoking</a></li>
                                            <li><a href="#link">Eye Color</a></li>
                                            <li><a href="#link">Marital Status</a></li>
                                            <li><a href="#link">Looking for a</a></li>
                                            <li><a href="#link">Work as</a></li>
                                        </ul>
                                        <ul>
                                            <li><a href="#link">Graduate Degree</a></li>
                                            <li><a href="#link">French, Russian</a></li>
                                            <li><a href="#link">Billiards</a></li>
                                            <li><a href="#link">No</a></li>
                                            <li><a href="#link">Brown</a></li>
                                            <li><a href="#link">Single</a></li>
                                            <li><a href="#link">Man</a></li>
                                            <li><a href="#link">Designer </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="members_about_box">
                                <h4>About me</h4>
                                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know extremely painful.</p>
                            </div>
                            <div className="members_about_box">
                                <h4>Looking For</h4>
                                <h5>Man, 27 years and older</h5>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="right_sidebar_area">
                            <PhotoList />
                            <aside className="s_widget recent_post_widget">
                                <div className="s_title">
                                    <h4>Recent Post</h4>
                                    <img src="/img/widget-title-border.png" alt="" />
                                </div>
                                <div className="media">
                                    <div className="media-left">
                                        <img src="/img/blog/recent-post/recent-post-1.jpg" alt="" />
                                    </div>
                                    <div className="media-body">
                                        <h4>Blog Image Post</h4>
                                        <a href="#link">14 Sep, 2016 at 08:00 Pm</a>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="media-left">
                                        <img src="/img/blog/recent-post/recent-post-2.jpg" alt="" />
                                    </div>
                                    <div className="media-body">
                                        <h4>Blog Standard Post</h4>
                                        <a href="#link">14 Sep, 2016 at 08:00 Pm</a>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="media-left">
                                        <img src="/img/blog/recent-post/recent-post-3.jpg" alt="" />
                                    </div>
                                    <div className="media-body">
                                        <h4>Blog Image Post</h4>
                                        <a href="#link">14 Sep, 2016 at 08:00 Pm</a>
                                    </div>
                                </div>
                            </aside>
                            <aside className="s_widget social_widget">
                                <div className="s_title">
                                    <h4>Tags</h4>
                                    <img src="/img/widget-title-border.png" alt=""/>
                                </div>
                                <ul>
                                    <li><a href="#link"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#link"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#link"><i className="fa fa-pinterest"></i></a></li>
                                    <li><a href="#link"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="#link"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="#link"><i className="fa fa-vimeo"></i></a></li>
                                    <li><a href="#link"><i className="fa fa-youtube-play"></i></a></li>
                                </ul>
                            </aside>
                        </div>
                    </div>
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
const connectedProfileGrid=connect(mapStateToProps)(ProfileGrid);
export { connectedProfileGrid as ProfileGrid } 