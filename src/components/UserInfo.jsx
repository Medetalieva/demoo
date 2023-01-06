import Avatar from "./Avatar";
import React from "react";


function UserInfo(props){
    return(
     <div className="userInfo">
        <Avatar authorInfo={props.author}/>
        <div className="userInfo-name">{props.author.name}</div>
     </div>

    );
}

export default UserInfo