
import user from "../img/user_circle.png"
import React from "react";
import { Link } from "react-router-dom";
function Account (value:any){
   
        return(
            <div className="content-account">
            <img src={user} className="account-avatar" />
            <p className="account-name">{value.user_name}</p>
            <Link to={"/"} className="account-logout">Đăng xuất</Link>
          </div>
        )
    

}
export default Account;
   