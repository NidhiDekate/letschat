import React, { Component } from 'react';

class UserSection extends Component{
    render(){
        const user = sessionStorage.getItem("userName")
        return(
            <>
                <section id="searchUser">
                <nav className="navbar navbar-light bg-light">
                        <input className=" mr-sm-2 search-input border-info" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-info my-2 my-sm-0 search-btn" type="submit">Search</button>
                </nav>
                <hr />
                <div className="bg-info w-100 p-2 text-center">
                <i class="fa fa-user-circle-o" aria-hidden="true"></i> {user}
                </div>
                </section>
            </>
        );
    }
}

export default UserSection;