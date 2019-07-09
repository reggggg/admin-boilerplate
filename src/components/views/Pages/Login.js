import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import '../../../css/views/Pages/Login.css';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      remember: false
    }
  }

  toggleRememberMe = () => {
    this.setState({ remember: !this.state.remember });
  }
  render(){
    return (
      <div className="login">
        <div className="loginContent">
          <div className="left">
            <div className="greetings">
              <h1>WELCOME TO Y GROUP!</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta blanditiis itaque non quam modi natus adipisci ad, impedit, quo incidunt quasi sunt sequi. Id delectus fugit totam distinctio asperiores consectetur.</p>
            </div>
          </div>
          <div className="right">
            <div className="forms">
              <label>LOGIN TO YOUR ACCOUNT</label>
              <input
                type="email"
                name="email"
                autoFocus
                placeholder="Email"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
              />
              <div className="middle">
                <span className="check" onClick={this.toggleRememberMe}>
                  <input type="checkbox" defaultChecked={this.state.remember} onChange={this.toggleRememberMe} />
                  Remember me?
                </span>
                <Link to="/login">Forgot Password?</Link>
              </div>
              <button className="submit">LOGIN</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
