import React from "react";
function Date_update_schedule (value:any){
    return(
        <div className="date_update_schedule">
            <p className="date_update">Ngày cập nhật:</p>
            <p className="schedule_date">{value.schedule_date}</p>
        </div>
    )
}
export default Date_update_schedule;