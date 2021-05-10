import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import Items from '../Items/Items';
import Categories from '../Categories/Categories';
import Venders from '../Venders/Venders';
import NavBar from '../../components/NavBar/NavBar';
import ItemForm from '../ItemForm/ItemForm';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  
  return (
    <main className="App">
      { 
      // user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            {/* <Route path="/items/itemform">
              <ItemForm />
            </Route> */}
            <Route path="/items">
              <Items />
            </Route>
            <Route path="/categories">
              <Categories />
            </Route>
            <Route path="/venders">
              <Venders />
            </Route>
            <Redirect to="/items" />
          </Switch>
        </>
        // :
        // <AuthPage setUser={setUser} />
      }
    </main>
  );
}
