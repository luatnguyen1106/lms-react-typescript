import React, {Component} from "react";
import FaChevronRight from "../img/chevron_big_right.png"
import TitleTarget from "./title_target";
import TitleBack from "./title_back";

export default class Title_home extends Component{
    render(){
        return(
             <div className="content-address">
                <TitleBack title_back_name = "Quản lý học phí"/>
                <img src={FaChevronRight} className="title_home-icon" />
                <TitleTarget title_target_name = "Danh sách lớp học"/>
            </div> 
        )
    }
}