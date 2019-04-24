import React, {Component, Suspense} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import '../../../css/containers/DefaultLayout/DefaultLayout.css';

//routes config
import routes from '../../../routes';

//navs
const TopBar = React.lazy(() => import('../TopBar/TopBar'));
const LeftSideBar = React.lazy(() => import('../LeftSideBar/LeftSideBar'));



class DefaultLayout extends Component {

  layoutLoader = () => <div className="spinner"></div>;

  render(){
    return (
      <div className="main">
        <TopBar />
        <LeftSideBar />
        <div className="layout">
          <div className="layoutBody">
            <Suspense fallback={this.layoutLoader()}>
              <Switch>
                {
                  routes.map(( route, index ) => {
                    return route.component ? (
                      <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )}
                      />
                    ) : (null);
                  })
                }
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </Suspense>
          </div>
        </div>
      </div>
    );
  }
}
export default DefaultLayout;
