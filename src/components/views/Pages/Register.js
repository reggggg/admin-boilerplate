import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'reactstrap';
import { MdMailOutline } from 'react-icons/md';
import history from '../../../js/history';

import '../../../css/views/Pages/Register.css';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalOpen: false,
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

  regexValidateEmail = email => {
    let re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
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
    }else if(this.regexValidateEmail(email) === false){
      this.setState({
        isErr: true,
        errMsg: 'Invalid Email!',
        isLoading: false
      });
    }else {
      this.submitRequest();
    }
  }

  submitRequest = () => {
    this.setState({
      isLoading: false,
    });
    this.toggleModal();
  }

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  }
  goToSignin = () => {
    history.push('/login');
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
              <button className="submit" onClick={this.validateFields} disabled={this.state.isLoading ? true : false}>
                {this.state.isLoading ? 'SENDING REQUEST...' : 'SEND REQUEST'}
              </button>
              <div className="noAccount">
                <label>Already have an account?</label>
                <Link to="/login">Go to login</Link>
              </div>
            </div>
          </div>
        </div>
        <Modal isOpen={this.state.modalOpen} className="register-modal">
          <MdMailOutline />
          <h5>Account request has been sent to your admin!</h5>
          <p>Please wait for their confirmation and they will send you your password in your email. You will be given a random passcode. Please change your password immediately. </p>
          <button onClick={this.goToSignin}>Go to Signin</button>
        </Modal>
      </div>
    );
  }
}
export default Login;
