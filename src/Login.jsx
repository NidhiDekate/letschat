import React , {Component} from 'react';
import axios from 'axios';
class Login extends Component{

    constructor(){
        super();
        this.state = {
            user:'',
            pass:'',
            msg:''
        }
    }
    handleUser = (e)=>{
        this.setState({
            user:e.target.value
        })
    }

    handlePass = (e)=>{
        this.setState({
            pass:e.target.value
        })
    }

    goLogin = () =>{
        if((this.state.user=="") || (this.state.pass=="")){
            this.setState({
                msg:"Fail ! Invalid login details !"
            })
        }else{
             var status=false;
              axios.get("logindata.json").then(response=>{
                  for(var i=0; i<response.data.length; i++){
                    if((this.state.user==response.data[i].name) && (this.state.pass==response.data[i].pass)){
                        this.setState({
                            msg:"Success ! Please wait processing ..."
                        })
                        status=true;
                        sessionStorage.setItem("userName", response.data[i].name);
                        window.location.reload();
                        break;
                    }
                  }

                 if(status==false){
                    this.setState({
                        msg:"Invalid or not exists ..."
                    })
                 } 

              })             
           

        } //else end here
    }

    render(){
        return <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <br/>
                            <p className="text-center text-info">{this.state.msg}</p>
                            <div className="card">
                                <div className="card-header bg-info text-white"><h1>Lets Chat</h1></div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label>User Id</label>
                                        <input type="text" className="form-control" onChange={this.handleUser} />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" onChange={this.handlePass} />
                                    </div>
                                </div>
                                <div className="card-footer text-center">
            <button className="btn btn-outline-info btn-sm" onClick={this.goLogin}>Login</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
               </div>
    }
}

   

export default Login;