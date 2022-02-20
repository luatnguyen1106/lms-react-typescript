import React from "react";
import { Update_schedule_detail } from "../../../data/data_schedule_detail";
function Table_schedule_detail (){
    return(
        <div className="table_schedule_detail">
            <div className="table_schedule_detail_content">
                <div className="table_schedule_detail_heading">
                    <p className="schedule_detail_heading_item">Thời gian</p>
                    <p className="schedule_detail_heading_item">Nội dung cập nhât</p>
                    <p className="schedule_detail_heading_item">Trạng thái</p>

                </div>
                <div className="table_schedule_detail_update">
                    <ul className="list_schedule_detail_update">
                        {Update_schedule_detail.map((schedule, index) => {
                            return(
                                <li className="list_schedule_detail_update_item">
                                    <span className="schedule_detail_update_item_time">{schedule.time_update}</span>
                                    <span className="schedule_detail_update_item_content">{schedule.content_update}</span>
                                    <span className="schedule_detail_update_item_status">{schedule.status_update}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div> 
            </div>
        </div>
    )
}
export default Table_schedule_detail;