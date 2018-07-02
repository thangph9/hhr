import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ReactDom from "react-dom";
import Modal from "react-modal";
const customStyles={
    content:{
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)' 
    }
}

class PhotoItem extends React.Component{
    constructor(props){
        super(props)
        this.state={
            modalIsOpen: false,
        }
        this.openModal=this.openModal.bind(this);
        this.afterOpenModal=this.afterOpenModal.bind(this);
        this.closeModal=this.closeModal.bind(this);
    }
    openModal(){
        this.setState({modalIsOpen: true});   
    }
    afterOpenModal(){
        this.subtitle.style.color= '#f00';
    }
    closeModal(){
        this.setState({modalIsOpen: false});
    }
    
    componentDidMount(){
        //this.props.dispatch(userAction.All());
    }
    render(){
        const { image_id, user_id } = this.props; 
        return (
            <li><Link to={`/image/${user_id}/${image_id}`} ><img src={`http://192.168.1.3:3001/image/${user_id}/${image_id}`} alt="" /></Link></li>
        )
    }
}
function mapStateToProps(state){
    const { authentication }= state;
    return { authentication };
}
const connectedPhotoItem=connect(mapStateToProps)(PhotoItem);
export { connectedPhotoItem as PhotoItem } 