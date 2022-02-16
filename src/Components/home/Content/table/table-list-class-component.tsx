import { Component, ReactNode } from "react";
import caret_down from "../img/caret_down.png";
import "./css/table-list-class.css";
import icon_button from "../img/icon button.png";
import DropDown_item from "./dropdown_item";
import Table_content from "./table_content";

export default class Table_list_class extends Component{
    

    render() {
        // const Class = [
        //     {
        //         STT: "1",
        //         ClassID: "19 123 03A",
        //         ClassName: "KT19A",
        //         Quantily: "1",
        //         Date: "01/07/2021"
        //     },

        //     {
        //         STT: "2",
        //         ClassID: "19 123 03B",
        //         ClassName: "KT19B",
        //         Quantily: "2",
        //         Date: "01/07/2021"
        //     },

        //     {
        //         STT: "3",
        //         ClassID: "19 123 03A",
        //         ClassName: "KT19A",
        //         Quantily: "1",
        //         Date: "01/07/2021"
        //     },

        //     {
        //         STT: "4",
        //         ClassID: "19 123 03B",
        //         ClassName: "KT19B",
        //         Quantily: "2",
        //         Date: "01/07/2021"
        //     },

        //     {
        //         STT: "5",
        //         ClassID: "19 123 03A",
        //         ClassName: "KT19A",
        //         Quantily: "1",
        //         Date: "01/07/2021"
        //     },

        //     {
        //         STT: "6",
        //         ClassID: "19 123 03B",
        //         ClassName: "KT19B",
        //         Quantily: "2",
        //         Date: "01/07/2021"
        //     },

        //     {
        //         STT: "7",
        //         ClassID: "19 123 03A",
        //         ClassName: "KT19A",
        //         Quantily: "1",
        //         Date: "01/07/2021"
        //     },

        //     {
        //         STT: "8",
        //         ClassID: "19 123 03B",
        //         ClassName: "KT19B",
        //         Quantily: "2",
        //         Date: "01/07/2021"
        //     }
        // ] 
        return(
            <div className="table_content">
                <div className="table_content_content">
                <div className="table_heading_list_class">
                    <div className="table_heading_nav">
                        <div className="table_heading_select">
                    <span className="table_heading_title">Hệ đào tạo</span>
                    <div className="table_heading_form_select">
                        <span className="select_name">Theo tín chỉ </span>
                        <img src={caret_down} className="select_icon_img"/>
                        <div className="from_select_list">
                            <ul className="select_list">
                            <DropDown_item 
                                DP_link = "#"
                                DP_item_name="Theo tín chỉ"/>
                            <DropDown_item 
                                DP_link = "#"
                                DP_item_name="Theo tháng"/>
                            </ul>
                        </div>
                    </div>
                        </div>

                        <div className="table_heading_select">
                    <span className="table_heading_title">Niên khóa</span>
                    <div className="table_heading_form_select">
                        <span className="select_name">Chọn niên khóa</span>
                        <img src={caret_down} className="select_icon_img"/>
                        <div className="from_select_list">
                            <ul className="select_list">
                            <DropDown_item
                                DP_link = "#" 
                                DP_item_name="2020 - 2021"/>
                            <DropDown_item 
                                DP_link = "#"
                                DP_item_name="2019 - 2020"/>
                            <DropDown_item 
                                DP_link = "#"
                                DP_item_name="2018 - 2019"/>
                            </ul>
                        </div>
                    </div>
                        </div>

                        <div className="table_heading_select">
                    <span className="table_heading_title">Khoa</span>
                    <div className="table_heading_form_select">
                        <span className="select_name">Chọn khoa</span>
                        <img src={caret_down} className="select_icon_img"/>
                        <div className="from_select_list">
                            <ul className="select_list">
                            <DropDown_item
                                DP_link = "#" 
                                DP_item_name="Quản trị kinh doanh"/>
                            <DropDown_item 
                                DP_link = "#"
                                DP_item_name="Kế toán - Kiểm toán"/>
                            <DropDown_item 
                                DP_link = "#"
                                DP_item_name="Tài chính ngân hàng"/>
                            <DropDown_item 
                                DP_link = "#"
                                DP_item_name="Kinh tế đối ngoại"/>
                            <DropDown_item 
                                DP_link = "#"
                                DP_item_name="Hệ thống thông tin"/>
                            <DropDown_item 
                                DP_link = "#"
                                DP_item_name="Tất cả"/>
                            </ul>
                        </div>
                    </div>
                        </div>

                        <div className="table_heading_select">
                    <span className="table_heading_title">Ngành</span>
                    <div className="table_heading_form_select">
                        <span className="select_name">Chọn nghành</span>
                        <img src={caret_down} className="select_icon_img"/>
                        <div className="from_select_list">
                            <ul className="select_list">
                                <DropDown_item
                                DP_link = "#" 
                                DP_item_name="Kiểm toán"/>
                            <DropDown_item 
                                DP_link = "#"
                                DP_item_name="Kế toán"/>
                            <DropDown_item 
                                DP_link = "#"
                                DP_item_name="Tất cả"/>
                            </ul>
                        </div>
                    </div>
                        </div>

                        <div className="table_heading_search">

                        </div>
                    </div>
                    <input type='text' className="heading_search_input" placeholder="Nhập tên hoặc mã lớp học">
                    </input>
                
                </div>
                </div>
                
                <div className="table_content_list_class">
                <div className="content_list_class__heading">
                        <p className="content_list_class__heading_item">STT</p>
                        <p className="content_list_class__heading_item">Mã lớp</p>
                        <p className="content_list_class__heading_item">Tên lớp</p>
                        <p className="content_list_class__heading_item">Số lượng biểu phí</p>
                        <p className="content_list_class__heading_item">Ngày cập nhật</p>
                </div>
                    <div className="content_list_class">
                    <div className="content_list_class__content">
                        <Table_content 
                            STT = "1"
                            ClassID = "19 123 03A"
                            ClassName = "KT19A"
                            Quantily = "1"
                            Date = "01/07/2021"
                        />
                    </div>
                   
                   
                    <div className="content_list_class__content bg_light_grey">
                        <Table_content
                            STT = "2"
                            ClassID = "19 123 03B"
                            ClassName = "KT19B"
                            Quantily = "2"
                            Date = "01/07/2021"
                        />
                    </div>
                    <div className="content_list_class__content">
                        <Table_content 
                            STT = "3"
                            ClassID = "19 123 03A"
                            ClassName = "KT19A"
                            Quantily = "1"
                            Date = "01/07/2021"
                        />
                    </div>
                    <div className="content_list_class__content bg_light_grey">
                         <Table_content
                            STT = "4"
                            ClassID = "19 123 03B"
                            ClassName = "KT19B"
                            Quantily = "2"
                            Date = "01/07/2021"
                            />

                    </div>
                    <div className="content_list_class__content">
                        <Table_content 
                            STT = "5"
                            ClassID = "19 123 03A"
                            ClassName = "KT19A"
                            Quantily = "1"
                            Date = "01/07/2021"
                        />

                    </div>
                    <div className="content_list_class__content bg_light_grey">
                         <Table_content
                            STT = "6"
                            ClassID = "19 123 03B"
                            ClassName = "KT19B"
                            Quantily = "2"
                            Date = "01/07/2021"
                            />


                    </div>
                    <div className="content_list_class__content">
                        <Table_content 
                            STT = "7"
                            ClassID = "19 123 03A"
                            ClassName = "KT19A"
                            Quantily = "1"
                            Date = "01/07/2021"
                        />
                    </div>
                    <div className="content_list_class__content bg_light_grey">
                         <Table_content
                            STT = "8"
                            ClassID = "19 123 03B"
                            ClassName = "KT19B"
                            Quantily = "2"
                            Date = "01/07/2021"
                            />

                    </div>
                    </div>
                    
                </div>
                <div className="table_footer_list_class">
                        <div className="footer_list_class__description">
                            <p>Hiển thị
                                <span className="footer_list_class__view_page">8</span> 
                                hàng trong mỗi trang</p>
                            
                           
                        </div>
                </div>
                </div>
                
            
        )
    }
}