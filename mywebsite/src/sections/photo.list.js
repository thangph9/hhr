import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { PhotoItem } from "./photo.item";
import { userActions } from "../actions";
class PhotoList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    componentDidMount(){
        
    }
    
    render(){
        const { users, authentication,image } = this.props;
        
        var user_id=(users.item && users.item.user.length > 0)  ? users.item.user[0].user_id : "";
        return (
            <aside className="s_widget photo_widget">
                <div className="s_title">
                <h4>Photo</h4>
                <img src="/img/widget-title-border.png" alt="" />
                </div>
                
                { image.image!=undefined &&  image.image.images.length > 0 &&
                    <ul>    
                    {
                        image.image.images.map( (e,i)=>{

                                        return (
                                            <div key={i}>
                                                <PhotoItem image_id={ e.image_id } index={i}  user_id={user_id} />
                                            </div>
                                        )
                                    })
                    }    
                    </ul>       
                }
            </aside>
        )
    }
}
function mapStateToProps(state){
    const { authentication, users, image } = state;
    
    return { authentication, users, image };
}
const connectedPhotoList=connect(mapStateToProps)(PhotoList);
export { connectedPhotoList as PhotoList } 