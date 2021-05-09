import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/items">Items</Link>
      &nbsp; | &nbsp;
      <Link to="categories">Categories</Link>
      &nbsp; | &nbsp;
      <Link to="venders">Venders</Link>
      &nbsp; | &nbsp;
      <span>Welcome</span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}