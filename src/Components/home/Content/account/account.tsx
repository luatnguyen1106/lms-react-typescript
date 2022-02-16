
import user from "../img/user_circle.png"
import React from "react";
function Account (value:any){
   
        return(
            <div className="content-account">
            <img src={user} className="account-avatar" />
            <p className="account-name">{value.user_name}</p>
            <a className="account-logout">Đăng xuất</a>
          </div>
        )
    

}
export default Account;
   