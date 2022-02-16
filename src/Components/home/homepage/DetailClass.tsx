import React, { Component } from "react";
import "./home.css";
import "../Content/table/css/detail_class.css"
import Sidebar from "../sidebar/sidebar";
import Detail_Class from "../Content/home-detail";
import Modal_detail from "../Content/modal/modal_detail/modal_add_detail";



export default class Detail_class extends Component {


    render() {
        return (
            <div className="home_detail">
                <div className="home">
                <Sidebar />
                <Detail_Class/>
               
                </div>
               
            </div>
                
            
            
            
        )
    }
}