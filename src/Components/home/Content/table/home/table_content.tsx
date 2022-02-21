import React from "react";
import icon_button from "../../img/icon button.png";
import { Link } from "react-router-dom";
function Table_content(des:any){
    // const Class = [
    //     {
    //         STT: "1",
    //         ClassID: "19 123 03A",
    //         ClassName: "KT19A",
    //         Quantily: "1",
    //         Date: "01/07/2021"
    //     },

    //     {
    //         STT: "2",
    //         ClassID: "19 123 03B",
    //         ClassName: "KT19B",
    //         Quantily: "2",
    //         Date: "01/07/2021"
    //     },

    //     {
    //         STT: "3",
    //         ClassID: "19 123 03A",
    //         ClassName: "KT19A",
    //         Quantily: "1",
    //         Date: "01/07/2021"
    //     },

    //     {
    //         STT: "4",
    //         ClassID: "19 123 03B",
    //         ClassName: "KT19B",
    //         Quantily: "2",
    //         Date: "01/07/2021"
    //     },

    //     {
    //         STT: "5",
    //         ClassID: "19 123 03A",
    //         ClassName: "KT19A",
    //         Quantily: "1",
    //         Date: "01/07/2021"
    //     },

    //     {
    //         STT: "6",
    //         ClassID: "19 123 03B",
    //         ClassName: "KT19B",
    //         Quantily: "2",
    //         Date: "01/07/2021"
    //     },

    //     {
    //         STT: "7",
    //         ClassID: "19 123 03A",
    //         ClassName: "KT19A",
    //         Quantily: "1",
    //         Date: "01/07/2021"
    //     },

    //     {
    //         STT: "8",
    //         ClassID: "19 123 03B",
    //         ClassName: "KT19B",
    //         Quantily: "2",
    //         Date: "01/07/2021"
    //     }
    // ] 
    return(
        <div className="ListClass_item">
           
             <p className="content_list_class__content_item__id_class">{des.STT}</p>
             <p className="content_list_class__content_item__code_class">{des.ClassID}</p>
             <p className="content_list_class__content_item__name_class">{des.ClassName}</p>
             <p className="content_list_class__content_item__quanity_class">{des.Quantily}</p>
             <p className="content_list_class__content_item__update_class">{des.Date}</p>
             <Link className="homepg" to={'/detailclass'}> 
             <a href=""> <img src={icon_button} className="content_list_class__content_item__icon_class"/>
            </a>
            </Link>
            
            
                       

        </div>
    )
}
export default Table_content;