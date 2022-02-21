import React from "react";
import Form_student_profile from "./form_student_profile";
import Table_content_student_profile from "./table_content_student_profile";

function Table_student_profile () {
    return(
        <div className="table_student_profile">
            <div className="student_profile_content">
                <Form_student_profile />
                
                <div className="table_student_profile_content">
                    <div className="summary_sheet_name">
                        Phiếu thu tổng hợp đã đóng
                    </div>
                    <Table_content_student_profile/>
                </div>
                

            </div>
        </div>
    )
}
export default Table_student_profile