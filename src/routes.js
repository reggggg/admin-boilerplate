import React from 'react';

const Dashboard = React.lazy(() => import('./components/views/Dashboard/Dashboard'));
const UserGroup = React.lazy(() => import('./components/views/UserGroup/UserGroup'));

const routes = [
  {
    path: '/',
    exact: true,
    name: 'Home',
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/userGroup',
    name: 'UserGroup',
    component: UserGroup
  },
];

export default routes;
