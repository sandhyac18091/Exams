import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    
    <div className='w-full bg-green-400 shadow-sm'>
        <header className='w-full bg-green-300 shadow-sm  h-10 ' >
            <nav className='ml-96 p-2'>
                <ul className='flex gap-8 '>
                    <li><Link to={'/'}>Home</Link> </li>
                    <li><Link to={'/add-vehicle'}>Add Vehicle</Link> </li>
                    <li><Link to={'/view-fleet'}>View fleet</Link> </li>
                    <li><Link to={'/service-details'}>Service Details</Link> </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default NavBar