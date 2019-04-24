import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

import '../../../css/views/Pages/Error404.css';

class Error404 extends Component {
  render(){
    return (
      <div className="error404">
        <Container className="error404content">
          <Link to="/">Back</Link>
          <span>
            <h1>ERROR 404</h1>
            <h2>Page not found!</h2>
          </span>
        </Container>
      </div>
    );
  }
}
export default Error404;
