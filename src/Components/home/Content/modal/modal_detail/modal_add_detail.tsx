import React from "react";
import "../modal_detail.css"
import updown from "../img/u_arrow up down.png"
import Detail_item from "./detail_table_item";
import Detail_date from "./detail_date";
import { RiCloseLine } from "react-icons/ri";
import {useState} from "react";



const Modal_detail = ({ setIsOpen } : {setIsOpen : any}) => {
    
    
    return(
        <div className="modal" >
            <div className="modal_overlay">
                
           
            </div>
            <div className="modal_body">
                 <div className="modal_content" >
                    <h1 className="modal_detail-heading">Thêm biểu phí</h1>
                    <div className="modal_detail-table">
                        <div className="detail-table-heading">
                            <input type="checkbox" className="detail_checkbox" />
                            <p className="detail-heading-order">STT</p>
                            <p className="detail-heading-name">
                            Tên biểu phí
                            <img src={updown} alt="up and down" className="detail-heading-name-icon" />
                             </p>
                            <p className="detail_heading-code">
                                Mã biểu phí
                            </p>
                         </div>

                         <div className="detail-table-content">
                             <div className="table_content_detail">
                                <Detail_item
                                    detail_order = "1"
                                    detail_name = "Thu phí ghi danh xếp lớp"
                                    detail_code = "01_GD"
                                />
                             </div>
                             <div className="table_content_detail bggrey">
                                <Detail_item
                                    detail_order = "2"
                                    detail_name = "Thu phí nhập học"
                                    detail_code = "02_NH"
                                />
                             </div>
                             <div className="table_content_detail">
                                <Detail_item
                                    detail_order = "3"
                                    detail_name = "Thu phí thu học kì I"
                                    detail_code = "03_HKI"
                                />
                             </div>
                             <div className="table_content_detail bggrey">
                                <Detail_item
                                    detail_order = "4"
                                    detail_name = "Thu phí học tín chỉ"
                                    detail_code = "04_TC"
                                />
                             </div>
                             <div className="table_content_detail">
                                <Detail_item
                                    detail_order = "5"
                                    detail_name = "Thu phí tốt nghiệp"
                                    detail_code = "05_TN"
                                />
                             </div>
                             <div className="table_content_detail bggrey">
                                <Detail_item
                                    detail_order = "6"
                                    detail_name = "Thu phí cơ sở vật chất"
                                    detail_code = "06_CSVC"
                                />
                             </div>
                             <div className="table_content_detail">
                                <Detail_item
                                    detail_order = "7"
                                    detail_name = "Thu phí phục vụ nội trú"
                                    detail_code = "07_PVNT"
                                 />
                             </div>
                             
                         </div>

                         <div className="modal_date" >
                                <div className="modal_date_start">
                                    
                                    <Detail_date
                                    status_date = "Ngày bắt đầu:"
                                    date_target = "02/12/2022"
                                    />
                                   
                                
                                </div>
                                <div className="modal_date_end">
                                <Detail_date
                                    status_date = "Ngày kết thúc:"
                                    date_target = "02/12/2022"
                                />
                                </div>
                                
                         </div>
                         <div className="modal_detail_button">
                             <button className="button_detail_close" onClick={() => setIsOpen(false)}>Hủy</button>
                             <button className="button_detail_save">Lưu</button>
                         </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}
export default Modal_detail;