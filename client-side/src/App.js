import React from 'react';

// COMPONENTS
import Navigation from './components/Navigation/Navigation.js';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Post from './components/Posts/Posts';

// STYLESHEETS
import './App.css';

const initalState = {
    route: 'signin',
    isSignedIn: false,
    user: {
      id: '',
      name: '',
      email: '',
      entries: 0,
      joinded: ''
    }
}

class App extends React.Component {
  constructor(props){
    super(props);

     this.state = initalState;
  }

  // SETTING UP & LOADING THE USER
  loadUser = (data) => {
    this.setState({user: {
        userID: data.user_id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joinedAt: data.joined_at
    }});
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initalState);
    } else if(route === 'home') {
      this.setState({isSignedIn: true});
    }

    this.setState({route: route});
  }

  render(){
    const {
      isSignedIn,
      route
    } = this.state;

    return (
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={ isSignedIn }/>

        { route === 'home'
          ? <Post user={ this.state.user } onRouteChange={ this.onRouteChange }/>
          : ( route === 'signin'
            ? <SignIn loadUser={ this.loadUser } onRouteChange={ this.onRouteChange } />
            : <Register loadUser={ this.loadUser } onRouteChange={ this.onRouteChange } />
          )
        }
      </div>
    );
  }
}

export default App;
