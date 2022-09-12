import React from 'react';

class UserForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            email: '',
            username: '',
            first: '',
            last: '',
            password: '',
        }
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
        this.handleLastNameChange = this.handleLastNameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleSubmitChange = this.handleSubmitChange.bind(this)

    }

    async handleSubmitChange(event) {
        event.preventDefault();
        const data = {...this.state};
        const userUrl = 'http://localhost:8000/api/users/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
        },
    };
        const response = await fetch(userUrl, fetchConfig);
        if (response.ok){
            const newUser = await response.json();
            const cleared = {
                email: '',
                username: '',
                first: '',
                last: '',
                password: '',
            };
            this.setState(cleared);
        }
    }

    handleEmailChange(event) {
        const value = event.target.value;
        this.setState({email: value})
    }
    handleUsernameChange(event) {
        const value = event.target.value;
        this.setState({username: value})
    }
    handleFirstNameChange(event) {
        const value = event.target.value;
        this.setState({first: value})
    }
    handleLastNameChange(event) {
        const value = event.target.value;
        this.setState({last: value})
    }
    handlePasswordChange(event) {
        const value = event.target.value;
        this.setState({password: value})
    }
            
        
        
        
        

    render() {
        return (
          <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1>Create an Account</h1>
                <form onSubmit={this.handleSubmitChange} id="create-user-form">
                  <div className="form-floating mb-3">
                    <input onChange={this.handleEmailChange} value={this.state.email} placeholder="email" required type="email" name="email" id="email" className="form-control" />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handleUsernameChange} value={this.state.username} placeholder="username" required type="text" name="username" id="username" className="form-control" />
                    <label htmlFor="username">Username</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handleFirstNameChange} value={this.state.first} placeholder="First Name" required type="text" name="first_name" id="first_name" min="1" max="5" className="form-control" />
                    <label htmlFor="first_name">First Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handleLastNameChange} value={this.state.last} placeholder="Last Name" required type="text" name="last_name" id="last_name" min="1" max="5" className="form-control" />
                    <label htmlFor="last_name">Last Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handlePasswordChange} value={this.state.password} placeholder="Password" required type="password" name="password" id="password" min="1" max="5" className="form-control" />
                    <label htmlFor="password">Password</label>
                  </div>
                  <button className="btn btn-primary">Create</button>
                </form>
              </div>
            </div>
          </div>
        );
      }
    }
    
    export default UserForm;