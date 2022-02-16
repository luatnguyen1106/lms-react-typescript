import React from "react";
import shape from "../img/shape.png"
import shape2 from "../img/shape2.png"


const Modal_calendar = ({ setIsOpen } : {setIsOpen : any}) => {
   
        return(
            <div className="form_calendar">
                <div className="modal_calendar">
                <div className="calendar_heading">
                    <img src={shape} alt="shape" className="shape_left" />
                    <p className="calendar_heading_month">Tháng 8, 2020</p>
                    <img src={shape2} alt="shape" className="shape_right" />
                </div>
                <div className="calendar_content">
                    <div className="calendar_content_rank">
                        <p className="content_rank_item">CN</p>
                        <p className="content_rank_item">T2</p>
                        <p className="content_rank_item">T3</p>
                        <p className="content_rank_item">T4</p>
                        <p className="content_rank_item">T5</p>
                        <p className="content_rank_item">T6</p>
                        <p className="content_rank_item">T7</p>
                    </div>
                    <div className="content_date">
                    <div className="calendar_content_date">
                        <p className="content_date_item">1</p>
                        <p className="content_date_item">8</p>
                        <p className="content_date_item">15</p>
                        <p className="content_date_item">22</p>
                        <p className="content_date_item">29</p>
                        
                    </div>
                    <div className="calendar_content_date">
                        <p className="content_date_item">2</p>
                        <p className="content_date_item">9</p>
                        <p className="content_date_item">16</p>
                        <p className="content_date_item">23</p>
                        <p className="content_date_item">30</p>
                       
                    </div>
                    <div className="calendar_content_date">
                        <p className="content_date_item">3</p>
                        <p className="content_date_item">10</p>
                        <p className="content_date_item">17</p>
                        <p className="content_date_item">24</p>
                        <p className="content_date_item">31</p>
                        
                    </div>
                    <div className="calendar_content_date">
                        <p className="content_date_item">4</p>
                        <p className="content_date_item">11</p>
                        <p className="content_date_item">18</p>
                        <p className="content_date_item">25</p>
                        <p className="content_date_item  clgrey ">1</p>
                        
                    </div>
                    <div className="calendar_content_date">
                        <p className="content_date_item">5</p>
                        <p className="content_date_item">12</p>
                        <p className="content_date_item">19</p>
                        <p className="content_date_item ">26</p>
                        <p className="content_date_item clgrey">2</p>
                        
                    </div>
                    
                    <div className="calendar_content_date">
                        <p className="content_date_item">6</p>
                        <p className="content_date_item">13</p>
                        <p className="content_date_item">20</p>
                        <p className="content_date_item ">27</p>
                        <p className="content_date_item clgrey">3</p>
                        
                    </div>
                    <div className="calendar_content_date">
                        <p className="content_date_item">7</p>
                        <p className="content_date_item">14</p>
                        <p className="content_date_item">21</p>
                        <p className="content_date_item ">28</p>
                        <p className="content_date_item clgrey">4</p>
                        
                    </div>
                    </div>
                    
                </div>
                <div className="calendar_footer">
                    <button className="button_calendar_footer" onClick={() => setIsOpen(false)}>Chọn</button>
                </div>
                </div>
            </div>
                
        )
    }
    

export default Modal_calendar