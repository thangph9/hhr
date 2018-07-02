import React from "react";
import { connect } from "react-redux";
import {pageActions,modalActions } from "../actions";
import { AddImages, ImageDetailShow } from "./index";
class ViewImages extends React.Component{
    constructor(props){
        super(props);
        this.handleSwitchMedia=this.handleSwitchMedia.bind(this);
        this.handleAddImages=this.handleAddImages.bind(this);
        this.handleViewDetail=this.handleViewDetail.bind(this);
    }
    handleSwitchMedia(){
        const { dispatch, image } = this.props;
        //console.log(image.image.images.length);
        dispatch(pageActions.switchView('media'));
    }
    handleAddImages(){
        
        const { dispatch } = this.props;
        dispatch(modalActions.openModal({ className: 'tw3-modal--small  tw3-modal--photoUploadv4 ',content:<AddImages type="add" />}));
    }
    handleViewDetail(e){
        //console.log('click image');
        const { dispatch } =this.props;
        dispatch(modalActions.openModal({className: 'tw3-modal--photobox--v4 tw3-modal--photobox--v4--yourProfile',content: <ImageDetailShow index={e} /> }));
    };
    
    render(){
        const { image } = this.props;
        const hostname= window.location.protocol + '//' + window.location.hostname;
        //console.log(hostname);
        const _img=(image.image && image.image.status && image.image.images.length > 0  )
            ? image.image.images : []; 
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
        //console.log(image)
        return(
    <div className="tw3-profile__body__box tw3-profile__body__boxMedia jsIndexMedia">
        <div className="tw3-showMoreContainer" style={{height: '100%'}}>
        
{ Rows.length > 0 &&
Rows.map((e,i)=>{
        return(    
        <div className="tw3-profile__mediabox__row" key={i}>  
            {
                e.map((j,k)=>{
                if(j.first){
                    return (
                    <div key={k} className="tw3-profile__mediabox__item tw3-profile__mediabox__item--hover tw3-profile__mediabox__action tw3-profile__mediabox__add">
                        <a href="javascript://" className="jsAddMedia text--center" onClick={this.handleAddImages} ></a>
                        <div className="mb--compact" ><i className="tw3-iconPlusSolid tw3-iconWhite"></i></div>
                        <div className="text--bold text--small text--white" >THÊM</div>
                    </div>
                    ) 
                }else if(j.blank){
                    return (
                    <div  key={k}   className="tw3-profile__mediabox__item tw3-profile__mediabox__action">
                        <a href="javascript://" className="jsAddMedia text--center"></a>
                        <img src="https://twoo-a.akamaihd.net/static/864505989717655270395861131/shared/i/blank.gif" style={{ width:'100%', height: '100%', backgroundColor: '#f9f9f9'}} />
                    </div> 
                    )
                }else{
                    return (
                    <div  key={k}  className={ j.publish ? 'tw3-profile__mediabox__item tw3-profile__mediabox__item--hover  jsTriggerPhotoBox' : 'tw3-profile__mediabox__item tw3-profile__mediabox__item--hover  jsTriggerPhotoBox tw3-profile__mediabox__item--label' }>
                        <img src={`${hostname}:3001/image/t/${j.image_id}`}  style={{width: '100%', height: '100%'}} className="el-vam" onClick={()=>this.handleViewDetail(j)} />
                        {!j.publish &&
                            <span className="text--smaller"><i className="tw3-iconLock"></i></span>
                        }
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
        

        <div className="jsAddMedia tw3-profile__mediabox__mobile">
            <a href="javascript://" className="tw3-button tw3-button--icon tw3-button--orange jsAddMedia ">
            <i className="tw3-iconCamera tw3-iconBig"></i>
            </a>
        </div>
    </div>
        );
    }
}
function mapStateToProps(state){
    const { image } =state;
    return { image };
}
const connected = connect(mapStateToProps)(ViewImages);
export { connected as ViewImages }