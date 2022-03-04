import React, {Component} from "react";
import Account from "./account/account";
import Title_home from "./title/title";
import Table_detail_class from "./table/table_detail_class/table_detail_class";
import TitleBack from "./title/title_back";
import TitleTarget from "./title/title_target";
import FaChevronRight from "./img/chevron_big_right.png"


export default class Detail_Class extends Component{
    render(){
        return(
            
                <div className="home-content">
                <Account
                user_name = "Luật Nguyễn"
                />
                <div className="content-address">
                <TitleBack title_back_name = "Quản lý học phí"/>
                <img src={FaChevronRight} className="title_home-icon" />
               <TitleBack title_back_name = "Danh sách lớp học"/>
               <img src={FaChevronRight} className="title_home-icon" />
                <TitleTarget title_target_name = "Chi tiết lớp học"/>
                </div>
               
                <Table_detail_class/>
               
            </div>
           
            
            
        )
    }
}