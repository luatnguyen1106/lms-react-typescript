import React, {Component} from "react";
import { Link } from "react-router-dom";
import logo from "../img/Frame.png";
import FormInput from "./form_input"
import FormPassword from "./form_password";
import "./login.css";
export default class ForgotForm extends Component {

    handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    };
    email!: string;
    text!: string;
    
    render() {
        return (
            <div className="login">
                <img className="logo" src={logo} alt="logo"/>
            <form className="form" onSubmit={this.handleSubmit}>
                <h3>Cấp lại mật khẩu</h3>

                <div className="form-group">
                   <FormInput nametitle = "Tên đăng nhập"/>
                </div>

                <div className="form-group">
                  <FormPassword nametitle = "Mã xác thực"/>
                </div>
                <p className="forgot-pw">
                    <Link className="forgot-pw" to={'/'}>Quay lại trang chủ</Link>
                </p>
                <button className="btn-forgot">Cấp lại mật khẩu</button>
            </form>
            </div>

            
        )
    }
}