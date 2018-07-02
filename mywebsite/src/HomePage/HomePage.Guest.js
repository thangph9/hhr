import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { LoginPopup,RegisterPopup,Header,MemberActive,RegisterForm,Banner,AdvancedSearch } from "../sections";
import { AdvancedSearchFormSection } from "../AdvancedSearchPage";
class HomePageGuest extends React.Component{
    componentDidMount(){
        //this.props.dispatch(userAction.All());
    }
    render(){
        return (
            <div className="popup-inner">
                <Banner />
                <AdvancedSearch />
                <MemberActive />
            </div>
        )
    }
}
function mapStateToProps(state){
    return state;
}
const connectedHomePageGuest=connect(mapStateToProps)(HomePageGuest);
export { connectedHomePageGuest as HomePageGuest } 