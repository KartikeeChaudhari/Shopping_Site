import React from 'react'

const NavBar = () => {
  return (
    <>
   <div className='navbar'>
   <h3 className='logo'>LOGO</h3>
    <ul>
      <li><a href='/'>Home</a></li>
      <li><a href='#'>Shop</a></li>
      </ul>
      <button>
        <span>3</span>
      </button>

   </div>
    </>
  )
}

export default NavBar