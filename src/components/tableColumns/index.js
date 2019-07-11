import React from 'react';
import { MdModeEdit, MdDelete, MdCheck, MdClose, MdCheckCircle, MdCancel } from 'react-icons/md';
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
    minWidth: '160px',
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
    minWidth: '180px',
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

export const YHotelManageProduct = [
  {
    name: 'ID',
    selector: 'id',
    sortable: true,
    left: true,
    maxWidth: '70px',
    minWidth: '30px',
  },
  {
    name: 'Image',
    selector: 'image',
    center: true
  },
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
    left: true
  },
  {
    name: 'Category',
    selector: 'category',
    sortable: true,
    left: true,
    cell: (row) => {
      return (
        <div className="category_tags_parent">
          {row.category.map((item, index) => (
            <div key={index} className="category_tags">{item}</div>
          ))}
        </div>
      )
    }
  },
  {
    name: 'Quantity',
    selector: 'quantity',
    sortable: true,
    center: true
  },
  {
    name: 'Active',
    selector: 'active',
    sortable: true,
    center: true,
    cell: (row) => {
      return (
        <div className="item_activity">
          {
            row.active ?
            <div className="active_product"><MdCheckCircle /></div> :
            <div className="disabled_product"><MdCancel /></div>
          }
        </div>
      )
    }
  }
]
