import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userActions } from "../actions";
import { history } from "../store";
class BoxViewPagination extends React.Component{
    constructor(props){
        super(props);
        const { page }   = this.props;
        this.state={
            page    : page,
            total   : 1,
        }
        this.handlePage=this.handlePage.bind(this);
    } 
    handlePage(e){        
        this.props.dispatch(userActions.getMemberActive(e));
        this.setState({
            page: e
        })
    }
    componentDidMount(){
        const { memberActive}   = this.props;
        
        this.setState({
            })
    }
    render(){
        const url               ="/home";
        const { page }          =this.state;
        const { memberActive}   = this.props;
        const total= (memberActive.items && memberActive.items.total) ? memberActive.items.total : 1
        
        var currentPage      =page;
        var lastPage         =false;
        var firstPage        =false;
        var dotLast          =false;
        var dotFirst         =false;   
        var nextPage      =currentPage+1;
        var previousPage  =currentPage-1;
        var activePage    =currentPage;
        var groupPage=[previousPage,currentPage,nextPage];
        
        
        if(currentPage==1){
            activePage          =1;
            previousPage        =activePage;
            nextPage            =activePage+1;
            firstPage           =true;
            groupPage=[activePage,activePage+1,activePage+2];
        }
        if(previousPage > 1){
            dotFirst         =true;
        }
        if(total - currentPage <= 2 ){
            activePage      =currentPage;
            previousPage    =(total-4) > 0 ? (total-4) : 1 ;
            currentPage     =(total-3) > 0 ? (total-3) : 1 ;
            nextPage        =(total-2) > 0 ? (total-2) : 1 ;;
            var page1       =(total-1) > 0 ? (total-1) : 1 ;; 
            var page2       =total;
            switch(total){
                case 1 :
                     dotFirst   =false;
                     groupPage  =[1];
                     break;
                case 2 :
                     dotFirst   =false;
                     groupPage  =[1,2];
                    break;
                case 3 :
                     dotFirst   =false;
                     groupPage  =[1,2,3];
                    break;
                case 4 :
                     dotFirst   =false;
                     groupPage  =[1,2,3,4];
                    break;
                default:
                     groupPage =[previousPage,currentPage,nextPage,page1,page2];
                    break;
            }
        }else{
            dotLast         =true;
        }
        if(page >= total){
            activePage      =total;
            lastPage        =true;
            
        }
        if(total == 1){
             lastPage         =true;
             firstPage        =true;
             dotLast          =false;
             dotFirst         =false;
             groupPage=[1];
        }
        return(
            <div className="text--center tw3-col-hide tw3-bp3-col-show-block">
                <div className="tw3-pager tw3-paging tw3-swap jsPager" >
                    { firstPage ? (
                            <span className="tw3-pager__item disabled first jsPrevious">
                                <i className="tw3-iconArrowBack"></i> 
                                <span className="tw3-pager__item__span">Trước</span>
                            </span>
                        ) : (
                            <Link to={`${url}?page=${previousPage}`} onClick={() => this.handlePage(previousPage)}  className="tw3-pager__item first jsPagerItem" >
                                <i className="tw3-iconArrowBack"></i>
                                <span className="first tw3-pager__item__span">Trước</span>
                            </Link>
                            
                        )
                    }    
                    { dotFirst &&
                      <span className="tw3-pager__item dots">...</span>  
                    }
                    {
                        groupPage.map((e,i)=>{
                            return e==activePage ? 
                                    <span className="tw3-pager__item current jsCurrent" key={i}>{e}</span>
                                :
                                <Link to={`${url}?page=${e}`} onClick={() => this.handlePage(e)} key={i} className="tw3-pager__item jsPagerItem">
                                        <span>{e}</span>
                                    </Link>
                                
                     
                        })       
                    }
                    { dotLast &&
                        <span className="tw3-pager__item dots">...</span>
                    }
                    { lastPage ? (
                            <span className="tw3-pager__item disabled last">
                                <span className="tw3-pager__item__span">Tiếp</span> <i className="tw3-iconArrowNext"></i>
                            </span>
                        ) : (
                            
                            <Link to={`${url}?page=${nextPage}`} onClick={() => this.handlePage(nextPage)} className="tw3-pager__item last jsPagerItem">
                                <span className="tw3-pager__item__span">Tiếp</span> 
                                <i className="tw3-iconArrowNext"></i>
                            </Link>
                            
                        )
                        
                    }
                    
                    
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    const {memberActive} =state;
    return { memberActive };
}
const connectedBoxViewPagination = connect(mapStateToProps)(BoxViewPagination);
export { connectedBoxViewPagination as BoxViewPagination}