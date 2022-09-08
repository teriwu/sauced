import React from 'react';

class UserForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            Email: '',
            Username: '',
            FirstName: '',
            LastName: '',
            Password: '',
        }
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
        this.handleLastNameChange = this.handleLastNameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleSubmit = this.handleSubmitChange.bind(this)

    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        const userUrl = 'http://localhost:8000/api/users/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json', 
        },
    };
        const response = await fetch(userUrl, fetchConfig);
        if (response.ok){
            const newUser = await response.json();
            const cleared = {
                Email: '',
                Username: '',
                FirstName: '',
                LastName: '',
                Password: '',
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
        this.setState({first_name: value})
    }
    handleLastNameChange(event) {
        const value = event.target.value;
        this.setState({last_name: value})
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
                <form onSubmit={this.handleSubmit} id="create-user-form">
                  <div className="form-floating mb-3">
                    <input onChange={this.handleEmailChange} value={this.state.email} placeholder="Email" required type="text" name="email" id="email" className="form-control" />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handleUsernameChange} value={this.state.username} placeholder="Username" required type="text" name="username" id="username" className="form-control" />
                    <label htmlFor="username">Username</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handleFirstNameChange} value={this.state.first_name} placeholder="First Name" required type="text" name="first_name" id="first_name" min="1" max="5" className="form-control" />
                    <label htmlFor="first_name">First Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handleLastNameChange} value={this.state.last_name} placeholder="Last Name" required type="text" name="last_name" id="last_name" min="1" max="5" className="form-control" />
                    <label htmlFor="last_name">Last Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handlePasswordChange} value={this.state.password} placeholder="Password" required type="text" name="password" id="password" min="1" max="5" className="form-control" />
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