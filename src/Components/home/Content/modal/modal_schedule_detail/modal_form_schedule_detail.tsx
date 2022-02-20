import React from "react";

function Form_schedule_detail(value:any) {
    return(
        <div className="form_schedule_detail">
                        <div className="form_schedule_detail_heading">
                            <div className="form_schedule_detail_heading--item">
                                <p className="schedule_detail_heading--item_heading">{value.title_schedule_detail}</p>
                                <div className="schedule_detail_heading--item_detail">
                                    <p className="schedule_detail_value">{value.schedule_detail_value_1}</p>
                                    <p className="schedule_detail_value">{value.schedule_detail_value_2}</p>
                                </div>
                                
                            </div>
                            <div className="form_schedule_detail_heading--item">
                                    <p className="schedule_detail_id">
                                        <span>Mã biểu phí:</span>{value.schedule_detail_id}</p>
                                    <p className="schedule_detail_year">
                                        <span>Niên khóa:</span>{value.schedule_detail_year}</p>
                            </div> 
                        </div>
                    </div>
    )
}
export default Form_schedule_detail;