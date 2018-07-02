import React from "react";
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { AdvancedSearchFormSection } from "./AdvancedSearchFormSection";
import { AdvancedSearchResults } from "./AdvancedSearchResults.js";
import { SliderShowImages, RegisterMemberItem } from "../sections";

class AdvancedSearchPage extends React.Component{ 
    constructor(props){
        super(props);
        this.state={
            pictures: [] 
        }
        this.onDrop=this.onDrop.bind(this);
        
    }
    onDrop(picture){
        this.setState({
           pictures: this.state.pictures.concat(picture)
        });
    }
    render(){
        return (
            <div>
            <section className="advanced_search_area">
            <div className="container" style={{position: 'relative'}}>
                <div className="welcome_white_title">
                    <h3>Tìm kiếm thông tin thành viên</h3>
                    <img src="img/w-title-b.png" alt="" />
                </div>
                <div className="search_option">
                    
                    <ul className="nav nav-tabs" role="tablist">
                        <li role="presentation" className="active"><a href="#linkhome" aria-controls="home" role="tab" data-toggle="tab">Looks</a></li>
                        <li role="presentation"><a href="#linkprofile" aria-controls="profile" role="tab" data-toggle="tab">Background</a></li>
                        <li role="presentation"><a href="#linkmessages" aria-controls="messages" role="tab" data-toggle="tab">Availability</a></li>
                        <li role="presentation"><a href="#linksettings" aria-controls="settings" role="tab" data-toggle="tab">Personality</a></li>
                        <li role="presentation"><a href="#linkvices" aria-controls="vices" role="tab" data-toggle="tab">Vices</a></li>
                        <li role="presentation"><a href="#linkques" aria-controls="ques" role="tab" data-toggle="tab">Questions</a></li>
                        <li role="presentation"><a href="#linkmore" aria-controls="more" role="tab" data-toggle="tab">More</a></li>
                    </ul>
                    
                </div>
                <AdvancedSearchFormSection ownState={this.props.location.state} />
            </div>
            </section>
            <AdvancedSearchResults />
            </div>
        )
    }
}
function mapStateToProps(state){
    return state;
}
const connectedAdvancedSearchPage = connect(mapStateToProps)(AdvancedSearchPage);
export {connectedAdvancedSearchPage as AdvancedSearchPage};


