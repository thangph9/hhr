import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userActions } from "../actions";
class ViewMemberItem extends React.Component{
    constructor(props){
        super(props);
        this.handleLikeButton=this.handleLikeButton.bind(this);
        
    }
    handleLikeButton(user){
        const {authentication } = this.props;
        if(authentication.loggedIn){
            user["uuid"]=authentication.user.user_id;
        }
        //console.log(authentication);
        if(user.liked){
            //console.log(user);
            this.props.dispatch(userActions.deleteLikeMember(user)); 
        }else{
            this.props.dispatch(userActions.addLikeMember(user)); 
        }
           
    }
    
    componetWillUpdate(){
        
    }
    render(){
        const { data }  = this.props; 
        //console.log(authentication);
        const _data ={
            previewThumbnail        : 'https://twoo04-a.akamaihd.net/c/c7290c0fc14f994b44e28662fbf91fa0_1_5_0_1600_1200_215_215_0012069587.jpg',
            
            fullname                : data.fullname,
            liked                   : (data.liked) ? data.liked : false ,
            age                     : (new Date().getFullYear() - data.dob_year),
            address                 : 'Ha Noi',
            matchScore              : '',
            image_count             : (data.image_count ) ? data.image_count : 0,
            gender                  : data.gender,
            mobile_active           : data.mobile_active,
            is_active               : data.is_active,
            user_id                 : data.user_id,
        }
        return(
            <div className="tw3-card--gridFlex" >
                <div className="tw3-card jsCard jsVisiButton noline jsShowOnboardingCard">
                    <div className="tw3-card__avatar">
                    <Link to={`/profile/${_data.user_id}`}  className="noline tw3-card__avatar__link jsVisitButton jsSearchV3AvatarLinkTrigger jsShowOnboardingCard">

                        <div className="scrollableHolder jsScrollableHolder">
                            <div className="scrollable jsScrollable">
                                <div className="scrollable__panel jsScrollablePanel" style={{width: "100%"}}>
                                    <div className="scrollable__panel__item photoCover__bkg__image jsScrollablePanelItem" style={{backgroundImage:  `url(${_data.previewThumbnail})`, width: "100%"}}></div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div className="jsCardState tw3-card__state tw3-card__state--like ">
                        <span className="jsLikeButton"  onClick={()=>{this.handleLikeButton(data)}} >
                            <span style={{display:'none'}} className="jsLikeButtonElement button--match">
                                <Link to="#" className="jsChatButton jsChatLink" >
                                    <span className="tw3-tooltip jsTooltip" >
                                        <span className="icon"><i></i></span>
                                    </span>
                                </Link>
                            </span>
                            { _data.liked ? (
                                <span style={{display: "block"}} className="jsLikeButtonElement button--liked">
                                    <span className="tw3-tooltip jsTooltip" >
                                        <span className="fa fa-thumbs-down"><i></i></span>
                                    </span>
                                </span>
                                ):(
                                <span className="jsLikeButtonElement button--like">
                                    <span className="tw3-tooltip">
                                        <span className="fa fa-thumbs-up"><i></i></span>
                                    </span>
                                </span>
                                )

                            }
                            
                            
                            

                        </span>

                        </div>
                    </div>
    { _data.image_count > 0 &&
            <div className="tw3-card__photoCounter">
                    <strong>{_data.image_count} </strong> 
                    <i className="tw3-iconCamera tw3-iconWhite"></i>
            </div>   
    }
             
            <div className="tw3-card__userInfo">
                <div className="tw3-card__actions">
                    <Link className="jsMatchScoreBadge jsVisitButton"  to="/1169307024?r=search_v3_all&amp;s=search&amp;p=23#panel=questions">
                        <div className="badge--blue badge--matchScore vam">
                        Bạn có hợp không?
                        </div>
                    </Link>
                </div>
                <div className="pt--tight">
                    <strong><span className="name">{_data.fullname}, {_data.age}</span></strong>
                </div>
                <div className="tw3-card__hide  jsOnboardingHide ">
                    <Link to="/search?action=remove&amp;id=1169307024&amp;page=2"  className="noline tw3-tooltip el--inlineBlock jsTooltip jsHideLink" >
                        <i className="tw3-iconEye tw3-iconGrey"></i>
                    </Link>
                </div>
                <div className="tw3-card__userInfo__locAndWork text--subtle">
                    <span>{_data.address}</span>
                </div>
                    <div className="tw3-card__badgeBar">
{ _data.is_active &&
 <a href="javascript://" className="jsVerify mr--compact"><span className="tw3-tooltip jsTooltip" ><i className="tw3-iconVerifiedShield tw3-iconBig tw3-iconGreen"></i></span></a>
}
                       
{ _data.mobile_active && 
<a href="/download"><span className="tw3-tooltip jsTooltip mr--compact"><i className="tw3-iconAppBadge tw3-iconGrey tw3-iconBig"></i></span></a>
}
                        
                    </div>
                </div>
            
            </div>
            <div className="tw3-card__hideView jsHideView">
                <div className="centerBlock">
                    <div className="centerBlock__item">
                        <p className="text--center">
                            <span className="text--dark">{_data.fullname}</span> đang bị ẩn.
                        </p>
                        <Link to="/search?action=undoRemove&amp;id=1169307024&amp;page=2"       className="jsUndoHideLink">
                        Bỏ ẩn
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    
    
}
function mapStateToProps(state){
    const { memberActive, authentication, like } = state;
    return { memberActive, authentication, like };
}
const connectedViewMemberItem = connect(mapStateToProps)(ViewMemberItem);
export { connectedViewMemberItem as  ViewMemberItem };