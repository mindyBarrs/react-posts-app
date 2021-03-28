import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if ( isSignedIn ) {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary" >
                <p class="navbar-brand mr-auto">Posts</p>

                <button onClick={ () => onRouteChange('signout') } href="signout" className="btn btn-secondary" >
                    Sign Out
                </button>
            </nav>
        );
    } else {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <p class="navbar-brand mr-auto">Posts</p>

                <button onClick={ () => onRouteChange('signin') } className="btn btn-secondary m-3" >
                    Sign In
                </button>

                <button onClick={ () => onRouteChange('register') } href="register" className="btn btn-secondary" >
                    Register
                </button>
            </nav>
        );
    }
}

export default Navigation;
