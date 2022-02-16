import React from "react";
import calendar from "../img/u_calendar-alt.png";
import {useState} from "react";
import Modal_calendar from "./modal_calendar";

const Detail_date = ( value:any) => {

    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="detail_date"  >
            <div className="form_detail-date" >
                <p className="status_date">{value.status_date}</p>
                <div className="form_date">
                    <span className="date_target">{value.date_target}</span>
                    <img src={calendar} alt=""  className="select_date_icon" onClick={() => setIsOpen(true)}  />
                </div>
            </div>
            
            {isOpen && <Modal_calendar setIsOpen={setIsOpen} />}

        </div>
    )
}
export default Detail_date