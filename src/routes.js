import React from 'react';

const Dashboard = React.lazy(() => import('./components/views/Dashboard/Dashboard'));
const UserGroup = React.lazy(() => import('./components/views/UserManagement/UserGroup'));
const UserList = React.lazy(() => import('./components/views/UserManagement/UserList'));
const AssetList = React.lazy(() => import('./components/views/Assets/AssetList'));
const CommandFilters = React.lazy(() => import('./components/views/Assets/CommandFilters'));
const DomainList = React.lazy(() => import('./components/views/Assets/DomainList'));
const SystemUser = React.lazy(() => import('./components/views/Assets/SystemUser'));
const ServiceUser = React.lazy(() => import('./components/views/Assets/ServiceUser'));
const AdminUser = React.lazy(() => import('./components/views/Assets/AdminUser'));
const Labels = React.lazy(() => import('./components/views/Assets/Labels'));
const BulkTasks = React.lazy(() => import('./components/views/Assets/BulkTasks'));

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
    path: '/user_management',
    name: 'User Management',
    exact: true,
    component: UserGroup
  },
  {
    path: '/user_management/user_group',
    name: 'UserGroup',
    component: UserGroup
  },
  {
    path: '/user_management/user_list',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/assets',
    name: 'Assets',
    exact: true,
    component: AssetList
  },
  {
    path: '/assets/asset_list',
    name: 'Asset List',
    component: AssetList
  },
  {
    path: '/assets/command_filters',
    name: 'Command Filters',
    component: CommandFilters
  },
  {
    path: '/assets/domain_list',
    name: 'Domain List',
    component: DomainList
  },
  {
    path: '/assets/system_user',
    name: 'System User',
    component: SystemUser
  },
  {
    path: '/assets/service_user',
    name: 'Service User',
    component: ServiceUser
  },
  {
    path: '/assets/admin_user',
    name: 'Admin User',
    component: AdminUser
  },
  {
    path: '/assets/labels',
    name: 'Labels',
    component: Labels
  },
  {
    path: '/assets/bulk_tasks',
    name: 'Bulk Tasks',
    component: BulkTasks
  },
];

export default routes;
