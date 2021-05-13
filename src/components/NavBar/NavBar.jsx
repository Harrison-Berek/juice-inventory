import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <div>
        <img src="https://i.imgur.com/coiP9i5.png" alt="logo" style={{width: '10rem'}} />
      </div>
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <Link to="/items">Items</Link>
      &nbsp; | &nbsp;
      <Link to="/categories">Categories</Link>
      &nbsp; | &nbsp;
      <Link to="/venders">Venders</Link>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}