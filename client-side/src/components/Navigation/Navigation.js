import React from 'react';

const Navigation = ({ isSignedIn }) => {
    if ( isSignedIn ) {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary" >
                <p class="navbar-brand mr-auto">Posts</p>

                <a href="/newPost" className="btn btn-secondary m-3" >
                    Create a new post
                </a>

                <a href="signout" className="btn btn-secondary" >
                    Sign Out
                </a>
            </nav>
        );
    } else {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <p class="navbar-brand mr-auto">Posts</p>

                <a href="signin" className="btn btn-secondary m-3" >
                    Sign In
                </a>

                <a href="register" className="btn btn-secondary my-2 my-sm-0" >
                    Register
                </a>
            </nav>
        );
    }
}

export default Navigation;
