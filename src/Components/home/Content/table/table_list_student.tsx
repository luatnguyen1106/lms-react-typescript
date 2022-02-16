import React from "react";
import upandown from "./img/u_arrow up down.png";
import sreach from "./img/search.png";
import info_student from "./img/infor student.png";
import { Liststudent } from "../../data/listStudent";


function Table_list_student (){
    return(
        <div className="table_list_student">
            <div className="content_list_student">
            <div className="content_list_student--title">
                <p className="list_student--title_name"> Lớp KT - 19A </p>
                <input type="text" className="list_student--title_search">
                    
                </input>
            </div>
            <div className="content_list_student--table">
                <div className="list_student--table--heading">
                    <ul className="student--table--heading">
                        <li className="student--table--heading_item">
                            <p className="heading_item">STT</p>
                        </li>
                        <li className="student--table--heading_item">
                            <p className="heading_item">Tên sinh viên</p>
                            <img src={upandown} alt="" className="heading_item_icon" />
                        </li>
                        <li className="student--table--heading_item">
                            <p className="heading_item">MSSV</p>
                            <img src={upandown} alt="" className="heading_item_icon" />

                        </li>
                        <li className="student--table--heading_item">
                            <p className="heading_item">Giới tính</p>
                        </li>
                        <li className="student--table--heading_item">
                            <p className="heading_item">Ngày sinh</p>
                        </li>
                        <li className="student--table--heading_item">
                            <p className="heading_item">Số biểu phí đã đóng</p>
                        </li>
                        <li className="student--table--heading_item">
                            <p className="heading_item">Chế độ miễn giảm</p>
                        </li>
                        <li className="student--table--heading_item">
                            <p className="heading_item">Trạng thái</p>
                        </li>
                        
                    </ul>
                </div>

                <div className="list_student--table--content">
                    <ul className="list_student--content">
                        {Liststudent.map((student, index)=>{
                            return(
                                <li className="list_student--content_item">
                                    <span className=""></span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="content_list_student--sum">
                Tổng số sinh viên: 40
            </div>
            <div className="content_list_student--footer"></div>
            </div>
        </div>
        
    )
}
export default Table_list_student