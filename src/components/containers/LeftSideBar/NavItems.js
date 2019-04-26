import React from 'react';
import { FaSeedling } from 'react-icons/fa';
const NavItems = [
  {
    isActive: false,
    nav: 'User Management',
    icon: <FaSeedling/>,
    childNavs: [
      {
        childNav: 'User'
      },
      {
        childNav: 'User Group',
        href: '/userGroup'
      },
    ]
  },
  {
    isActive: false,
    nav: 'Asset Management',
    icon: <FaSeedling/>,
    childNavs: [
      {childNav: 'Assets'},
      {childNav: 'Domain'},
      {childNav: 'System User'},
      {childNav: 'Service User'},
      {childNav: 'Management User'},
      {childNav: 'Label Management'},
      {childNav: 'Command Filtering'},
      {childNav: 'Batch Task'},
    ]
  },
  {
    isActive: false,
    nav: 'Authority Management',
    icon: <FaSeedling/>,
    childNavs: [
      {childNav: 'Administrator Authorization'},
      {childNav: 'Team Leader Authorization'},
      {childNav: 'User Application'},
      {childNav: 'Approval'},
    ]
  },
  {
    isActive: false,
    nav: 'Session Management',
    icon: <FaSeedling/>,
    childNavs: [
      {childNav: 'Online Conversation'},
      {childNav: 'Historical Conversation'},
      {childNav: 'Command Record'},
      {childNav: 'Terminal Management'},
    ]
  },
  {
    isActive: false,
    nav: 'Firewall Management',
    icon: <FaSeedling/>,
    childNavs: [
      {childNav: 'Firewall Status'},
      {childNav: 'Security Group Template'},
      {childNav: 'Security Group'},
    ]
  },
  {
    isActive: false,
    nav: 'Job Center',
    icon: <FaSeedling/>,
    childNavs: [
      {childNav: 'Task List'},
      {childNav: 'Command Execution'},
    ]
  },
  {
    isActive: false,
    nav: 'Log Audit',
    icon: <FaSeedling/>,
    childNavs: [
      {childNav: 'Login Log'},
      {childNav: 'FTP Log'},
      {childNav: 'Operation Log'},
      {childNav: 'Change the Secret Log'},
      {childNav: 'File Trasnfer Record'},
      {childNav: 'Firewall Change Record'},
      {childNav: 'Batch Task Record'},
    ]
  },
]
export default NavItems;
