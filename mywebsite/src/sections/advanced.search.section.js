import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Select from 'react-select';
import { history } from '../store';
import { userActions } from "../actions";
class AdvancedSearch extends React.Component{
    constructor(props){
        super(props);
        var a=[];
        for(var i=18; i<=65 ; i++){
            var itm={label:i,value:i};
            a.push(itm);
        }
        this.state={
            formSearch:{
                gender: { value: 1,label:'Nam' },
                seeking: { value: 2,label:'Nữ' },
                ageFrom: { value: 18,label:'18' },
                ageTo: { value: 20,label:'20' }
            },
            age: a,
        }
        
        this.handleChangeGender=this.handleChangeGender.bind(this);
        this.handleChangeSeeking=this.handleChangeSeeking.bind(this);
        this.handleChangeAgeFrom=this.handleChangeAgeFrom.bind(this);
        this.handleChangeAgeTo=this.handleChangeAgeTo.bind(this);
        
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChangeGender(e){
        const { formSearch } = this.state;
        if(e!=null){
            this.setState({ formSearch: {...formSearch, gender: e }});
        }
    }
    handleChangeSeeking(e){
        const { formSearch } = this.state;
        if(e!=null){
            this.setState({ formSearch: {...formSearch, seeking: e }});
        }
        
    }
    handleChangeAgeFrom(e){
        const { formSearch } = this.state;
        if(e!=null){
            this.setState({ formSearch:{...formSearch,ageFrom: e }});
        }
    }
    handleChangeAgeTo(e){
        const { formSearch } = this.state;
        if(e!=null){
            this.setState({ formSearch:{...formSearch,ageTo: e }});
        }
    }
    handleSubmit(e){
        
        e.preventDefault();
        const { formSearch }= this.state;
        history.push({
            pathname: "/search",
            state:formSearch,
        })
    }
    componentDidMount(){
    }
    render(){
        const { formSearch,age} =this.state;
        return (
             <div className="advanced_search" style={{'zIndex': '99'}}>
                <div className="container">
                    <div className="search_inner">
                    <div className="row">
                    <form name="search-inner" onSubmit={ this.handleSubmit }>    
                        <div className="col-md-2 search_item">
                            <h5>Bạn là</h5>
                            <Select className="selectpicker"
                            name="gender" value={ formSearch.gender } onChange=
                            {this.handleChangeGender}
                            options = {[{value:"1" ,label:"Nam"},
                                        {value:"2" ,label:"Nữ"},
                                        {value:"3" ,label:"Khác"},
                                      ]} 
                            />
                        </div>
                        <div className="col-md-2 search_item">
                            <h5>Muốn tìm</h5>
                            <Select className="selectpicker"
                            name="seeking" value={ formSearch.seeking } onChange=
                            {this.handleChangeSeeking}
                            options = {[{value:"1" ,label:"Nam"},
                                        {value:"2" ,label:"Nữ"},
                                        {value:"3" ,label:"Khác"},
                                      ]} 
                            />
                        </div>
                        <div className=" col-md-2 search_item">
                            <h5>Từ</h5>
                            <Select className="selectpicker"
                            name="ageFrom"  value={ formSearch.ageFrom } onChange=
                            {this.handleChangeAgeFrom}
                            options = {age} 
                            />
                        </div>
                        <div className="col-md-2 search_item">
                            <h5>Đến</h5>
                            <Select className="selectpicker"
                            name="ageTo" value={ formSearch.ageTo } onChange=
                            {this.handleChangeAgeTo}
                            options = {age} 
                            /> 
                        </div>
                        <div className="col-md-2 search_item">
                            <h5 style={{ color: 'white' }} >Submit</h5>
                            <button type="submit" value="search" className="btn btn-primary">Tìm kiếm</button>
                        </div>
                        <div className="search_item"></div>
                    </form>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return state;
}
const connectedAdvancedSearch=connect(mapStateToProps)(AdvancedSearch);
export { connectedAdvancedSearch as AdvancedSearch } 