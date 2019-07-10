import React from 'react';
import { MdModeEdit, MdDelete, MdCheck, MdClose } from 'react-icons/md';
export const AdminManagement = [
  {
    name: 'ID',
    selector: 'id',
    sortable: true,
    left: true,
    maxWidth: '70px',
    minWidth: '30px',
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
    left: true
  },
  {
    name: 'Firstname',
    selector: 'firstName',
    sortable: true,
    left: true
  },
  {
    name: 'Lastname',
    selector: 'lastName',
    sortable: true,
    left: true
  },
  {
    name: 'Job Position',
    selector: 'jobPosition',
    sortable: true,
    left: true
  },
  {
    name: 'Role',
    selector: 'role',
    sortable: true,
    left: true
  },
  {
    name: 'Action',
    selector: 'action',
    center: true,
    cell: (row) => {
      return (
        <div className="tableActionButtons">
          <button onClick={() => console.log(row)} className="edit">
            <MdModeEdit />
            Edit
          </button>
          <button onClick={() => console.log(row)} className="delete">
            <MdDelete />
            Delete
          </button>
        </div>
      )
    }
  }
];
export const AdminAccountRequests = [
  {
    name: 'ID',
    selector: 'id',
    sortable: true,
    left: true,
    maxWidth: '70px',
    minWidth: '30px',
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
    left: true
  },
  {
    name: 'Firstname',
    selector: 'firstName',
    sortable: true,
    left: true
  },
  {
    name: 'Lastname',
    selector: 'lastName',
    sortable: true,
    left: true
  },
  {
    name: 'Job Position',
    selector: 'jobPosition',
    sortable: true,
    left: true
  },
  {
    name: 'Action',
    selector: 'action',
    center: true,
    cell: (row) => {
      return (
        <div className="tableActionButtons">
          <button onClick={() => console.log(row)} className="accept">
            <MdCheck />
            Accept
          </button>
          <button onClick={() => console.log(row)} className="decline">
            <MdClose />
            Decline
          </button>
        </div>
      )
    }
  }
];
