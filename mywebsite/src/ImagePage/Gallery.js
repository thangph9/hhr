import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userActions } from "../actions";
import Image   from "./Image";
import { Thumbnail } from "./Thumbnail";

class Gallery extends React.Component{
    
    
    
    render(){
        const { image ,authentication } = this.props;
        const user_id=(authentication.user) ? authentication.user.user_id :'';
        let host="http://"+window.location.hostname+":3001";
        return(
            <div>
                { image.image!=undefined && image.image.images !=undefined && 
                    <div> 
                    { 
                        image.image.images.map((e,i)=>{
                             return ( 
                                <div className="col-md-4" key={i}>
                                <Link to={{ 
                                    pathname: `/image/${user_id}/${e.image_id}`, state :{ modal: true } 
                                    }}
                                >
                                <Thumbnail src={`${host}/image/${user_id}/${e.image_id}`} />
                                </Link>
                                </div>
                                );
                        })
                       
                     }
                    </div>
                }
            </div>
        )
    }
}
function mapStateToProps(state){
    const { image, authentication} = state;
    return { image, authentication };
}
const connectedGallery=connect(mapStateToProps)(Gallery);
export {connectedGallery as Gallery};