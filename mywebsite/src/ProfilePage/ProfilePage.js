import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import LoadingBar from 'react-redux-loading-bar';
import { Header, HeaderVisible } from "../sections";
import { userActions } from "../actions";
import { ViewImages,QuestionCatalog,ViewProfile,ViewProfileDetail  } from "./index";
import { PageNotFound } from "../sections";

class ProfilePage extends React.Component{
    constructor(props){
        super(props);
            

    }
    componentDidMount(){
        //this.props.dispatch(userAction.All());
        const { authentication } = this.props;
        var user_id=authentication.loggedIn ? authentication.user.user_id : '';
        this.props.dispatch(userActions.getMemberById(this.props.match.params.uuid));
        this.props.dispatch(userActions.getImageByMember(this.props.match.params.uuid));
        this.props.dispatch(userActions.getUserById(authentication.user.user_id));
        this.props.dispatch(userActions.likeByUser(user_id,this.props.match.params.uuid));
        this.props.dispatch(userActions.getMemberDetails(user_id,this.props.match.params.uuid));
        
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    render(){
        const { users,like,authentication } = this.props;
        if(!authentication.loggedIn){
            return <Redirect to={"/login?return_url=/profile/"+this.props.match.params.uuid} />
        }
        
        if(users.item && users.item.status && users.item.user.length == 0){   
            return (
                <div>
                    <header><LoadingBar /></header>
                    <Header />
                    <HeaderVisible />
                    <PageNotFound />
                </div>
                
            );
        } else if(users.item && users.item.user && users.item.user.length > 0){
            return (
                <div>
                <header><LoadingBar /></header>

                <Header />
                <HeaderVisible />
                <div className="tw3-wrapper">
                <div className="tw3-content jsProfile">
                    <div className="tw3-container pos--rel">
                        <div className="tw3-row">
                            <ViewProfile />
                            <div className="tw3-col-12 tw3-bp3-col-7 jsHideOnInterestitial">
                                <div className="tw3-profile__body mb--tight">
                                    <div className="jsView" style={{display: 'block'}}>
                                        <ViewImages />
                                        <QuestionCatalog />
                                        <hr className="tw3-hr" />
                                        <ViewProfileDetail />
                                        <hr className="tw3-hr" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            )
        }else{
            return(
                <div>
                    <header><LoadingBar /></header>
                    <Header />
                    <HeaderVisible />
                </div>
            )
        }
        
    }
}
function mapStateToProps(state){
    const { authentication, users }=state;
    return { authentication, users };
}
const connectedProfilePage=connect(mapStateToProps)(ProfilePage);
export { connectedProfilePage as ProfilePage } 