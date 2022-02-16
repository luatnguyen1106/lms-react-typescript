import React, { Component } from "react";
import logo from "../img/Logo1.png";
import money_sidebar from "../img/money1.png"
import basicMoney_sidebar from "../img/money.png"
import folder_sidebar from "../img/folder check.png"
import money_nav from "../img/money3.png"
import basicMoney_nav from "../img/money2.png"
import folder_nav from "../img/folder2.png"



export default class Sidebar extends Component {
    render() {
        return (
    <div className="navbar">
      <div className="navbar-content">
        <img className="logo-nav" src={logo} alt="logo"/>
        <ul className="navbar-icons">
                <li className="icon-sidebar"> <a href="#"> <img className="icon-sidebar-img"  src={money_sidebar} alt="money"/></a></li>
                <li className="icon-sidebar"> <a href="#"> <img className="icon-sidebar-img" src={basicMoney_sidebar} alt="basicMoney"/> </a> </li>
                <li className="icon-sidebar"> <a href="#"> <img className="icon-sidebar-img" src={folder_sidebar} alt="forder"/> </a> </li>
        </ul>
      </div>
      <div className="navbar-menu">
        <ul className="navbar-menu-list">
          <li className="navbar-menu-title navbar-menu-title__cost">
            <a href="" className="img-icon_nav-list menu-title-content">
            <img className="icon-nav" src={money_nav} alt="money"/>
            Quản lý học phí
            </a>
            <ul className="menu-title-list">
                {/* menu-title-item--active  */}
               
                <li className="menu-title-item"> <a href=""> Danh sách lớp học </a> </li>
                <li className="menu-title-item"> <a href=""> Danh sách biểu phí</a></li>
                <li className="menu-title-item"> <a href=""> Danh sách khoản thu</a></li>
                <li className="menu-title-item"> <a href=""> Hình thức thu</a></li>
                <li className="menu-title-item"> <a href=""> Danh sách chế độ miễn giảm</a></li>
                <li className="menu-title-item"> <a href=""> Thu học phí</a></li>
              </ul>
          </li>
          <li className="navbar-menu-title navbar-menu-title__wage">
            
            <a href="" className="img-icon_nav-list menu-title-content">
            <img className="icon-nav" src={basicMoney_nav} alt="money"/>
            Quản lý Lương
            </a>
            <ul className="menu-title-list ">
                {/* menu-title-item--active  */}
               
                <li className="menu-title-item"> <a href=""> Danh sách giáo viên</a> </li>
                <li className="menu-title-item"> <a href=""> Danh sách bảng chấm công</a></li>
                <li className="menu-title-item"> <a href=""> Danh sách bảng lương</a></li>
                <li className="menu-title-item"> <a href=""> Danh sách biểu phí</a></li>
                <li className="menu-title-item"> <a href=""> Danh sách khoản chi</a></li>
                <li className="menu-title-item"> <a href=""> Thiết lập ngạch, hạng</a></li>
                <li className="menu-title-item"> <a href=""> Công thức tính lương</a></li>

              </ul>
          </li>

            <li className="navbar-menu-title">
            <a href="" className="img-icon_nav-list menu-title-content">
            <img className="icon-nav" src={folder_nav} alt="money"/>
            Đề xuất và phê duyệt
            </a>
          </li>
        </ul>
      </div>
    </div>
        )
    }
}
