import React from "react";
import "../css/table.css"

function Number_on_page (value:any){
    return(
        <div className="return_num">
            Hiển thị 
            <span className="num_return" >{value.number}</span>
            hàng trong mỗi trang
        </div>

        
    )
}
export default Number_on_page;