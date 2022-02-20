import React from "react";
import unionleft from "./img/Unionleft.png"
import unionright from "./img/Unionright.png"
import "./css/table.css"

function Number_page (value:any){
    <div className="number_page">
        <img src={unionleft} alt="" />
        <p className="number_on">
            1 2 3 ... 100</p>
        <img src={unionright} alt="" />
    </div>
}
export default Number_page;