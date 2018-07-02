import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { HeaderVisible, Header } from "./index";
class PageNotFound extends React.Component{
    componentDidMount(){
        //this.props.dispatch(userAction.All());
    }
    render(){
        
        return (
            <div>
            <HeaderVisible />
            <Header view={this.props.view}/>
            <section className="error_area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div className="error_text">
                                <h6>Error</h6>
                                <h3>404</h3>
                                <h5>Page Not Found</h5>
                                <Link to="/" className="register_angkar_btn" >Go to Home Page</Link>
                                
                            </div>
                            <div className="search_widget">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search Here" />
                                    <span className="input-group-btn">
                                        <button className="btn btn-default" type="button"><i className="fa fa-search" aria-hidden="true"></i></button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </section>
            </div>
        )
    }
}
function mapStateToProps(state){
    return state;
}
const connectedPageNotFound=connect(mapStateToProps)(PageNotFound);
export { connectedPageNotFound as PageNotFound } 