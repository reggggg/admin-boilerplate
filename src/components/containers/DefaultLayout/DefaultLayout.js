import React, {Component, Suspense} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import '../../../css/containers/DefaultLayout/DefaultLayout.css';

//routes config
import routes from '../../../routes';

//navs
const TopBar = React.lazy(() => import('../TopBar/TopBar'));
const LeftSideBar = React.lazy(() => import('../LeftSideBar/LeftSideBar'));



class DefaultLayout extends Component {
  constructor(props){
    super(props);
    this.state = {
      hideSideNav: true
    }
  }

  toggleSideNav = async (e) => {
    await this.setState({
      hideSideNav: e
    });
    console.log(this.state.hideSideNav);
  }

  layoutLoader = () => <div className="spinner"></div>;

  render(){
    return (
      <div className="main">
        <TopBar
          toggleSideNav={(e) => this.toggleSideNav(e)}
        />
        <LeftSideBar
          toggleSideNav={this.state.hideSideNav}
         />
        <div className="layout">
          <div className={!this.state.hideSideNav ? 'layoutBody' : 'layoutBody adjust'}>
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
