import React from "react";
import cancel from "../img/fi_x-cancel.png"
import "../modal_receivables.css"
import Table_Receivables from "./table_receivables";
function Modal_receivables ({ setIsOpen_modal_reaceivables } : {setIsOpen_modal_reaceivables : any}) {
    return(
        <div className="modal_receivables">
            <div className="receivables_overlay">

            </div>
            <div className="receivables_body">
                <div className="receivables_body_content">
                    <div className="receivables_body_control">
                        <img src={cancel} alt="" className="receivables_body_control_icon"onClick={() => setIsOpen_modal_reaceivables(false)}/>
                    </div>
                    <div className="receivables_body_code">
                        <p className="receivables_body_code_name"><strong>Số phiếu:</strong></p>
                        <p className="receivables_body_code_number">121235</p>
                    </div>
                    <div className="receivables_body_table">
                        <p className="receivables_body_table_title"><strong>Mã hóa đơn:</strong></p>
                        <div className="receivables_body_table_content">
                            <Table_Receivables />
                        </div>
                        <div className="receivables_body_table_Total">
                            <p className="Total">Tổng thanh toán:</p>
                            <p className="Price">5.170.000 đ</p>
                        </div>
                        <button className="btn">Xem phiếu thu</button>
                    </div>
                </div>
               
            </div>
        </div>
    )
}
export default Modal_receivables;