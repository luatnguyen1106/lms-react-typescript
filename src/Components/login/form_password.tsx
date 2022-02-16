import React from "react";

function FormPassword (value:any){
    return(
        <div className="form-password">
            <label htmlFor="" className="user-lb">{value.nameTitle}</label>
            <input id="password" type='password' className="form-control" />
        </div>
    )
}
export default FormPassword;