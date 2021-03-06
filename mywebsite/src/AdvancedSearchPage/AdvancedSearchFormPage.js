import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Select from "react-select";

class AdvancedSearchFormPage extends React.Component{
    constructor(props){
        super(props)
        console.log(this.props);
    }
    render(){
        return(
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
                
        )
    }
}
function mapStateToProps(state){
        return state;
}
const connectedAdvancedSearchForm=connect(mapStateToProps)(AdvancedSearchFormPage);
export { connectedAdvancedSearchForm as AdvancedSearchFormPage };
    