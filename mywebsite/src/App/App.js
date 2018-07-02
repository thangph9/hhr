import React,{ Component } from "react";
import { Router,Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { createBrowserHistory } from 'history';

import { alertActions } from "../actions";
//import { PrivateRoute } from "../components";
import { HomePageGuest,HomePageLogin, HomePage } from "../HomePage";
import { LoginPage } from "../LoginPage";
import { RegisterPage } from "../RegisterPage";
import { ProfilePage } from "../ProfilePage";
import { ProfileDetailPage } from "../ProfileDetails";
import { AdvancedSearchPage } from "../AdvancedSearchPage";
import { ImagePage } from "../ImagePage";
import { PrivateRoute } from "../components";
import { PageNotFound } from "../sections";
import { LikePage } from "../LikePage";


import { history } from "../store";
class App extends Component{
    constructor(props){
        super(props);
        
        const { dispatch }=this.props;
        this.state={
            loading: false,
        }
        history.listen((location,action) => {
           dispatch(alertActions.clear()); 
            
        });
    }
    componentDidMount(){
        this.setState({
            loading: true
        });
        const {authentication} = this.props;
        if(authentication.loggedIn){
            let head=document.head;
            let myNode = document.getElementsByTagName("link");
            //console.log(myNode[0].firstChild);
            for(var i=0 ; i< myNode.length ; i++){
                if(myNode[i].href.indexOf('homepage') > -1 ){
                    myNode[i].parentNode.removeChild(myNode[i]);
                //    console.log(myNode[i]);
                }
            }
           
        }
        //console.log(authentication);
    }
    componentWillMount(){
        
    }
    render(){
        const {loading} = this.state;
        if(loading){
            return (
                <Router history={history}>
                    <div>
                    <Switch history ={ history  }>
                            <PrivateRoute exact path="/" component={HomePageLogin} />
                            <Route exact path="/#login" component={ HomePage } />
                            <Route exact path="/logout" component={ LoginPage } />
                            <Route exact path="/likes" render={(props) => (
                                <LikePage view="likes" />
                              )} />
                            <Route exact path="/register" component={ RegisterPage } />
                            <Route  path="/profile/:uuid" component={ ProfilePage }  >
                            </Route>
                            <Route exact path="/profile" component={ ProfileDetailPage }  >
                            </Route>
                            <Route exact path="/search" render={(props) => (
                                <HomePageLogin {...props} view="search" />
                              )} />
                        <Route component={PageNotFound} />
                    </Switch>

                    </div>
                </Router>
            )
        }else{
            return (<div></div>)
        }
        
    }
}
function mapStateToProps(state){
                
    const {alert,authentication} =state;
    return {alert, authentication};
}
const connectedApp=connect(mapStateToProps)(App);
export default connectedApp;