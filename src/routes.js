import React from 'react';

const Dashboard = React.lazy(() => import('./components/views/Dashboard/Dashboard'));
const AdminManagement = React.lazy(() => import('./components/views/Permissions/Admin'));
const YhotelProductsManagement = React.lazy(() => import('./components/views/Products/Yhotel'));


const routes = [
  {
    path: '/',
    exact: true,
    name: 'Home',
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/manage_admin',
    name: 'Admin Management',
    component: AdminManagement,
  },
  {
    path: '/products_yhotel',
    name: 'Yhotel Products Management',
    component: YhotelProductsManagement,
  },
];

export default routes;
