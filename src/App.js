import React, {Component} from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import history from './js/history';

//Styles
import './App.css';
import './css/helpers/helpers.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Containers
const DefaultLayout = React.lazy(() => import('./components/containers/DefaultLayout/DefaultLayout'));

//Pages
const Login = React.lazy(() => import('./components/views/Pages/Login'));
const Register = React.lazy(() => import('./components/views/Pages/Register'));
const ForgotPassword = React.lazy(() => import('./components/views/Pages/ForgotPassword'));
const Error404 = React.lazy(() => import('./components/views/Pages/Error404'));

//Lazy Loader
const loading = () => <div className="loader"></div>

class App extends Component {

  render(){
    return (
      <div className="App">
        <Router history={history}>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route
                exact
                path="/login"
                name="Login Page"
                render={props => <Login {...props} />}
              />
              <Route
                exact
                path="/register"
                name="Register Page"
                render={props => <Register {...props} />}
              />
              <Route
                exact
                path="/forgotPassword"
                name="Forgot Password Page"
                render={props => <ForgotPassword {...props} />}
              />
              <Route
                exact
                path="/404"
                name="Error 404"
                render={props => <Error404 {...props} />}
              />
              <Route
                path="/"
                name="Home"
                render={props => <DefaultLayout {...props} />}
              />
            </Switch>
          </React.Suspense>
        </Router>
      </div>
    );
  }
}
export default App;
