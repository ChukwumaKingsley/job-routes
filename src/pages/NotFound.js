import React from 'react'
import { NavLink } from 'react-router-dom'

function NotFound() {
  return (
    <div>
        <h2>Page not found!</h2>
        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>

        <p>Go to the <NavLink to='/'>Home Page</NavLink>.</p>
    </div>
  )
}

export default NotFound