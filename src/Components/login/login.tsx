import React, {Component} from "react";
import { Link } from "react-router-dom";
import logo from "../img/Frame.png";
import FormInput from "./form_input"
import FormPassword from "./form_password";
import user from "../img/Union.png";
import pass from "../img/shield-keyhole-line.png";
import "./login.css";


export const Login = () => {

    const handleSubmit = (e: any) => {
        e.preventDefault();
        
    }



    
        return (
            <div className="login">
                <img className="logo" src={logo} alt="logo"/>
            <form className="form" onSubmit={handleSubmit}>
                <h1>Đăng nhập</h1>

                <div className="form-group">
                   <FormInput namenameTitle="Tên đăng nhập"/>
                </div>

                <div className="form-group">
                   <FormPassword nametitle = "Mật khẩu"/>
                </div>
                <p className="forgot-pw">
                    <Link className="forgot-pw" to={'/forgot'}>Quên mật khẩu?</Link>
                </p>
                <Link className="homepg" to={'/home'}><button className="btn-login">Đăng nhập</button></Link>

            </form>
            </div>

        )
    }
