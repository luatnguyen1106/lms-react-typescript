import React from "react";
function Detail_class (value : any){
    return(
        <div className="form__detail">
            <div className="from__detail-chill"> <p className="detail__name">{value.detail_name}</p></div>
           <div className="from__detail-chill"> <p className="detail__content">{value.detail_content}</p></div>
           
        </div>
    )
}
export default Detail_class;