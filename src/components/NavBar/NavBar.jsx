import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  const [activeLink, setActiveLink] = useState('')

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav >
      <div>
        <img src="https://i.imgur.com/coiP9i5.png" alt="logo" style={{width: '10rem'}} />
      </div>
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <Link to="/items" className='NavBarLink' onClick={() => setActiveLink('items')} style={{color: activeLink === 'items' && 'purple'}} >Items</Link>
      &nbsp; | &nbsp;
      <Link to="/categories" className='NavBarLink' onClick={() => setActiveLink('cat')} style={{color: activeLink === 'cat' && 'purple'}}>Categories</Link>
      &nbsp; | &nbsp;
      <Link to="/venders" className='NavBarLink' onClick={() => setActiveLink('vend')} style={{color: activeLink === 'vend' && 'purple'}}>Venders</Link>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut} className='NavBarLink'>Log Out</Link>
    </nav>
  );
}