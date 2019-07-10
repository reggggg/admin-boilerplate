import React from 'react'
import './tableLoader.css';

const loader = () => <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;


export default function() {
  return loader();
}
