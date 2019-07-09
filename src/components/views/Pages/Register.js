import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import '../../../css/views/Pages/Register.css';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      isErr: false,
      errMsg: ''
    }
  }

  formOnChange = async e => {
    await this.setState({
      [e.target.name]: e.target.value
    });
  }

  validateFields = () => {
    const { email, firstName, lastName, jobPosition } = this.state;
    this.setState({ isLoading: true });
    if(!email || !firstName || !lastName || !jobPosition){
      this.setState({
        isErr: true,
        errMsg: 'Input your credentials!',
        isLoading: false
      });
    }else {
      this.submitRequest();
    }
  }

  submitRequest = () => {
    console.log('Submitted');
    this.setState({ isLoading: false });
  }

  render(){
    return (
      <div className="register">
        <div className="registerContent">
          <div className="left">
            <div className="greetings">
              <h1>WELCOME TO Y GROUP!</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta blanditiis itaque non quam modi natus adipisci ad, impedit, quo incidunt quasi sunt sequi. Id delectus fugit totam distinctio asperiores consectetur.</p>
            </div>
          </div>
          <div className="right">
            <div className="forms">
              <label>REQUEST AN ACCOUNT</label>
              <input
                type="email"
                name="email"
                onChange={this.formOnChange}
                autoFocus
                placeholder="Email"
              />
              <input
                type="text"
                name="firstName"
                onChange={this.formOnChange}
                placeholder="First Name"
              />
              <input
                type="text"
                name="lastName"
                onChange={this.formOnChange}
                placeholder="Last Name"
              />
              <input
                type="text"
                name="jobPosition"
                onChange={this.formOnChange}
                placeholder="Job Position"
              />
              <div className={this.state.isErr ? 'errMsg show' : 'errMsg'}>{this.state.errMsg}</div>
              <button className="submit" onClick={this.validateFields}>{this.state.isLoading ? 'SENDING...' : 'SEND REQUEST'}</button>
              <div className="noAccount">
                <label>Already have an account?</label>
                <Link to="/login">Go to login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
