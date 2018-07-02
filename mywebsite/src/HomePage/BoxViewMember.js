import React from "react";
import {connect} from "react-redux";
import { ViewMemberItem } from "./ViewMemberItem";
import { BoxViewPagination } from "./BoxViewPagination";

import { userActions } from "../actions";
class BoxViewMember extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        
    }
    render(){
        const {memberActive,like} = this.props;
        const data=(memberActive.items && memberActive.items.users ) ? memberActive.items.users : [];
        return(
            <div className="tw3-content">
                <div className="tw3-search__results">
                    <div className="tw3-container">
                    <div className="tw3-row tw3-results jsSearchResults">
                        <div className="tw3-col-12">
                            <div className="jsDesktopNextResultsContainer">
                                <div className="clearfix">
                                    <div className="clearfix photoBlockContainer tw3-search__cardHolder">
                                        <div className="tw3-cards jsResults">    
        { memberActive.loading &&
            <div className="col-md-12">
               <span> Loading... </span>
            </div>    
            
        }
        { data.length > 0 &&
            data.map((e,i)=>{
                return (<ViewMemberItem key={i} data={e}/>)
            })
        }
                                          
                                        </div>
                                    </div>
                                </div>
                                <BoxViewPagination page={this.props.page} />
                            </div>
                            
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    const { memberActive }= state;
    return { memberActive };
}
const connectedBoxViewMember=connect(mapStateToProps)(BoxViewMember);
export { connectedBoxViewMember as  BoxViewMember }
