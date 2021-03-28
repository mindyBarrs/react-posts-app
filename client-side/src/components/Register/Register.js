import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value });
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value });
    }

    /* CONNECTING TO THE SERVER */
    onSubmitRegister = () => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.user_id){
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        })
        .catch(error => this.setState({ error }));
    }

    render(){
        return(
            <div className="card border-secondary mt-5" >
              <div class="card-header">
                <h1>Register</h1>
              </div>
              <div className="card-body">
                      <div className="form-group">
                          <label for="name">Name</label>
                          <input onChange={ this.onNameChange } className="form-control" type="text" name="name" id="name"/>
                      </div>

                      <div className="form-group">
                          <label for="email-address">Email</label>
                          <input onChange={ this.onEmailChange } className="form-control" type="email" name="email-address" id="email-address"/>
                      </div>

                      <div className="form-group">
                          <label for="password">Password</label>
                          <input onChange={ this.onPasswordChange } className="form-control" type="password" name="password" id="password"/>
                      </div>

                  <div className="">
                      <input onClick={ this.onSubmitRegister } className="btn btn-outline-secondary" type="submit" value="Register"/>
                  </div>
              </div>
            </div>
        );
    }
}

export default Register;
