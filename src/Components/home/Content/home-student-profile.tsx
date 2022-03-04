import React from "react";
import Account from "./account/account";
import TitleBack from "./title/title_back";
import TitleTarget from "./title/title_target";
import right from "./img/chevron_big_right.png";
import Table_student_profile from "./table/table_student_profile/table_student_profile";


function Student_profile () {
    return(
        <div className="home-content">
            <Account 
            user_name = "Luật Nguyễn"
            />
            <div className="content_address">
                <TitleBack title_back_name = "Quản lý học phí"/>
                <img src={right} alt="" className="title_home-icon"/>
                <TitleBack title_back_name = "..."/>
                <img src={right} alt="" className="title_home-icon"/>
                <TitleBack title_back_name = "Chi tiết lớp học"/>
                <img src={right} alt="" className="title_home-icon"/>
                <TitleTarget title_target_name = "Chi tiết học viên"/>
                
            </div>

            <p className="student_profile_title">Hồ sơ học viên</p>

            <Table_student_profile/>
        </div>
    )
}
export default Student_profile;