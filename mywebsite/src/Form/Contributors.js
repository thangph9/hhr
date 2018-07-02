import React from "react";
import { connect } from "react-redux";
import Select from "react-select";
import AsyncSelect from 'react-select/lib/Async';
import {userActions} from "../actions";
//const CONTRIBUTORS = require('../data/contributors').smoking;
const MAX_CONTRIBUTORS = 6;
const ASYNC_DELAY = 500;

class Contributors extends React.Component{
    constructor(props){
        super(props);
        //console.log(this.props);
        //console.log((this.props.field));
        this.state={
            value: [],
            onselect: false,
            multi: this.props.multi ,
            CONTRIBUTORS: (this.props.field) ? this.props.field.data : [],
            placeholder: (this.props.field) ? this.props.field.label : ''
        }
        this.onChange=this.onChange.bind(this);
        this.getContributors=this.getContributors.bind(this);
    }
	onChange (value) {
        const {dispatch, field, authentication} = this.props;
		this.setState({
			value: value,
            onselect: true,
		});
        //console.log(value);
        const user={
            field   : field.key,
            user_id : (authentication.loggedIn) ? authentication.user.user_id : '',
            value   : value,
        }
        dispatch(userActions.updateDetails(user));
	};
	getContributors (input, callback) {
		input = input.toLowerCase();
        const { CONTRIBUTORS }  = this.state;
		var options = CONTRIBUTORS.filter(i => {
			return i.value.substr(0, input.length) === input;
		});
		var data = {
			options: options.slice(0, CONTRIBUTORS.length),
			complete: options.length <= CONTRIBUTORS.length,
		};
		setTimeout(function() {
			callback(null, data);
		}, ASYNC_DELAY);
	};
	gotoContributor (value, event) {
		window.open('https://github.com/' + value.value);
	};
   
	render () {
        //console.log(this.props);
        const v= (this.props.field) ? this.props.field.value :[];
		return (
        <AsyncSelect 
        isMulti 
        value={(this.state.onselect) ? this.state.value : v} 
        onChange={this.onChange}  
        defaultOptions={this.state.CONTRIBUTORS}
        loadOptions={this.getContributors}
        placeholder=''
        
        />
			
		);
	}
}
function mapStateToProps(state){
    const { authentication } =state;
    return {authentication};
}
const connected=connect(mapStateToProps)(Contributors)
export { connected as Contributors }