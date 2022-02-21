import React from "react";
function DropDown_item (value:any){
    return(
        <li className="select_item">
        <a href={value.DP_link} className="select_item_link">{value.DP_item_name}</a> 
        </li>
    )
}
export default DropDown_item;