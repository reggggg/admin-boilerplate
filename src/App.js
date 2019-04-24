import React, {Component} from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import history from './js/history';

//Styles
import './App.css';
import './css/helpers.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Containers
const DefaultLayout = React.lazy(() => import('./components/containers/DefaultLayout/DefaultLayout'));

//Pages
const Error404 = React.lazy(() => import('./components/views/Pages/Error404'));

//Lazy Loader
const loading = () => <div className="spinner"></div>

class App extends Component {
  render(){
    return (
      <div className="App">
        <Router history={history}>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/404" name="Error 404" render={props => <Error404 {...props} />} />
              <Route path="/" name="Home" render={props => <DefaultLayout {...props} />} />
            </Switch>
          </React.Suspense>
        </Router>
      </div>
    );
  }
}
export default App;
