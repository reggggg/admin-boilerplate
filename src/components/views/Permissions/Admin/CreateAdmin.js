import React, {Component} from 'react';

import { Row, Col, Container } from 'reactstrap';
import { MdAdd, MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import '../../../../css/views/Permissions/Admin/Admin.css';

class CreateAdmin extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      isErr: false,
      errText: '',
      checkbox: false
    }
  }
  formOnChange = async e => {
    await this.setState({
      [e.target.name]: e.target.value,
      isErr: false
    });
  }

  checkboxOnChange = async e => {
    await this.setState({
      checkbox: e.target.checked,
      isErr: false
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
        errText: 'Input admin\'s credentials!',
        isLoading: false
      });
    }else if(this.regexValidateEmail(email) === false){
      this.setState({
        isErr: true,
        errText: 'Invalid Email!',
        isLoading: false
      });
    }else if(!this.state.checkbox){
      this.setState({
        isErr: true,
        errText: 'You must agree with the Terms & Conditions first.',
        isLoading: false
      });
    }else {
      this.createAdminAccount();
    }
  }

  createAdminAccount = () => {
    alert('done');
    this.setState({ isLoading: false });
  }

  render(){
    return (
      <div className="createAdmin">
        <h2 className="title">Create New Admin</h2>
        <Container>
          <Row className="createAdminContent">
            <Col md="7" className="forms">
              <div className={this.state.isErr ? 'errMsg show' : 'errMsg'}>
                {this.state.errText}
                <MdClose onClick={() => this.setState({ isErr: false })} />
              </div>
              <div className="inputs">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={this.formOnChange}
                />
              </div>
              <div className="inputs">
                <label>First name</label>
                <input
                  type="text"
                  name="firstName"
                  onChange={this.formOnChange}
                />
              </div>
              <div className="inputs">
                <label>Last name</label>
                <input
                  type="text"
                  name="lastName"
                  onChange={this.formOnChange}
                />
              </div>
              <div className="inputs">
                <label>Job Position</label>
                <input
                  type="text"
                  name="jobPosition"
                  onChange={this.formOnChange}
                />
              </div>
              <span>
                <input type="checkbox" defaultValue={false} onChange={this.checkboxOnChange} />
                <p>I have read the<Link to="/dashboard">Terms & Conditions</Link>.</p>
              </span>
              <button
                disabled={this.state.isLoading ? true : false}
                onClick={this.validateFields}
              >
                <MdAdd />
                {this.state.isLoading ? 'Creating Admin...' : 'Create Admin'}
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default CreateAdmin;
