import React, { Component } from 'react';

function ChatDialogue(props){
    const chats = props.chats;
    const chatList = chats.map(chatD =>{
        return (
            <>
            <div className="row chatDialogue">
                <div className="col-md-12 " key="chatD.date">
                        <div className="chatTitle bg-info">{chatD.title} <span className="chatDate bg-info"> {chatD.date}</span></div>  
                        <div className="chatText bg-info">{chatD.text}</div>
                </div>
                </div>
            </>
        );
    } )
    return(
        <>
            {chatList}
        </>
    );
}

export default ChatDialogue;