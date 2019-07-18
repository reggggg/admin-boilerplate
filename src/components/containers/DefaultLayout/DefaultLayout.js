import React, {Component, Suspense} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import '../../../css/containers/DefaultLayout/DefaultLayout.css';

//routes config
import routes from '../../../routes';

//history
import history from '../../../js/history';

//navs
const TopBar = React.lazy(() => import('../TopBar/TopBar'));
const LeftSideBar = React.lazy(() => import('../LeftSideBar/LeftSideBar'));



class DefaultLayout extends Component {
  constructor(props){
    super(props);
    this.state = {
      hideSideNav: true,
    }
  }

  componentWillMount(){
    if(!localStorage.getItem("UserSession")){
      history.replace('/login')
    }
  }

  toggleSideNav = async () => {
    await this.setState({
      hideSideNav: !this.state.hideSideNav
    });
  }

  sideNavOpenToggler = () => {
    this.setState({
      hideSideNav: !this.state.hideSideNav
    });
  }



  layoutLoader = () => <div className="loader-defaultLayout"></div>;

  render(){
    return (
      <div className="main">
        <TopBar />
        <LeftSideBar
          toggleSideNav={this.state.hideSideNav}
          sideNavOpener={() => this.sideNavOpenToggler()}
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
