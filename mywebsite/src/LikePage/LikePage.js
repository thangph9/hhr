import React from "react";
import { connect } from "react-redux";
import { LoginPopup,RegisterPopup,Header,AdvancedSearch,RegisterMember,MemberActive, Banner, HeaderVisible } from "../sections";
import { LikeBoxView } from "./index";
class LikePage extends React.Component{
    
    componentDidMount(){
        
        
        
        document.getElementsByTagName('html')[0].setAttribute('class', 'flexbox css3 notouch');
        document.body.className='activity activity--likes ltr vi macintosh chrome mastheadShown';
    }
    componentWillUnmount(){
        document.getElementsByTagName('html')[0].setAttribute('class', 'flexbox css3 notouch');
        document.body.className='profilev4';
    }
    
    render(){
        return (
           <div className="popup-inner"> 
                <HeaderVisible />
                <Header view={this.props.view}/>
                <LikeBoxView />
            </div>
        )
    }
     
}
function mapStateToProps(state){
    const { authentication } = state;
    return {authentication};
}
const connected = connect(mapStateToProps)(LikePage);
export { connected as LikePage}