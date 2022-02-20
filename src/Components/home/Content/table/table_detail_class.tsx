import React from "react";
import Detail_class from "./detail_class";
import { Link } from "react-router-dom";
import add from "../img/fi_plus.png";
import Tariff_content from "./table_detail_content";
import Popup from "reactjs-popup";
import {useState} from "react";
import Modal_detail from "../modal/modal_detail/modal_add_detail";



function Table_detail_class(){
   const [isOpen, setIsOpen] = useState(false);
    return(
        
            <div className="table_content">
                <div className="table_content_content">
                    <div className="detail_form">

                    <div className="detail_class">
                        <div className="chill_detail">
                        <Detail_class 
                            detail_name = "Lớp:"
                            detail_content = "KT19A"
                         />
                         <Detail_class 
                            detail_name = "Khoa:"
                            detail_content = "Kế toán - Kiểm toán"
                         />
                         <Detail_class 
                            detail_name = "Ngành:"
                            detail_content = "Kế Toán"
                         />
                        </div>
                        <div className="chill_detail">
                        <Detail_class 
                            detail_name = "Hệ đào tạo:"
                            detail_content = "Đào tạo theo tín chỉ"
                         />
                         <Detail_class 
                            detail_name = "Chương trình học:"
                            detail_content = "Đại trà"
                         />
                         <Detail_class 
                            detail_name = "Niên khóa:"
                            detail_content = "2019 - 2022"
                         />
                        </div>
                    </div>
                    
                    </div>
                    
                    <Link className="list_student" to={'/liststudent'}> 
                       <button className="button__list-student">Danh sách học viên</button>
                    </Link>

                    <div className="quantity_tariff">
                       <p className="tariff_name">Số lượng biểu phí:</p>
                       <p className="tariff_number"> 02 </p>
                    </div>

                    <div className="list_tariff">
                        <p className="list_tariff_name">
                           Danh sách biểu phí
                        </p>
                        <button className="button_add_tariff" onClick={() => setIsOpen(true)}  >
                           <img src={add} alt="" className="icon_add_tariff"/>
                           Thêm biểu phí
                           </button>
                        
                        
                    </div>

                    <div className="table_tariff">
                        <div className="table_tariff_heading">
                        <div className="tariff_heading_info">
                           <p className="tariff_heading_item">Tên biểu phí</p>
                           <p className="tariff_heading_item">Ngày cập nhât</p>
                           <p className="tariff_heading_item">Trạng thái</p>
                        </div>
                        <div className="link_tariff_detail">
                           <p className="tariff_heading_item">Xem chi tiết</p>
                        </div>
                       
                        </div>

                        <div className="table_tariff_content">
                           <div className="tariff_content">
                           <Tariff_content
                           tariff_name = "1. Biểu phí thu học phí"
                           tariff_date = "01/07/2021"
                           tariff_status = "Chưa áp dụng"
                           />
                           </div>
                           <div className="tariff_content bg_grey">
                           <Tariff_content
                           tariff_name = "2. Biểu phí thu Bảo hiểm Y tế"
                           tariff_date = "01/07/2021"
                           tariff_status = "Chưa áp dụng"
                           />
                           </div>
                           
                        </div>
                    </div>
                </div>
              
                
                {isOpen && <Modal_detail setIsOpen={setIsOpen} />}
                
            </div>
        
        
    )
}
export default Table_detail_class;