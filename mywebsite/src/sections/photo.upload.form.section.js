import React from 'react';
import {connect}  from 'react-redux';
import { Redirect } from 'react-router-dom';
import ImagesUploader from 'react-images-uploader';
import { userActions } from "../actions";

class PhotoUploadForm extends React.Component{
    constructor(props){
        super(props);
        let imageUpload = JSON.parse(localStorage.getItem('imageUpload'));
        var f= imageUpload ? { imageUpload } : [] 
        this.state={
            listFile:f,
            form: {
                
            },
            list: [],
            uploaded : false
        }
        this.handleSubmit   =this.handleSubmit.bind(this);
        this.handleChange   =this.handleChange.bind(this);
        this.choseFileClick =this.choseFileClick.bind(this);
        this.handleRemoveFile=this.handleRemoveFile.bind(this);
    }
    handleChange(e){
        const { dispatch }      = this.props;
        const { name,value }    = e.target;
        const { files }         = e.target;
        
        for (var i in {...files}) {
               (function(i){
                    var reader=new FileReader();
                    reader.onload=function(e){ 
                        callback(i,e.target.result);
                    }; 
                    reader.readAsDataURL(files[i]);
               })(i) ;
                
        }
        var callback=(i,e)=>{
            const { list }  = this.state;
            var li          = list;
            if(li.length > 1){
                //alert("Upload to muck");
            }
            li.push({ data: e, file: files[i],uploaded: false });
            this.setState({
                list:li,
            })
       }
    }
    handleRemoveFile(e,i){
        const {list}    =this.state;
        var li          =list
        li.splice(e, 1);
        this.setState({
            list: li,    
        })
    }
    handleSubmit(e){
        e.preventDefault();
        const { dispatch,image }    = this.props;
        const { list }              = this.state;
        const { authentication }    = this.props;       
        var li              =list;
        var data            ={};
        var k=0;
        data["user_id"]     = authentication.user.user_id ;
        
        var interval=setInterval(function(){
            
                if(!list[k].uploaded){
                    
                    data["file"]        =list[k].file;
                    data["fileIndex"]   =k;
                    dispatch(userActions.uploadImageByUser(data));
                }
            if(k==list.length-1){
               clearInterval(interval);
            }else{
                k++;
            }
            
            
        },1000);    
            
        this.setState({
                uploaded : true  
        });
    }
    choseFileClick(e){
        document.getElementById("file").click();
    }
    componentWillReceiveProps(){
        const { form, list }                = this.state;
        const { image, imageUpload }        = this.props;
        var li                              = list;
             
        if(imageUpload.adding==undefined){
                    //console.log(image);
                    if(imageUpload.image!=undefined && imageUpload.image.fileIndex){
                        li[imageUpload.image.fileIndex]['uploaded']=imageUpload.image.status
                    }
            }
        this.setState({
            list:li
        });
    }
    render(){
        const { authentication, imageUpload, image } = this.props;
        const { uploaded }              = this.state;
        
        var   imageCurrent    ={};
        const imageUploaded ={};
        const imageUpoading ={};
        const imageUploadFailure   ={};
        const imagePrevRm   ={};
        const style={
            "marginTop" :"100px",
            width       :"50%",
            left        :"50%",
            top         :"30%",
            border      :"1px solid #aaa",
            
        }
        const imagePreviewBox={
            display     : "block",
            float       : "left",
            marginBottom: "15px",
            width       : "100%",
            boxSizing   : "border-box",
            outline     : "none",
            
            
        }
        
        const { form, list }    = this.state;
        var li              = list;
        
        if(imageUpload.adding==undefined){
                    //console.log(image);
                    if(imageUpload.image!=undefined && imageUpload.image.fileIndex){
                        li[imageUpload.image.fileIndex]['uploaded']=imageUpload.image.status;
                    }
            }
        var fileList        = li;
        return(
            
           <section>    
            
            <div className="container" style={ style } >
                <form name="upload" onSubmit={this.handleSubmit}  >
                    <div className="form-group">
                        <label>Tiêu đề</label>
                        <input className="form-control" type="text" name='title' value={form.title} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">    
                        <label>Nội dung</label>
                        <textarea className="form-control" name='description' value={form.description} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        { fileList.length > 0 &&
                            <button type="button" className="btn btn-info" onClick={ this.choseFileClick } >{ fileList.length+` Ảnh được chọn` }</button>
                        }
                        { fileList.length == 0 &&
                            <button type="button" className="btn btn-info" onClick={ this.choseFileClick } >Chọn hình ảnh</button>
                        }
                        
                        <input type="file" name="image" id="file" className="hidden" multiple onChange={this.handleChange} accept=".jpg, .jpeg, .png" />
                    </div>
                    <div className="row">
                       {fileList!=undefined && fileList.length > 0 &&
                        <div style={imagePreviewBox}  >
                                    
                            {   fileList.map( (file,i)=>{
                                return (
                                    <div className="col-md-4" key={i} >
                                    
                                        <div style={ imageUpoading }>
                                                { !file.uploaded && 
                                                    <a style={{cursor: "pointer"}} onClick={this.handleRemoveFile.bind(this,i)}>x</a>
                                                }
                                                { file.uploaded &&
                                                    <p>Upload process</p>
                                                }
                                                <img src={file.data} style={{ widht:"170px",height:"170px" }} className="img-thumbnail" />
                                                <i>{file.name}</i>
                                         </div> 
                                     </div>
                                    )
                                })
                            }
                        </div>
                     }
                    </div>
                    <div className="row">
                        <div className="col-md-12 form-group">
                        
                        <button type="submit" className="btn btn-primary" name="upload" value="Upload" >Upoading</button>
                        </div>
                    </div>
                    <div className="progress row" style={{marginBottom: "0",height:"3px"}}>
                        <div className="progress-bar" style={ { width: "100%" } }></div>
                    </div>   
                </form>
                        
            </div>
                         
            </section>
        )
    }
}
function mapStateToProps(state){
    const { authentication,image, imageUpload } = state;
    return {
        authentication,image ,imageUpload
    }
}
const connectedPhotoUploadForm=connect(mapStateToProps)(PhotoUploadForm);
export { connectedPhotoUploadForm as PhotoUploadForm }