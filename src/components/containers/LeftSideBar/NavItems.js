import React from 'react';
import { MdDashboard, MdSettings, MdExpandMore } from 'react-icons/md';
const NavItems = [
  {
    isActive: false,
    nav: 'Dashboard',
    icon: <MdDashboard />,
    childNavs: [],
    caret: null,
    url: '/dashboard'
  },
  {
    isActive: false,
    nav: 'Permissions',
    icon: <MdSettings />,
    childNavs: [
      {childNav: 'Users'},
      {
        childNav: 'Admin',
        href: 'manage_admin'
      },
    ],
    caret: <MdExpandMore />
  },
  {
    isActive: false,
    nav: 'Settings',
    icon: <MdSettings />,
    childNavs: [],
    caret: null,
    url: '/'
  },
]
export default NavItems;
