import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Select from "react-select";
import { userActions } from "../actions";
import { history } from "../store";
class AdvancedSearchFormSection extends React.Component{
    constructor(props){
        super(props);
        
        var a=[];
        for(var i=18; i<=65 ; i++){
            var itm={label:i,value:i};
            a.push(itm);
        }
        
        const { ownState } =this.props;
        this.state={
            formSearch: (ownState) ? ownState : {
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
            this.setState({ formSearch: {...formSearch, gender: (e.value >= formSearch.seeking.value) ? e :  formSearch.seeking  }});
        }
        
    }
    handleChangeSeeking(e){
        const { formSearch } = this.state;
        if(e!=null){
            this.setState({ formSearch: {...formSearch, seeking: (e.value >= formSearch.gender.value) ? e :  formSearch.gender}});
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
        const { dispatch } =this.props;
        this.setState({submitted: true});
        dispatch(userActions.search(formSearch));
    }
    componentDidMount(){
        const { ownState }= this.props;
        
        if(ownState){
            this.props.dispatch(userActions.search(ownState));
        }
    }
    render(){
        
        const { formSearch,age }= this.state;
        return (
             <div className="advanced_search">
                <div className="container">
                    <div className="search_inner">
                <div className="row">
                    <form name="search" onSubmit={ this.handleSubmit }>    
                        <div className="search_item col-md-2">
                            <h5>Bạn là</h5>
                            <Select 
                            name="gender" value={ formSearch.gender } onChange=
                            {this.handleChangeGender}
                            options = {[{value:"1" ,label:"Nam"},
                                        {value:"2" ,label:"Nữ"},
                                        {value:"3" ,label:"Khác"},
                                      ]} 
                            />
                        </div>
                        <div className="search_item col-md-2">
                            <h5>Muốn tìm</h5>
                            <Select 
                            name="seeking" value={ formSearch.seeking } onChange=
                            {this.handleChangeSeeking}
                            options = {[{value:"1" ,label:"Nam"},
                                        {value:"2" ,label:"Nữ"},
                                        {value:"3" ,label:"Khác"},
                                      ]} 
                            />
                        </div>
                        <div className="search_item col-md-2">
                            <h5>Từ</h5>
                            <Select 
                            name="ageFrom"  value={ formSearch.ageFrom } onChange=
                            {this.handleChangeAgeFrom}
                            options = {age} 
                            />
                        </div>
                        <div className="search_item col-md-2">
                            <h5>Đến</h5>
                            <Select 
                            name="ageTo" value={ formSearch.ageTo } onChange=
                            {this.handleChangeAgeTo}
                            options = {age} 
                            />
                        </div>
                        
                        <div className="search_item col-md-2">
                            <h5 style={{color: 'white'}}>Submit</h5>
                            <button type="submit" value="search" className="btn btn-primary">Tìm kiếm</button>
                        </div>
                        <div className="search_item col-md-2">
                        </div>
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
const connectedAdvancedSearchFormSection=connect(mapStateToProps)(AdvancedSearchFormSection);
export { connectedAdvancedSearchFormSection as AdvancedSearchFormSection } 