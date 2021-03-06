import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import history from '../../../js/history';

import '../../../css/views/Pages/Login.css';

const url = "http://localhost:5000/graphql";
class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      isErr: false,
      errMsg: '',
      remember: false
    }
  }

  componentWillMount(){
    if(localStorage.getItem('UserSession')){
      history.push('/')
    }
  }

  toggleRememberMe = () => {
    this.setState({ remember: !this.state.remember });
  }

  formOnChange = async e => {
    await this.setState({
      [e.target.name]: e.target.value,
      isErr: false
    });
  }

  onEnter = e => {
    const { email, password } = this.state;
    if(e.key === "Enter" || e.shiftKey === "Enter"){
      if(!email || !password){
        console.log('err');
      }else {
        this.validateFields();
      }
    }
  }
  regexValidateEmail = email => {
    let re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  }
  validateFields = () => {
    const { email, password } = this.state;
    this.setState({ isLoading: true });
    if(!email && !password){
      this.setState({
        isErr: true,
        errMsg: 'Input your credentials!',
        isLoading: false
      });
    }else if(!email){
      this.setState({
        isErr: true,
        errMsg: 'Input your email!',
        isLoading: false
      });
    }else if(!password){
      this.setState({
        isErr: true,
        errMsg: 'Input your password!',
        isLoading: false
      });
    }else if(this.regexValidateEmail(email) === false){
      this.setState({
        isErr: true,
        errMsg: 'Invalid email!',
        isLoading: false
      });
    } else {
      this.loginSubmit();
    }
  }

  loginSubmit = () => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: `
          query {
            login(email: "${this.state.email}", password: "${this.state.password}") {
              userId
              token
              tokenExpiration
            }
          }
        `
      })
    })
    .then(res => res.json())
    .then(result => {
      let err = result.errors;
      if(!err){
        localStorage.setItem("UserSession", JSON.stringify({
          token: result.data.login.token,
          tokenExpiration: result.data.login.tokenExpiration
        }));
        history.push('/dashboard');
      }else {
        this.setState({
          isErr: true,
          errMsg: err[0].message,
          isLoading: false
        });
      }
    })
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
                onChange={this.formOnChange}
                onKeyPress={this.onEnter}
                autoFocus
                placeholder="Email"
              />
              <input
                type="password"
                name="password"
                onChange={this.formOnChange}
                onKeyPress={this.onEnter}
                placeholder="Password"
              />
              <div className={this.state.isErr ? 'errMsg show' : 'errMsg'}>{this.state.errMsg}</div>
              <div className="middle">
                <span className="check" onClick={this.toggleRememberMe}>
                  <input type="checkbox" defaultChecked={this.state.remember} onChange={this.toggleRememberMe} />
                  Remember me?
                </span>
                <Link to="/forgotPassword">Forgot Password?</Link>
              </div>
              <button className="submit" onClick={this.validateFields}>{this.state.isLoading ? 'LOGGING IN...' : 'LOGIN'}</button>
              <div className="noAccount">
                <label>Don't have an account?</label>
                <Link to="/register">Request an account</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
