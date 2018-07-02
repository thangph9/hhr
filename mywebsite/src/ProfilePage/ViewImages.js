import React from "react";
import { connect } from "react-redux";
import {pageActions,modalActions } from "../actions";
import { ImageDetailShow } from "./index";
class ViewImages extends React.Component{
    constructor(props){
        super(props);
        this.handleSwitchMedia=this.handleSwitchMedia.bind(this);
        //this.handleAddImages=this.handleAddImages.bind(this);
        this.handleViewDetail=this.handleViewDetail.bind(this);
    }
    handleSwitchMedia(){
        const { dispatch, image } = this.props;
        //console.log(image.image.images.length);
        dispatch(pageActions.switchView('media'));
    }
    handleViewDetail(e){
        //console.log('click image');
        const { dispatch } =this.props;
        dispatch(modalActions.openModal({className: 'tw3-modal--photobox--v4 tw3-modal--photobox--v4--yourProfile',content: <ImageDetailShow index={e} /> }));
    };
    render(){
        const {imageMember} = this.props;
        //console.log(image);
        const hostname= window.location.protocol + '//' + window.location.hostname;
        //console.log(hostname);
        const _img=(imageMember.image && imageMember.image.status && imageMember.image.images.length > 0  )
            ? imageMember.image.images : []; 
        var total=_img.length;
        var rowData=[];
        
        
        var _image=[..._img];
        
        _image.unshift({first: true});
        //console.log(_image);
        
        while(_image.length > 0){
            rowData.push(_image.splice(0,4));
        }
        
        while(rowData[ rowData.length - 1 ].length < 4){
                rowData[rowData.length - 1].push({blank: true})
            }
        
        
        let Rows=(rowData.length > 3) ? rowData.splice(0,3) : rowData;
        //console.log(Rows);
        return(
            <div className="tw3-profile__body__box tw3-profile__body__boxMedia jsIndexMedia">
                <h5 className="text--bold tw3-h5 hide tw3-bp3-col-show-block">HÌNH &amp; VIDEO</h5>
                <div className="tw3-showMoreContainer" style={{height: '100%'}}>
{ Rows.length > 0 &&
Rows.map((e,i)=>{
            return (
            <div className="tw3-profile__mediabox__row" key={i}>  
            {
                e.map((j,k)=>{
                    //console.log(j)    
                    if(j.first){
                        return (
                            <div key={k} className="tw3-profile__mediabox__item tw3-profile__mediabox__action tw3-profile__mediabox__private jsTriggerPhotoBox">
                                    <a href="javascript://"></a>
                                    <div className="mb--compact"><i className="tw3-iconLock tw3-iconWhite"></i></div>
                                    <div className="text--bold text--small text--white">
                                    Cá nhân (1)
                                    </div>
                            </div>
                        )
                    }
                    else if(j.blank){
                       return(
                           <div key={k} className="tw3-profile__mediabox__item tw3-profile__mediabox__action">
                                <img src="https://twoo-a.akamaihd.net/static/864505989717655270395861131/shared/i/blank.gif" style={{width: '100%', height: '100%', backgroundColor: '#f9f9f9'}} />
                            </div>
                       )
                    }else{
                       return( 
                            <div key={k} className="tw3-profile__mediabox__item tw3-profile__mediabox__item--hover  jsTriggerPhotoBox">
                                <img src={`${hostname}:3001/image/t/${j.image_id}`} style={{width: '100%', height: '100%'}} className="el-vam" onClick={()=>this.handleViewDetail(j)} />
                            </div>
                        )
                    }
                })
            }
            </div>    
            )
        })
}
                    
                
            </div>
{ _img.length > 12 &&
        <div className="tw3-showMore pb--loose">
            <a href="javascript://" className="tw3-button tw3-button--subtle tw3-button--blue tw3-button--full tw3-button--rounded jsSwitchView" onClick={this.handleSwitchMedia}>
            ĐI TỚI HÌNH ẢNH VÀ VIDEO ({total})
            </a>
        </div>
}
            </div>

        )
    }
}
function mapStateToProps(state){
    const {imageMember, authentication} = state; 
    return { imageMember, authentication} ;
}
const connectedViewImage = connect(mapStateToProps)(ViewImages);
export {connectedViewImage as ViewImages }