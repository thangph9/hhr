import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";

class AdvancedSearchArea extends React.Component{
    componentDidMount(){
        //this.props.dispatch(userAction.All());
    }
    render(){
        
        return (
             <section className="advanced_search_area">
            <div className="container">
                <div className="welcome_white_title">
                    <h3>Search People Here</h3>
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
                    
                    <div className="tab-content">
                        <div role="tabpanel" className="tab-pane fade in active" id="home">
                            <div className="height_item">
                                <h4>Height</h4>
                                <select className="selectpicker">
                                    <option>158 Cm</option>
                                    <option>168 Cm</option>
                                    <option>175 Cm</option>
                                </select>
                                <select className="selectpicker">
                                    <option>192 Cm</option>
                                    <option>198 Cm</option>
                                    <option>200 Cm</option>
                                </select>
                            </div>
                            <div className="height_item">
                                <h4>Body Type</h4>
                                <select className="selectpicker">
                                    <option>Full Figured</option>
                                    <option>Half Figured</option>
                                    <option>Full Figured</option>
                                </select>
                            </div>
                            <div className="height_item">
                                <h5>Attractiveness</h5>
                                <div className="item_average">
                                    <div className="average"></div>
                                    <label for="amount">Average</label>
                                </div>
                                <div className="item_average">
                                    <div className="average"></div>
                                    <label for="amount">Above Avg</label>
                                </div>
                                <div className="item_average">
                                    <div className="average"></div>
                                    <label for="amount">Hot</label>
                                </div>
                            </div>
                            <div className="search_btn">
                                <a href="#link" className="register_angkar_btn">Search</a>
                                <a href="#link" className="white_angkar_btn">Reset</a>
                            </div>
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="profile">
                            <div className="height_item">
                                <h4>Height</h4>
                                <select className="selectpicker">
                                    <option>158 Cm</option>
                                    <option>168 Cm</option>
                                    <option>175 Cm</option>
                                </select>
                                <select className="selectpicker">
                                    <option>192 Cm</option>
                                    <option>198 Cm</option>
                                    <option>200 Cm</option>
                                </select>
                            </div>
                            <div className="height_item">
                                <h4>Body Type</h4>
                                <select className="selectpicker">
                                    <option>Full Figured</option>
                                    <option>Half Figured</option>
                                    <option>Full Figured</option>
                                </select>
                            </div>
                            <div className="height_item">
                                <h5>Attractiveness</h5>
                                <div className="item_average">
                                    <div className="border"><span></span></div>
                                    <h6>Average</h6>
                                </div>
                                <div className="item_average">
                                    <div className="border"><span></span></div>
                                    <h6>Above Avg</h6>
                                </div>
                                <div className="item_average">
                                    <div className="border"><span></span></div>
                                    <h6>Hot</h6>
                                </div>
                            </div>
                            <div className="search_btn">
                                <a href="#link" className="register_angkar_btn">Search</a>
                                <a href="#link" className="white_angkar_btn">Reset</a>
                            </div>
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="messages">
                            <div className="height_item">
                                <h4>Height</h4>
                                <select className="selectpicker">
                                    <option>158 Cm</option>
                                    <option>168 Cm</option>
                                    <option>175 Cm</option>
                                </select>
                                <select className="selectpicker">
                                    <option>192 Cm</option>
                                    <option>198 Cm</option>
                                    <option>200 Cm</option>
                                </select>
                            </div>
                            <div className="height_item">
                                <h4>Body Type</h4>
                                <select className="selectpicker">
                                    <option>Full Figured</option>
                                    <option>Half Figured</option>
                                    <option>Full Figured</option>
                                </select>
                            </div>
                            <div className="height_item">
                                <h5>Attractiveness</h5>
                                <div className="item_average">
                                    <div className="border"><span></span></div>
                                    <h6>Average</h6>
                                </div>
                                <div className="item_average">
                                    <div className="border"><span></span></div>
                                    <h6>Above Avg</h6>
                                </div>
                                <div className="item_average">
                                    <div className="border"><span></span></div>
                                    <h6>Hot</h6>
                                </div>
                            </div>
                            <div className="search_btn">
                                <a href="#link" className="register_angkar_btn">Search</a>
                                <a href="#link" className="white_angkar_btn">Reset</a>
                            </div>
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="settings">
                            <div className="height_item">
                                <h4>Height</h4>
                                <select className="selectpicker">
                                    <option>158 Cm</option>
                                    <option>168 Cm</option>
                                    <option>175 Cm</option>
                                </select>
                                <select className="selectpicker">
                                    <option>192 Cm</option>
                                    <option>198 Cm</option>
                                    <option>200 Cm</option>
                                </select>
                            </div>
                            <div className="height_item">
                                <h4>Body Type</h4>
                                <select className="selectpicker">
                                    <option>Full Figured</option>
                                    <option>Half Figured</option>
                                    <option>Full Figured</option>
                                </select>
                            </div>
                            <div className="height_item">
                                <h5>Attractiveness</h5>
                                <div className="item_average">
                                    <div className="border"><span></span></div>
                                    <h6>Average</h6>
                                </div>
                                <div className="item_average">
                                    <div className="border"><span></span></div>
                                    <h6>Above Avg</h6>
                                </div>
                                <div className="item_average">
                                    <div className="border"><span></span></div>
                                    <h6>Hot</h6>
                                </div>
                            </div>
                            <div className="search_btn">
                                <a href="#link" className="register_angkar_btn">Search</a>
                                <a href="#link" className="white_angkar_btn">Reset</a>
                            </div>
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="vices">
                            <div className="height_item">
                                <h4>Height</h4>
                                <select className="selectpicker">
                                    <option>158 Cm</option>
                                    <option>168 Cm</option>
                                    <option>175 Cm</option>
                                </select>
                                <select className="selectpicker">
                                    <option>192 Cm</option>
                                    <option>198 Cm</option>
                                    <option>200 Cm</option>
                                </select>
                            </div>
                            <div className="height_item">
                                <h4>Body Type</h4>
                                <select className="selectpicker">
                                    <option>Full Figured</option>
                                    <option>Half Figured</option>
                                    <option>Full Figured</option>
                                </select>
                            </div>
                            <div className="height_item">
                                <h5>Attractiveness</h5>
                                <div className="item_average">
                                    <div className="border"><span></span></div>
                                    <h6>Average</h6>
                                </div>
                                <div className="item_average">
                                    <div className="border"><span></span></div>
                                    <h6>Above Avg</h6>
                                </div>
                                <div className="item_average">
                                    <div className="border"><span></span></div>
                                    <h6>Hot</h6>
                                </div>
                            </div>
                            <div className="search_btn">
                                <a href="#link" className="register_angkar_btn">Search</a>
                                <a href="#link" className="white_angkar_btn">Reset</a>
                            </div>
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="ques">
                            <div className="height_item">
                                <h4>Height</h4>
                                <select className="selectpicker">
                                    <option>158 Cm</option>
                                    <option>168 Cm</option>
                                    <option>175 Cm</option>
                                </select>
                                <select className="selectpicker">
                                    <option>192 Cm</option>
                                    <option>198 Cm</option>
                                    <option>200 Cm</option>
                                </select>
                            </div>
                            <div className="height_item">
                                <h4>Body Type</h4>
                                <select className="selectpicker">
                                    <option>Full Figured</option>
                                    <option>Half Figured</option>
                                    <option>Full Figured</option>
                                </select>
                            </div>
                            <div className="height_item">
                                <h5>Attractiveness</h5>
                                <div className="item_average">
                                    <div className="border"><span></span></div>
                                    <h6>Average</h6>
                                </div>
                                <div className="item_average">
                                    <div className="border"><span></span></div>
                                    <h6>Above Avg</h6>
                                </div>
                                <div className="item_average">
                                    <div className="border"><span></span></div>
                                    <h6>Hot</h6>
                                </div>
                            </div>
                            <div className="search_btn">
                                <a href="#link" className="register_angkar_btn">Search</a>
                                <a href="#link" className="white_angkar_btn">Reset</a>
                            </div>
                        </div>
                        <div role="tabpanel" className="tab-pane fade" id="more">
                            <div className="height_item">
                                <h4>Height</h4>
                                <select className="selectpicker">
                                    <option>158 Cm</option>
                                    <option>168 Cm</option>
                                    <option>175 Cm</option>
                                </select>
                                <select className="selectpicker">
                                    <option>192 Cm</option>
                                    <option>198 Cm</option>
                                    <option>200 Cm</option>
                                </select>
                            </div>
                            <div className="height_item">
                                <h4>Body Type</h4>
                                <select className="selectpicker">
                                    <option>Full Figured</option>
                                    <option>Half Figured</option>
                                    <option>Full Figured</option>
                                </select>
                            </div>
                            <div className="height_item">
                                <h5>Attractiveness</h5>
                                <div className="item_average">
                                    <div className="border"><span></span></div>
                                    <h6>Average</h6>
                                </div>
                                <div className="item_average">
                                    <div className="border"><span></span></div>
                                    <h6>Above Avg</h6>
                                </div>
                                <div className="item_average">
                                    <div className="border"><span></span></div>
                                    <h6>Hot</h6>
                                </div>
                            </div>
                            <div className="search_btn">
                                <a href="#link" className="register_angkar_btn">Search</a>
                                <a href="#link" className="white_angkar_btn">Reset</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        )
    }
}
function mapStateToProps(state){
    return state;
}
const connectedAdvancedSearchArea=connect(mapStateToProps)(AdvancedSearchArea);
export { connectedAdvancedSearchArea as AdvancedSearchArea } 