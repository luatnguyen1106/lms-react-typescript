import React from "react";
function Detail_item(value:any){
    return(
        <div className="table-content-item">
             <input type="checkbox" className="detail_checkbox_content" />
            <p className="detail-content-order">
                            {value.detail_order}
            </p>
            <div className="content-name-detail">
                <p className="detail-content-name">
                            {value.detail_name}
                            
                </p>
            </div>
            
            <p className="detail_content-code">
                            {value.detail_code}
            </p>
        </div>
    )
}
export default Detail_item;