import React from "react";
import { connect } from "react-redux";
import {pageActions,modalActions } from "../actions";
import { ImageDetailShow } from "./index";
class ViewImagesMore extends React.Component{
    constructor(props){
        super(props);
        this.handleSwitchMedia=this.handleSwitchMedia.bind(this);
        this.handleViewDetail=this.handleViewDetail.bind(this);
        //this.handleAddImage=this.handleAddImage.bind(this);
    }
    handleSwitchMedia(){
        const { dispatch } =this.props;
        dispatch(pageActions.switchView('details'));
    }
    handleViewDetail(e){
        //console.log('click image');
        const { dispatch } =this.props;
        dispatch(modalActions.openModal({className: 'tw3-modal--photobox--v4 tw3-modal--photobox--v4--yourProfile',content: <ImageDetailShow index={e} /> }));
    };
    render(){
        const { imageMember } = this.props;
         const hostname= window.location.protocol + '//' + window.location.hostname;
       
        const _img=(imageMember.image && imageMember.image.status && imageMember.image.images.length > 0  )
            ? imageMember.image.images : []; 
        var total=_img.length;
        var rowData=[];
        
        var _image=[..._img];
        _image.unshift({first: true});
        while(_image.length > 0){
            rowData.push(_image.splice(0,4));
        }
        
        while(rowData[rowData.length - 1].length < 4){
            rowData[rowData.length - 1].push({blank: true})
        }
        
       // console.log(image);
        let Rows=rowData;
        return(
<div className="jsView">            
    <div className="tw3-profile__header">
    <a href="javascript://" className="jsSwitchView" onClick={this.handleSwitchMedia}>
        <i className="tw3-iconArrowLeft tw3-iconMedium mr--compact el--vam"></i>
    </a>
    Hình ảnh và video
    </div>
        <div className="jsMedia">
{ Rows.length > 0 &&
Rows.map((e,i)=>{
        return(    
        <div className="tw3-profile__mediabox__row" key={i}>  
            {
                e.map((j,k)=>{
            //console.log(j);
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
                }else if(j.blank){
                    return (
                    <div key={k} className="tw3-profile__mediabox__item tw3-profile__mediabox__action" >
                        <a href="javascript://"  className="jsAddMedia text--center"></a>
                        <img src="https://twoo-a.akamaihd.net/static/864505989717655270395861131/shared/i/blank.gif" style={{ width:'100%', height: '100%', backgroundColor: '#f9f9f9'}} 
                        
                        />
                    </div> 
                    )
                }else{
                    return (
                    <div key={k} className="tw3-profile__mediabox__item tw3-profile__mediabox__item--hover  jsTriggerPhotoBox" >
                        <img  onClick={()=>{this.handleViewDetail(j)}}
                        src={`${hostname}:3001/image/t/${j.image_id}`} style={{width: '100%', height: '100%'}} className="el-vam"  />
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
</div>
        );
    }
}
function mapStateToProps(state){
    const { imageMember } =state;
    return { imageMember };
}
const connected = connect(mapStateToProps)(ViewImagesMore);
export { connected as ViewImagesMore }