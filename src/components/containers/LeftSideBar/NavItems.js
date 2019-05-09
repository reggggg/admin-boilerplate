import React from 'react';
import { FaSeedling, FaChevronDown, FaChartBar, FaRegUser } from 'react-icons/fa';
const NavItems = [
  {
    isActive: false,
    nav: 'Dashboard',
    icon: <FaChartBar/>,
    childNavs: [],
    caret: null,
    url: '/dashboard'
  },
  {
    isActive: false,
    nav: 'Users',
    icon: <FaRegUser/>,
    childNavs: [
      {
        childNav: 'User List',
        href: '/user_management/user_list'
      },
      {
        childNav: 'User Group',
        href: '/user_management/user_group'
      },
    ],
    caret: <FaChevronDown/>
  },
  {
    isActive: false,
    nav: 'Assets',
    icon: <FaRegUser/>,
    childNavs: [
      {
        childNav: 'Asset List',
        href: '/assets/asset_list'
      },
      {
        childNav: 'Domain',
        href: '/assets/domain_list'
      },
      {
        childNav: 'System User',
        href: '/assets/system_user'
      },
      {
        childNav: 'Service User',
        href: '/assets/service_user'
      },
      {
        childNav: 'Admin User',
        href: '/assets/admin_user'
      },
      {
        childNav: 'Labels',
        href: '/assets/labels'
      },
      {
        childNav: 'Command Filters',
        href: '/assets/command_filters'
      },
      {
        childNav: 'Bulk Tasks',
        href: '/assets/bulk_tasks'
      },
    ],
    caret: <FaChevronDown/>
  },
  {
    isActive: false,
    nav: 'Permissions',
    icon: <FaRegUser/>,
    childNavs: [
      {childNav: 'Admin Authentication'},
      {childNav: 'Group Admin Authentication'},
      {childNav: 'User Apply'},
      {childNav: 'Permission Approval'},
    ],
    caret: <FaChevronDown/>
  },
  {
    isActive: false,
    nav: 'Sessions',
    icon: <FaRegUser/>,
    childNavs: [
      {childNav: 'Session Online'},
      {childNav: 'Session Offline'},
      {childNav: 'Commands'},
      {childNav: 'Terminal'},
    ],
    caret: <FaChevronDown/>
  },
  {
    isActive: false,
    nav: 'IP Tables Management',
    icon: <FaRegUser/>,
    childNavs: [
      {childNav: 'IP Tables Status'},
      {childNav: 'Securit Groups Template'},
      {childNav: 'Security Groups'},
      {childNav: 'Push'},
    ],
    caret: <FaChevronDown/>
  },
  {
    isActive: false,
    nav: 'Job Center',
    icon: <FaRegUser/>,
    childNavs: [
      {childNav: '任务列表'},
      {childNav: 'Command Execution'},
    ],
    caret: <FaChevronDown/>
  },
  {
    isActive: false,
    nav: 'Audits',
    icon: <FaRegUser/>,
    childNavs: [
      {childNav: 'Login Log'},
      {childNav: 'FTP Log'},
      {childNav: 'Operate Log'},
      {childNav: 'Password Change Log'},
      {childNav: 'IP Tables History'},
      {childNav: 'Task History '},
    ],
    caret: <FaChevronDown/>
  },
  {
    isActive: false,
    nav: 'Menu Management',
    icon: <FaRegUser/>,
    childNavs: [
      {childNav: 'Dashboard'},
      {childNav: 'Navbar'},
    ],
    caret: <FaChevronDown/>
  },
  {
    isActive: false,
    nav: 'Settings',
    icon: <FaRegUser/>,
    childNavs: [],
    caret: null,
    url: '/'
  },
]
export default NavItems;
