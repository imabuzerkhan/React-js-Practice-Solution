import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className="heading">
<div className="nav">
<div className="left">
  <h1>Recipe App</h1>
</div>
<div className="search">
  <input className='bar' type="text" />
</div>
<div className="right">
  <div>Nepal</div>
  <div>India</div>
  <div>America</div>
  <div>Chinese</div>
 <div>Bhutan</div>
</div>

</div>
</div>

    </>
  )
}

export default Navbar
