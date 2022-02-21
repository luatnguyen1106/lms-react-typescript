import React, {Component} from "react";
import Account from "./account/account";
import Title_home from "./title/title";
import Table_list_class from "./table/home/table-list-class-component";

export default class Content extends Component{
    render(){
        return(
            <div className="home-content">
                <Account
                user_name = "Luật Nguyễn"
                />
                <Title_home />
                <Table_list_class />
            </div>
        )
    }
}