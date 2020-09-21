import React, { Component } from 'react';
import ChatDialogue from './ChatDialogue';
import UserSection from './UserSection';

const chatDate = new Date().toLocaleString();


class Main extends Component{
    constructor(){
        super()
        this.state = {
            chats : [],
            CurrentChat : {
                title : '',
                date : '',
                text : ''
            }
        }
        this.handleChat = this.handleChat.bind(this);
        this.addChat = this.addChat.bind(this)
    }

    handleChat = (e) =>{
    const chatDate = new Date().toLocaleString();
    const user = sessionStorage.getItem("userName")
        this.setState({
            CurrentChat : {
                title : user,
                date : chatDate ,
                text : e.target.value
            }
        })
    }

    addChat = (e) =>{
         e.preventDefault();
         const newChat = this.state.CurrentChat;
         if(newChat.text !== ''){
             const newChats = [...this.state.chats, newChat];
             this.setState({
                 chats : newChats,
                 CurrentChat : {
                    title : '',
                    date : '',
                    text : ''
                }
             })
         }
    }


 render(){
     return(
         <>
            <section>
                <div className="container my-2 chat_container">
                    <div className="row Chatroom">
                        <div className="col-lg-4 col-md-4 col-12 col-xxl-4 border bg-light userDiv">
                        <UserSection />
                        </div>
                        <div className="col-lg-8 col-md-6 col-12 col-xxl-6 border bg-light">
                            <div className="container-fluid ChatScreen">
                            <ChatDialogue chats={this.state.chats}  />
                            </div>
                            <form onSubmit={this.addChat}>
                            <div className="row chatMenu">
                            <div className="col-md-2">
                            <button type="submit" className="btn btn-outline-info send-btn" onClick={this.addChat}>Send</button>
                            </div>
                            <div className="col-md-10">
                            <textarea className="form-control border-info" placeholder="Type Message..." onChange={this.handleChat} value={this.state.CurrentChat.text}></textarea>
                            </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
         </>
     );
 }   
}

export default Main;