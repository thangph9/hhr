import React from "react";
import { connect } from "react-redux";
import Select from "react-select";
class _Combobox extends React.Component{
   constructor(props){
       super(props);
       this.onChange=this.onChange.bind(this);
      // console.log(this.props);
       
   }
   onChange(value){
       //console.log(value);
       this.props.onChange(value);
       
   }    
    render(){
        //console.log(this.props);
        const options = this.props.options
        return (<Select options={options} onChange={this.onChange} />)
    }
}
function mapStateToProps(state){
            return state;
}
const connected = connect(mapStateToProps)(_Combobox);
export { connected  as _Combobox}