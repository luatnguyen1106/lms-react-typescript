import React, {Component} from "react";
import Account from "./account/account";
import Title_home from "./title/title";
import Table_detail_class from "./table/table_detail_class";
import TitleBack from "./title/title_back";
import TitleTarget from "./title/title_target";
import FaChevronRight from "./img/chevron_big_right.png"
import "./table/css/list_student.css"
import "./table/css/table.css"
import Table_list_student from "./table/table_list_student";

export default class List_student_content extends Component{
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
               
               <p className="list_student_name_table">Danh sách học viên</p>
               
               <Table_list_student/>
            </div>
           
            
            
        )
    }
}