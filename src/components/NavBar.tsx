import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar:React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <Link to="/" className="text-lg font-bold">
        #VANLIFE
      </Link>
      <div className="space-x-4">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "font-semibold underline" : "text-gray-600"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) =>
            isActive ? "font-semibold underline" : "text-gray-600"
          }
        >
          Vans
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar