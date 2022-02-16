import React, { Component } from "react";
import "./home.css";

import "../Content/table/css/detail_class.css"
import Sidebar from "../sidebar/sidebar";
import List_student_content from "../Content/home-list_student";


export default class List_student extends Component {


    render() {
        return (
            <div className="home_detail">
                <div className="home">
                <Sidebar />
                <List_student_content/>
               
                </div>
               
            </div>
                
            
            
            
        )
    }
}