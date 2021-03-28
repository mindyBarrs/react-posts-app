import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// COMPONENTS
import Navigation from './components/Navigation/Navigation.js';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import NewPost from './components/NewPost/NewPost.js';
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
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joinded: data.joinded
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
          ? <Post onRouteChange={ this.onRouteChange }/>
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
