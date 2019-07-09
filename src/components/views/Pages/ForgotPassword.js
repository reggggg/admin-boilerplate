import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import '../../../css/views/Pages/ForgotPassword.css';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      isErr: false,
      errMsg: '',
    }
  }



  formOnChange = async e => {
    await this.setState({
      [e.target.name]: e.target.value,
      isErr: false,
    });
  }

  onEnter = e => {
    const { email } = this.state;
    if(e.key === "Enter" || e.shiftKey === "Enter"){
      if(!email){
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
    const { email } = this.state;
    this.setState({ isLoading: true });
    if(!email){
      this.setState({
        isErr: true,
        errMsg: 'Input your email!',
        isLoading: false
      });
    }else if(this.regexValidateEmail(email) === false){
      this.setState({
        isErr: true,
        errMsg: 'Invalid email!',
        isLoading: false
      });
    } else {
      this.retrieveSubmit();
    }
  }

  retrieveSubmit = () => {
    console.log('To Dashboard...')
    this.setState({ isLoading: false });
  }
  render(){
    return (
      <div className="forgotPassword">
        <div className="forgotPasswordContent">
          <div className="left">
            <div className="greetings">
              <h1>WELCOME TO Y GROUP!</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta blanditiis itaque non quam modi natus adipisci ad, impedit, quo incidunt quasi sunt sequi. Id delectus fugit totam distinctio asperiores consectetur.</p>
            </div>
          </div>
          <div className="right">
            <div className="forms">
              <label>Retrieve Password</label>
              <input
                type="email"
                name="email"
                onChange={this.formOnChange}
                onKeyPress={this.onEnter}
                autoFocus
                placeholder="Email"
              />
              <div className={this.state.isErr ? 'errMsg show' : 'errMsg'}>{this.state.errMsg}</div>
              <button className="submit" onClick={this.validateFields}>{this.state.isLoading ? 'SENDING...' : 'SEND PASSWORD TO EMAIL'}</button>
              <div className="noAccount">
                <Link to="/login">Go back to login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
