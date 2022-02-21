import React from "react";
import { Link } from "react-router-dom";
import icon_button from "../../img/icon button.png";
import {useState} from "react";
import Modal_schedule_detail from "../../modal/modal_schedule_detail/modal_schedule_detail";

const Tariff_content = (value:any) => {
    const [isOpen_Schedule_detail, setIsOpen_Schedule_detail] = useState(false);
    return(
        <div className="tariff_content_item">
            <div className="tariff_content_info">
                <p className="tariff_content_name">{value.tariff_name}</p>
                <p className="tariff_content_date">{value.tariff_date}</p>
                <p className="tariff_content_status">{value.tariff_status}</p>
                <p className="tariff_content_stop">Ngừng hoạt động</p>
            </div>
            <div className="link_tariff_detail ">
                <div className="schedule_detail" onClick={() => setIsOpen_Schedule_detail(true)} > 
                      <img src={icon_button} className="tariff_link" />
                
                </div>
            </div>
            {isOpen_Schedule_detail && <Modal_schedule_detail setIsOpen_Schedule_detail={setIsOpen_Schedule_detail} />}
        </div>
    )
}
export default Tariff_content;