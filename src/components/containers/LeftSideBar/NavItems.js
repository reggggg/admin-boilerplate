import React from 'react';
import { MdDashboard, MdSettings, MdExpandMore, MdShoppingBasket, MdRoomService } from 'react-icons/md';
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
    nav: 'Products',
    icon: <MdShoppingBasket />,
    childNavs: [
      {
        childNav: 'Y Hotel',
        href: 'products_yhotel'
      },
    ],
    caret: <MdExpandMore />
  },
  {
    isActive: false,
    nav: 'Services',
    icon: <MdRoomService />,
    childNavs: [
      {
        childNav: 'Y Hotel',
        href: 'services_yhotel'
      },
    ],
    caret: <MdExpandMore />
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
