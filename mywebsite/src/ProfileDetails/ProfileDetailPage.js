import React from "react";
import { Link, Redirect,Router,Route, Switch } from "react-router-dom";
import { history } from "../store";
import { connect } from "react-redux";
import { userActions } from "../actions";
import { Header, HeaderVisible } from "../sections";
import { ViewInfo, IndexDetails } from "./index";
class ProfileDetailPage extends React.Component{
    constructor(props){
        super(props);
        
    }
    

    componentWillUpdate(nextProps){
        const { location } = this.props;
        if(nextProps.history.action !=="POP" && 
           (!location.state || !location.state.modal)    
          ){
            history.location = this.props.location;
        }
    }
    componentDidMount(){
        const { authentication }=this.props;
        if(authentication.loggedIn){
        this.props.dispatch(userActions.getMemberById(this.props.authentication.user.user_id));
        this.props.dispatch(userActions.getImageByUser(this.props.authentication.user.user_id));
        this.props.dispatch(userActions.getMemberDetails(this.props.authentication.user.user_id));
            
        }
        document.getElementsByTagName('html')[0].setAttribute('class', 'flexbox css3 notouch');
        document.body.className='profilev4 ltr vi macintosh chrome mastheadShown';
        
    }
    render(){
        const { authentication }=this.props;
        
        if(!authentication.loggedIn){
           return  <Redirect to={ `/login?return_url=/profile` } />
        }
        
        
        //console.log(this.previousLocation,location);
        //console.log(isModal); 
        
        return (
            <div>
                    <Header />
                    <HeaderVisible />
                    <div className="tw3-content jsProfile">
                        <div className="tw3-container pos--rel">
                            <div className="tw3-row">
                                <ViewInfo />
                                
                                <IndexDetails />
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    const { authentication }=state;
    return { authentication };
}
const connected=connect(mapStateToProps)(ProfileDetailPage);
export { connected as ProfileDetailPage } 