import React from "react";
import {Receivables} from "../../../data/data_receivables";
function Table_Receivables (value:any) {
    return(
        <div className="table-receivables">
            <div className="table-receivables-title">
                <p className="receivables-title--STT">STT</p>
                <p className="receivables-title--Ma">Mã</p>
                <p className="receivables-title--NDT">Nội dung thu</p>
                <p className="receivables-title--HK">Học kỳ</p>
                <p className="receivables-title--ST">Số tiền(VNĐ)</p>
            </div>
            <div className="table-receivables-content-data">
                <ul className="table-receivables-content-data-list">
                    {Receivables.map((detail,index) =>{
                        return (
                            <li className="table-receivables-content-data-item">
                                <p className="table-receivables-content-data-item--serial">
                                    {index+1}</p>
                                <p className="table-receivables-content-data-item--STT">
                                    {detail.STT}</p>
                                <p className="table-receivables-content-data-item--Ma">
                                    {detail.Ma}</p>
                                <p className="table-receivables-content-data-item--Noi_Dung_Thu">
                                    {detail.Noi_Dung_Thu}</p>
                                <p className="table-receivables-content-data-item--Hoc_Ky">
                                    {detail.Hoc_Ky}</p>
                                <p className="table-receivables-content-data-item--So_Tien">
                                    {detail.So_Tien}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="table-receivables-total">

            </div>
        </div>
    )
}
export default Table_Receivables;