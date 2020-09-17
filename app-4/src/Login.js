import React, {Component} from 'react';

class Login extends Component {
    constructor(){
        super();

        this.state = {
            username: '',
            password: ''
        };

        this.login = this.login.bind(this);
    }

    changeUsername(val) {
        this.setState({username: val})
    }

    changePassword (val) {
        this.setState({password: val})
    }

    login(){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }
    
    render(){
        return (
            <div>
                <input type='text' onChange={(e) => this.changeUsername(e.target.value)} />
                <input type='text' onChange={(e) => this.changePassword(e.target.value)} />
                <button onClick={this.login}>Login</button>
            </div>
        )
    }
}

export default Login;