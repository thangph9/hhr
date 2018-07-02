import React from "react";
import { connect } from "react-redux";
import { pageActions } from "../actions";
class ViewIndexDetail extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showMoreActive  : false
        }
        this.handleShowMore=this.handleShowMore.bind(this);
        this.handleSwitchView=this.handleSwitchView.bind(this);
    }
    handleShowMore(){
        const { showMoreActive }= this.state;
        let currentActive=showMoreActive;
        this.setState({ showMoreActive : !currentActive });
    }
    handleSwitchView(){
       // console.log('edit');
        const {dispatch } = this.props;
        dispatch(pageActions.switchView('edit'));
    }
    arrayToString(arr){
        //console.log(arr);
        var res='';
        arr.map((e,i)=>{
            var ic=(arr.length-1 == i ) ? '' : ', ';
            //console.log(arr.length,i);
            res=res+e.label+ic;
        })
        return res;
    }
    render(){
        const { users,userDetails } = this.props;
        const data  =(users.item && users.item.status && users.item.user.length > 0 ) ? users.item.user[0] : {};
        
        const details=(userDetails.user && userDetails.user.status && userDetails.user.result.length > 0 )  ? userDetails.user.result[0] : {};
        
        const icon={
            iconZodiac:'tw3-iconRelationship',
            iconLanguagePreferred:'tw3-iconLanguagePreferred',
            iconRelationship:'tw3-iconRelationship',
            iconOrientation:'tw3-iconOrientation',
            iconWorkEducation:'tw3-iconWorkEducation',
            iconEducation:'tw3-iconEducation',
            iconEthnicity:'tw3-iconEthnicity',
            iconBodyType:'tw3-iconBodyType',
            iconHeight:'tw3-iconHeight',
            iconHair:'tw3-iconHair',
            iconGlasses:'tw3-iconGlasses',
            iconClothing:'tw3-iconClothing',
            iconBestPart:'tw3-iconBestPart',
            iconAppearance:'tw3-iconAppearance',
            iconCharacter:'tw3-iconCharacter',
            iconKids:'tw3-iconKids',
            iconFriends:'tw3-iconFriends',
            iconFavDish:'tw3-iconFavDish',
            iconFavCuisine:'tw3-iconFavCuisine',
            iconFavDrink:'tw3-iconFavDrink',
            iconFavMusicGenre:'tw3-iconFavMusicGenre',
        }
        var _basic  =[],_figure=[],_favourites=[],_personality=[],_workEducation=[],_asset=[],_familyFriend=[];
        
        
        const travel=(details.travel) ? {
            label   : "Du lịch",
            value   : details.travel.label,
            iconClass: null
        }  : null;
        const dob=(data.dob_day && data.dob_month && data.dob_year) ? {
            label   : "Sinh nhat",
            value   : data.dob_day+"/"+data.dob_month+"/"+data.dob_year,
            iconClass: ''
        } : null;
        const phones=(details.phones && details.phones.private) ? {
                    label           : 'SDT',
                    value           : details.phones.private,
                    iconClass       : '',
        } : null;
        const facebook=(details.facebook) ? {
                    label           : 'FB',
                    value           : details.facebook.private,
                    iconClass       : '',
        } : null;
        const distance=(details.distance) ? {
                    label           : 'Kết bạn trong bán kính',
                    value           : details.distance,
                    iconClass       : '',
        }:null;
        const hhr_goal=(details.hhr_goal) ? {
                    label           : 'Bạn tham gia HHR để',
                    value           : details.hhr_goal.label,
                    iconClass       : '',
        } :null;
        const relationship_status=(details.relationship_status) ? {
                    label           : 'Mối quan hệ hiện tại',
                    value           : details.relationship_status.label,
                    iconClass       : '',
        } : null;
        const description=(details.description) ? {
                    label           : 'Mô tả tổng quan về bạn',
                    value           : details.description.label,
                    iconClass       : '',
        } : null;
        const desc_wish=(details.desc_wish) ? {
                    label           : 'Mô tả tổng quan bạn Nam/Nữ mong muốn',
                    value           : details.desc_wish.label,
                    iconClass       : '',
        } : null;
        
        const height=(details.height) ? {
                    label           : 'Chiều cao',
                    value           : details.height,
                    iconClass       : '',
        } : null;
        const body_type=(details.body_type) ? {
                    label           : 'Thân hình',
                    value           : details.body_type.label,
                    iconClass       : '',
        } : null;
        
        const appearance=(details.appearance) ? {
                    label           : 'Nhìn tổng thể',
                    value           : details.appearance.label,
                    iconClass       : '',
        } : null;
        
        const glasses	=(details.glasses) ? {
                    label           : 'Cận thị ',
                    value           : details.glasses.label,
                    iconClass       : '',
        } : null;
        const tattoo		=(details.tattoo	) ? {
                    label           : 'Xăm hình',
                    value           : details.tattoo.label,
                    iconClass       : '',
        } : null;
        const plastic_surgery	=(details.plastic_surgery) ? {
                    label           : 'Phẫu Thuật thẩm mỹ',
                    value           : details.plastic_surgery.label,
                    iconClass       : '',
        } : null;
        const clothing	=(details.clothing	) ? {
                    label           : 'Thời trang',
                    value           : details.clothing.label,
                    iconClass       : '',
        } : null;
        const best_part	=(details.best_part) ? {
                    label           : 'Tự hào nhất cơ thể',
                    value           : details.best_part.label,
                    iconClass       : '',
        } : null;
        const smoking	=(details.smoking) ? {
                    label           : 'Hút thuốc',
                    value           : details.smoking.label,
                    iconClass       : '',
        } : null;
        const sport		=(details.sport) ? {
                    label           : 'Thể thao',
                    value           : details.sport.label,
                    iconClass       : '',
        } : null;
        //console.log(this.arrayToString(details.general_personality));
        const general_personality	=(details.general_personality) ? {
                    label           : 'Tính cách chung',
                    value           : this.arrayToString(details.general_personality),
                    iconClass       : '',
        } : null;
        const jealousy	=(details.jealousy) ? {
                    label           : 'Hay ghen không',
                    value           : details.jealousy.label,
                    iconClass       : '',
        } : null;
        const jobs		=(details.jobs) ? {
                    label           : 'Công việc',
                    value           : details.jobs.label,
                    iconClass       : '',
        } : null;
        const graduation		=(details.graduation) ? {
                    label           : 'Tốt nghiệp',
                    value           : details.graduation.label,
                    iconClass       : '',
        } : null;
        const majors		=(details.majors) ? {
                    label           : 'Ngành học',
                    value           : details.majors,
                    iconClass       : '',
        } : null;
        
        const asset_overview		=(details.asset_overview) ? {
                    label           : 'Tổng quan tài sản',
                    value           : details.asset_overview,
                    iconClass       : '',
        } : null;
        //console.log(details.house.label);
        const house		=(details.house) ? {
                    label           : 'Nhà riêng',
                    value           : details.house.label,
                    iconClass       : '',
        } : null;
        const cars		=(details.cars) ? {
                    label           : 'Xe ô tô con',
                    value           : details.cars.label,
                    iconClass       : '',
        } : null;
        const monthly_income		=(details.monthly_income) ? {
                    label           : 'Thu nhập hàng tháng',
                    value           : details.monthly_income,
                    iconClass       : '',
        } : null;
        
        const home_town		=(details.home_town) ? {
                    label           : 'Quê quán',
                    value           : details.home_town,
                    iconClass       : '',
        } : null;
        const religion		=(details.religion) ? {
                    label           : 'Tôn giáo',
                    value           : details.religion.label,
                    iconClass       : '',
        } : null;
        
        const home_town_return		=(details.home_town_return) ? {
                    label           : 'Số lần về quê',
                    value           : details.home_town_return,
                    iconClass       : '',
        } : null;
        
        const live_with	=(details.live_with) ? {
                    label           : 'Sống cùng ai',
                    value           : details.live_with.label,
                    iconClass       : '',
        } : null;
        const friends	=(details.friends) ? {
                    label           : 'Bạn bè',
                    value           : details.friends.label,
                    iconClass       : '',
        } : null;
        const pets		=(details.pets) ? {
                    label           : 'Thú cưng',
                    value           : details.pets.label,
                    iconClass       : '',
        } : null;  
        
        if(dob) _basic.push(dob);
        if(phones) _basic.push(phones);
        if(facebook) _basic.push(facebook);
        if(distance) _basic.push(distance);
        if(hhr_goal) _basic.push(hhr_goal);
        if(relationship_status) _basic.push(relationship_status);
        if(description) _basic.push(description);
        if(desc_wish) _basic.push(desc_wish);
        
        if(height) _figure.push(height);
        if(body_type) _figure.push(body_type);
        if(appearance) _figure.push(appearance);
        if(glasses) _figure.push(glasses);
        if(tattoo) _figure.push(tattoo);
        if(plastic_surgery) _figure.push(plastic_surgery);
        if(clothing) _figure.push(clothing);
        if(best_part) _figure.push(best_part);
        
        if(smoking) _favourites.push(smoking);
        if(sport) _favourites.push(sport);
        if(travel) _favourites.push(travel);
        
        if(general_personality) _personality.push(general_personality);
        if(jealousy) _personality.push(jealousy);
        
        if(jobs) _workEducation.push(jobs);
        if(graduation) _workEducation.push(graduation);
        if(majors) _workEducation.push(majors);
        
        if(asset_overview) _asset.push(asset_overview);
        if(house) _asset.push(house);
        if(cars) _asset.push(cars);
        if(monthly_income) _asset.push(monthly_income);
        
        if(home_town) _familyFriend.push(home_town);
        if(religion) _familyFriend.push(religion);
        if(home_town_return) _familyFriend.push(home_town_return);
        if(live_with) _familyFriend.push(live_with);
        
        if(friends) _familyFriend.push(friends);
        if(pets) _familyFriend.push(pets);
        
        
        
        
        
        
            
            
       /* 
        _basic      =[
                {
                    label           : 'Cung hoàng đạo',
                    value           : 'Kim ngưu',
                    iconClass       : icon.iconZodiac,
                 },
                 {
                    label           : 'Ngôn ngữ mong muốn',
                    value           : 'Tiếng Việt',
                    iconClass       : icon.iconLanguagePreferred, 
                 },
                 {
                    label           : 'Tình trạng mối quan hệ',
                    value           : 'Tôi độc thân',
                    iconClass       : icon.iconRelationship, 
                 },
                 {
                    label           : 'Xu hướng',
                    value           : 'Tôi bình thường',
                    iconClass       : icon.iconOrientation, 
                 },
                 {
                    label           : 'Công việc & trình độ',
                    value           : 'Tôi đã đi làm',
                    iconClass       : icon.iconWorkEducation, 
                 },
                 {
                    label           : 'Trình độ',
                    value           : 'Trường trung cấp',
                    iconClass       : icon.iconEducation, 
                 },
            
                 {
                    label           : 'Trình độ',
                    value           : 'Trường trung cấp',
                    iconClass       : icon.iconEducation, 
                 }
        ];*/
        const _data ={
            basic   :_basic,
            figure  :_figure,
            favourites  :_favourites,
            personality :_personality,
            workEducation:_workEducation,
            asset:_asset,
            familyFriend:_familyFriend,
        }
        //console.log(_data);
        const total_value=_basic.length + _figure.length + _favourites.length + _personality.length + _workEducation.length + _asset.length + _familyFriend.length;
        return(
            <div className="tw3-profile__body__box jsIndexDetails">
                <h5 className="tw3-h5 text--bold tw3-h5 mb--default">HỒ SƠ CHI TIẾT</h5>
                <a href="javascript://" className="tw3-button tw3-button--subtle tw3-button--blue tw3-button--full tw3-button--rounded mb--default jsSwitchView" onClick={this.handleSwitchView}>
                    TÙY CHỈNH SƠ YẾU CỦA BẠN
                </a>
                <div className="tw3-showMoreContainer jsShowMoreContainer" style={{height: !this.state.showMoreActive ? '200px' : 'auto' }} >
{ _data.basic && _data.basic.length > 0 &&
          
                <div className="basic mb--default">
                <div className="tw3-field">
                <div className="tw3-field__view clearfix">
                <div className="tw3-row">
                    <div className="tw3-col-12">
{
    _data.basic.map((d,i)=> { return (
                    <div className="tw3-row" key={i}>
                        <div className="tw3-col-6">
                        <p className="tw3-field-title text--subtle"><i className={`mr--compact ${d.iconClass}`}></i>{d.label}</p>
                        </div>
                        <div className="tw3-col-6">
                        <p className="tw3-field-value text--right">{d.value}
                        </p>
                        </div>
                    </div>
            
            )})                    
}
                </div>
                </div>
                </div>
                </div>
                </div>
}
{_data.figure && _data.figure.length > 0 &&
         <div className="looks mb--default">
                <h5 className="mb--default text--bold">DÁNG VẺ</h5>
                <div className="tw3-field">
                <div className="tw3-field__view clearfix">
                <div className="tw3-row">
                <div className="tw3-col-12">
{_data.figure.map((d,i)=> { return (
                    <div className="tw3-row" key={i}>
                        <div className="tw3-col-6">
                        <p className="tw3-field-title text--subtle"><i className={`mr--compact ${d.iconClass}`}></i>{d.label}</p>
                        </div>
                        <div className="tw3-col-6">
                            <p className="tw3-field-value text--right">{d.value}</p>
                        </div>
                    </div>
            
            )}) 
}
                </div>
                </div>
                </div>
                </div>
                </div>
}
                
{_data.personality && _data.personality.length > 0 &&
                <div className="personality mb--default">
                <h5 className="mb--default text--bold">TÍNH CÁCH</h5>
                <div className="tw3-field">
                <div className="tw3-field__view clearfix">
                <div className="tw3-row">
                <div className="tw3-col-12">
{       _data.personality.map((d,i)=> { return (
                    <div className="tw3-row" key={i}>
                        <div className="tw3-col-6">
                        <p className="tw3-field-title text--subtle"><i className={`mr--compact ${d.iconClass}`}></i>{d.label}</p>
                        </div>
                        <div className="tw3-col-6">
                            <p className="tw3-field-value text--right">{d.value}</p>
                        </div>
                    </div>
            
            )})   
}
                </div>
                </div>
                </div>
                </div>
                </div>
}
                
{ _data.favourites && _data.favourites.length >0 &&
                <div className="favourites">
                <h5 className="mb--default text--bold">DANH SÁCH YÊU THÍCH</h5>
                <div className="tw3-field">
                <div className="tw3-field__view clearfix">
                <div className="tw3-row">
                <div className="tw3-col-12">
           { _data.favourites.map((d,i)=> { return (
                    <div className="tw3-row" key={i}>
                        <div className="tw3-col-6">
                        <p className="tw3-field-title text--subtle"><i className={`mr--compact ${d.iconClass}`}></i>{d.label}</p>
                        </div>
                        <div className="tw3-col-6">
                            <p className="tw3-field-value text--right">{d.value}</p>
                        </div>
                    </div>
            
            )})    
            }
                
                </div>
                </div>
                </div>
                </div>
                </div>  
}
{ _data.workEducation && _data.workEducation.length >0 &&
                <div className="workEducation">
                <h5 className="mb--default text--bold">HỌC TẬP CÔNG VIỆC</h5>
                <div className="tw3-field">
                <div className="tw3-field__view clearfix">
                <div className="tw3-row">
                <div className="tw3-col-12">
           { _data.workEducation.map((d,i)=> { return (
                    <div className="tw3-row" key={i}>
                        <div className="tw3-col-6">
                        <p className="tw3-field-title text--subtle"><i className={`mr--compact ${d.iconClass}`}></i>{d.label}</p>
                        </div>
                        <div className="tw3-col-6">
                            <p className="tw3-field-value text--right">{d.value}</p>
                        </div>
                    </div>
            
            )})    
            }
                
                </div>
                </div>
                </div>
                </div>
                </div>  
}
{ _data.asset && _data.asset.length >0 &&
                <div className="asset">
                <h5 className="mb--default text--bold">TÀI CHÍNH</h5>
                <div className="tw3-field">
                <div className="tw3-field__view clearfix">
                <div className="tw3-row">
                <div className="tw3-col-12">
           { _data.asset.map((d,i)=> { return (
                    <div className="tw3-row" key={i}>
                        <div className="tw3-col-6">
                        <p className="tw3-field-title text--subtle"><i className={`mr--compact ${d.iconClass}`}></i>{d.label}</p>
                        </div>
                        <div className="tw3-col-6">
                            <p className="tw3-field-value text--right">{d.value}</p>    
                        </div>
                    </div>
            
            )})    
            }
                
                </div>
                </div>
                </div>
                </div>
                </div>  
}
{ _data.familyFriend && _data.familyFriend.length >0 &&
                <div className="familyFriend">
                <h5 className="mb--default text--bold">GIA ĐÌNH, BẠN BÈ</h5>
                <div className="tw3-field">
                <div className="tw3-field__view clearfix">
                <div className="tw3-row">
                <div className="tw3-col-12">
           { _data.familyFriend.map((d,i)=> { return (
                    <div className="tw3-row" key={i}>
                        <div className="tw3-col-6">
                        <p className="tw3-field-title text--subtle"><i className={`mr--compact ${d.iconClass}`}></i>{d.label}</p>
                        </div>
                        <div className="tw3-col-6">
                            <p className="tw3-field-value text--right">{d.value}</p>
                        </div>
                    </div>
            
            )})    
            }
                
                </div>
                </div>
                </div>
                </div>
                </div>  
}
</div>
{ total_value > 5  &&     
    <div>
        { (!this.state.showMoreActive) ? (
            <div className="tw3-showMore mb--loose">
                    <a href="javascript://" className="jsShowMoreButton" onClick={this.handleShowMore}>
                    XEM THÊM
                    </a>
            </div>
        ):(
            <div className="tw3-showMore mb--loose active">
                    <a href="javascript://" className="jsShowMoreButton" onClick={this.handleShowMore}>
                    XEM ÍT HƠN
                    </a>
            </div>
        ) 
            
        }
    </div>
}
                
            
                </div>

        )
    }
}
function mapStateToProps(state){
    return state;
}
const connected = connect(mapStateToProps)(ViewIndexDetail);
export { connected as ViewIndexDetail }