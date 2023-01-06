import UserInfo from "./UserInfo";
import Card from "./ui/card/Card";
import './Comment.css'
import React from "react"



const Comment = (props) => {  
    const newDate = new Intl.DateTimeFormat('en-Us').format(props.date)

    

    return(
        <Card className='comment'>
           <UserInfo author={props.author}/>
            <div className="comment-text">{props.text}</div>
            <div className="comment-date">{newDate}</div>
        </Card>
    )
}

export default Comment;