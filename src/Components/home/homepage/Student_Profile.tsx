import React, { Component } from "react";
import "./home.css";
import "../css/student_profile.css"
import Sidebar from "../sidebar/sidebar";
import Student_profile from "../Content/home-student-profile";


export default class Student_profile_home extends Component {


    render() {
        return (
            <div className="home_detail">
                <div className="home">
                <Sidebar />
                
               <Student_profile/>
                </div>
               
            </div>
                
            
            
            
        )
    }
}