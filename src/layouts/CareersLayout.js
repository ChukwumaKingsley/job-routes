import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function CareersLayout() {
  return (
    <div className='careers-layout'>
        <h2>Careers</h2>
        <p>lorem lorem lorem lorem lorem lorem lorem lorem</p>

        <Outlet />
    </div>
  )
}

export default CareersLayout