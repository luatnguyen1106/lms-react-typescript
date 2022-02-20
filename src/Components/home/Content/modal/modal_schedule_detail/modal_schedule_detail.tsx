import React from "react";
import "../modal_schedule_detail.css"
import cancel from "../img/fi_x-cancel.png"
import Form_schedule_detail from "./modal_form_schedule_detail";
import Date_update_schedule from "./modal_date_update_schedule_detail";
import Table_schedule_detail from "./modal_table_schedule_detail";


const Modal_schedule_detail =  ({ setIsOpen_Schedule_detail } : {setIsOpen_Schedule_detail : any}) =>{
    return(
        <div className="modal_schedule">
            <div className="modal_overlay_schedule">

            </div>
            <div className="modal_body_schedule">
                <div className="body_schedule_control">
                        <img src={cancel} onClick={() => setIsOpen_Schedule_detail(false)}></img>
                </div>
                <div className="body_schedule_content">
                    <div className="schedule_content_heading">
                        <h1 className="schedule_content_heading_item">Chi tiết biểu phí</h1>
                    </div>
                    <Form_schedule_detail
                        title_schedule_detail = "Thu học phí"
                        schedule_detail_value_1 = "1. Hồ sơ ghi danh"
                        schedule_detail_value_2 = "2. Phí ghi danh"
                        schedule_detail_id = "10_BHYT"
                        schedule_detail_year = "2020 - 2023"
                    />
                    <Date_update_schedule
                        schedule_date = "02/07/2021"
                    />
                    <Table_schedule_detail/>
                </div>
                
                
                
            </div>
        </div>
    )
}
export default Modal_schedule_detail;