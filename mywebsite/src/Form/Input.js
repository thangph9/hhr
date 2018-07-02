import React from 'react';
import { connect } from 'react-redux';
import {userActions} from '../actions';
const MAX_CONTRIBUTORS = 6;
const ASYNC_DELAY = 500;
class InputText extends React.Component{
    constructor(props){
        super(props);
        this.state={
            field: (this.props.field) ? this.props.field : null,
            changeValue: false,
            value: '',
            search: false,
            searchData: []
        }
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        
        this.onChange=this.onChange.bind(this);
        this.handleOnBlur=this.handleOnBlur.bind(this);
        this.searchValueSuggestion=this.searchValueSuggestion.bind(this);
        //this.handleSelectValue=this.handleSelectValue.bind(this);
        this.handleHover=this.handleHover.bind(this);
    }
     componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
      }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
      }
    /**
       * Set the wrapper ref
       */
      setWrapperRef(node) {
        this.wrapperRef = node;
      }

      /**
       * Alert if clicked on outside of element
       */
      handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({
                search : false
            })
        }
      }
    onChange(e){
        const { name, value} = e.target;
        this.setState({
           value: value, 
           changeValue:true,
           
        });
        //console.log(name);
        if(value.length > 2){
            this.getContributors(value,(err,data)=>this.searchValueSuggestion(data));
        }else{
            this.setState({
                search : false
            })
        }
    }
    handleSelect(e){
            //console.log(e);
            this.setState({
                search  : false,
                value   : e, 
                changeValue:true,
            })
    }
    handleMouseEnter(e){
        //console.log(e);
        this.setState({
                value   : e, 
            })
    }
    searchValueSuggestion(data){
        //console.log(data);
        this.setState({
            search: true,
            searchData: data.options,
            searchToken: data.search,
        })
    }
    handleHover(i){
        console.log('hover')
        this.setState({
            selected: true,
            index: i,
        })
    }
    handleOnBlur(e){
        const {authentication,field, dispatch, type }= this.props;
        const user={
            field: field.key,
            user_id: (authentication.loggedIn) ? authentication.user.user_id : '',
            value: this.state.value,
            
        }
        this.setState({
            search: false
        });
        if(this.state.value.length > 0){
            if(type=='user'){
                 dispatch(userActions.updateUser(user));
            }else {
                dispatch(userActions.updateDetails(user));
            }
            
        }
        
        
    }
    getContributors (input, callback) {
		input = input.toLowerCase();
        
        const { field }  = this.state;
        //console.log(input);
        let v='';
		const options = field.data.filter((i,j) =>{
            let index=i.toLowerCase().indexOf(input) > -1;
            v=field.data[j].substr(i.toLowerCase().indexOf(input),input.length);
            return index;  
        }) 
        //console.log(options);
		var data = {
			options: options.slice(0, field.data.length),
			complete: options.length <= field.data.length,
            search : v,
		};
        //console.log(data);
		setTimeout(function() {
			callback(null, data);
		}, ASYNC_DELAY);
        
	};
    render(){
        const { field,search,searchData,searchToken,selected,index } = this.state;
        //console.log(search,searchData);
        const v= (this.props.field && this.props.field.value) ? this.props.field.value : '';
        //console.log(v);
        return(
            <div>
            <input name={field.key} value={(this.state.changeValue ) ? this.state.value : v} placeholder={field.label} className={field.className} onChange={this.onChange} onBlur={this.handleOnBlur} />
            { search && searchData.length > 0 &&
            <div ref={this.setWrapperRef} className="autoCompleterSuggestions jsAutoCompleterSuggestionsContainer " style={{display: 'block'}}>   
               <ul className="jsAutoCompleterSuggestions">
                {
                    searchData.map((e,i)=>{
                        if(searchToken){
                            
                            return   (
                            
                                <li className={(index==i && selected) ? 'jsAutoCompleterSuggestion selected' : 'jsAutoCompleterSuggestion'} key={i} onMouseEnter={()=>{this.handleHover(i)}} onClick={()=>{this.handleSelect(e)}} >
                                    { e.split(searchToken)[0] }
                                    <b>{searchToken}</b>
                                    {e.split(searchToken)[1]}
                                </li>
                            )
                        }else{
                            return   (
                                <li className="jsAutoCompleterSuggestion" key={i} onClick={()=>{this.handleSelect(e)}} >
                                    {e}
                                </li>
                            )
                        }
                         
                        
                    })
                }
                </ul>
            </div> 
            }
           
            </div>
        )
    }
}
function mapStateToProps(state){
    const { authentication } = state;
    return { authentication };
}
const connected=connect(mapStateToProps)(InputText);
export { connected as InputText };