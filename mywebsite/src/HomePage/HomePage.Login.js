import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { BoxViewMember } from "./BoxViewMember";
import { userActions, modalActions } from "../actions";
import LoadingBar from 'react-redux-loading-bar';
import { LoginPopup,RegisterPopup,Header,AdvancedSearch,RegisterMember,MemberActive, Banner, HeaderVisible } from "../sections";

class HomePageLogin extends React.Component{
    constructor(props){
        super(props);
        var p=1;
        try{
          p=  Number(this.getUrlParameter('page')) > 0 ? Number(this.getUrlParameter('page')) : 1 ;
        }catch(e){
            
        }
        var _page=(this.props.location.search) ? p : 1 ;
        this.state={
            page: _page,
        }
    }
    componentDidMount(){
        //this.props.dispatch(userAction.All());
        
        const { authentication } = this.props;
        var userid="";
        if(authentication.loggedIn){
            //console.log(this.props);
            userid=authentication.user.user_id;
            this.props.dispatch(userActions.getMemberActive(this.state.page,userid));
            this.props.dispatch(userActions.getMemberActive(this.state.page,userid));
            this.props.dispatch(userActions.getMemberById(userid));
            //console.log(authentication);
        }
        this.props.dispatch(modalActions.closeModal());
        
        document.getElementsByTagName('html')[0].setAttribute('class', 'flexbox css3 notouch');
        document.body.className='search ltr vi macintosh chrome mastheadShown';
    }
    componentWillUnmount(){
        document.getElementsByTagName('html')[0].setAttribute('class', 'flexbox css3 notouch');
        document.body.className='profilev4';
    }
    getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(this.props.location.search);
        //console.log(results);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };
    render(){
        const {authentication} = this.props;
        //console.log(authentication);
       const { page } =this.state;
        return (
            <div className="popup-inner">
                <header>
                    <LoadingBar />
                </header> 
                <HeaderVisible />
                <Header view={this.props.view}/>
                <BoxViewMember page={page} />
            </div>
        )
    }
}
function mapStateToProps(state){
    
    const { authentication } = state;
    return { authentication };
}
const connectedHomePageLogin=connect(mapStateToProps)(HomePageLogin);
export { connectedHomePageLogin as HomePageLogin } 