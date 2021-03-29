import React from 'react';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value});
    }

    /* CONNECTING TO THE SERVER */
    onSubmitSignIn = () => {
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.user_id){
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        });
    }

    render(){
        const { onRouteChange } = this.props;
        return(
          <div className="card border-primary mt-5" >
            <div className="card-header">
              <h1 className="">Sign In</h1>
            </div>

            <div className="card-body">
              <div className="form-group">
                  <label for="email-address">Email address</label>
                  <input type="email" name="email-address" className="form-control" id="email-address" placeholder="Enter email" onChange={this.onEmailChange} />
              </div>

              <div className="form-group">
                  <label for="password">Password</label>
                  <input onChange={this.onPasswordChange} className="form-control" type="password" name="password" id="password" placeholder="Enter password"/>
              </div>

              <div className="form-group">
                  <input onClick={ this.onSubmitSignIn } className="btn btn-outline-primary" type="submit" value="Sign in"/>
              </div>

              <div className="mt-3">
                  <p onClick={() => onRouteChange('register')} className="btn btn-link">Register</p>
              </div>
            </div>
          </div>
        );
    }
}

export default SignIn;
