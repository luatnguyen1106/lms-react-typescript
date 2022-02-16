import React from "react";
import { Link } from "react-router-dom";
import icon_button from "../img/icon button.png";

function Tariff_content (value:any){
    return(
        <div className="tariff_content_item">
            <div className="tariff_content_info">
                <p className="tariff_content_name">{value.tariff_name}</p>
                <p className="tariff_content_date">{value.tariff_date}</p>
                <p className="tariff_content_status">{value.tariff_status}</p>
                <p className="tariff_content_stop">Ngừng hoạt động</p>
            </div>
            <div className="link_tariff_detail ">
                <Link className="homepg" to={'/detail'}> 
                     <a href=""> <img src={icon_button} className="tariff_link"/>
                    </a>
                </Link>
            </div>
</div>
    )
}
export default Tariff_content;