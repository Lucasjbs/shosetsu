import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
      <label htmlFor='drop-action'>
        <span className='drop-menu'>Menu &#8595;</span>
      </label>
      <input type='checkbox' id='drop-action'></input>
      
      <ul className='horizontal'>
        <li><Link to={{ pathname: "/"}}>Home</Link></li>

        <li><Link to={{ pathname: "/story/writing"}}>Story Writing</Link></li>

        <li><Link to={{ pathname: "/story/upload"}}>Story Writing</Link></li>

        <li><Link to={{ pathname: "/"}}>Text Elements</Link></li>

        <li><Link to={{ pathname: "/"}}>Translation Displayer</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar