import React from "react";
import { connect } from "react-redux";
import { IndexVerifiCation,EditDescription,ViewImages, ViewIndexDetail, EditDetail, ViewImagesMore } from "./index";
class IndexDetails extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){ 
        
        const {page} =this.props;
        const switchView=(page.view) ? page.view : 'details';
        return(
            <div className="tw3-col-12 tw3-bp3-col-7 jsHideOnInterstitial">
                <div className="tw3-profile__body mb--tight">
                { switchView=='details' &&
                    <div className="jsView">
                        
                        <EditDescription />
                        <ViewImages />
                        <hr className="tw3-hr" />
                        <ViewIndexDetail />
                        <hr className="tw3-hr" />
                        <IndexVerifiCation />
                    </div>
                }
                { switchView=='media' &&
                   <ViewImagesMore /> 
                }
            
                {   switchView=='edit' &&
                    <EditDetail />
                }
                    
                    <div className="jsView"></div>
                    <div className="jsView jsProfileQuestions"></div>
                </div>
                <div className="tw3-profile__body mb--tight">
                </div>
            </div>
        );
    }
}
function mapStateToProps(state){
    const { page } =state;
    return { page };
}
const connected = connect(mapStateToProps)(IndexDetails);
export { connected as IndexDetails }