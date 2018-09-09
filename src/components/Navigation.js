import React from 'react'
import { NavLink } from 'react-router-dom'

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/new">New</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    )
  }
}

export default Navigation;